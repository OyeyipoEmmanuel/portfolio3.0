'use client'
import { useRef, useState, useLayoutEffect } from "react";
import { type ProjectsDataType } from "@/data/projects";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonUI from "./ButtonUi";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }: { project: ProjectsDataType }) => {
    const [clampNumber, setClampNumber] = useState(2);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const descriptionRef = useRef<HTMLSpanElement | null>(null);
    const stackRef = useRef<HTMLDivElement | null>(null);
    const buttonsRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            // Card container - Fade in and scale
            tl.fromTo(
                cardRef.current,
                { autoAlpha: 0, scale: 0.95, y: 30 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.4 }
            );

            // Image container - Slide up and fade in
            tl.fromTo(
                imageContainerRef.current,
                { y: 30, autoAlpha: 0, scale: 0.95 },
                { y: 0, autoAlpha: 1, scale: 1, duration: 0.6 },
                "-=0.4"
            );

            // Title - Slide in from left
            tl.fromTo(
                titleRef.current,
                { x: -30, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.4 },
                "-=0.4"
            );

            // Description - Fade in with blur
            tl.fromTo(
                descriptionRef.current,
                { autoAlpha: 0, filter: "blur(5px)" },
                { autoAlpha: 1, filter: "blur(0px)", duration: 0.5 },
                "-=0.3"
            );

            // Stack items - Stagger in from bottom
            const stackItems = stackRef.current?.querySelectorAll('span');
            if (stackItems) {
                tl.fromTo(
                    stackItems,
                    { y: 20, autoAlpha: 0, scale: 0.8 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: "back.out(1.5)"
                    },
                    "-=0.4"
                );
            }

            // Buttons - Pop in
            tl.fromTo(
                buttonsRef.current,
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.4, ease: "back.out(1.3)" },
                "-=0.2"
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    const handleShowMore = () => {
        const isCollapsing = clampNumber === 8;

        // Save current scroll position
        const scrollY = window.scrollY;

        const newClamp = isCollapsing ? 2 : 8;
        setClampNumber(newClamp);

        requestAnimationFrame(() => {
            // Refresh GSAP after layout change
            ScrollTrigger.refresh();

            if (isCollapsing) {
                // Restore scroll position so it doesn't jump
                window.scrollTo({ top: scrollY, behavior: "auto" });
            }
        });

        if (descriptionRef.current) {
            gsap.fromTo(
                descriptionRef.current,
                { autoAlpha: 0.7, y: -5 },
                { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    };


    return (
        <div ref={cardRef} className="w-full rounded-[20px] overflow-hidden p-5 border-[1.5px] border-[#0000001a] relative transition-all ">
            <div
                ref={imageContainerRef}
                className="group relative w-full border border-[#00000015] rounded-[20px] overflow-hidden"
                onMouseEnter={() => {
                    const video = videoRef.current;
                    if (!video) return;

                    // load source only on hover
                    if (!video.src) {
                        video.src = project.videoSrc;
                        video.load();
                    }
                    video.play();
                }}
                onMouseLeave={() => {
                    const video = videoRef.current;
                    if (!video) return;

                    video.pause();
                    video.currentTime = 0;
                }}
                //Video play For mobile view
            >
                <Image
                    width={800}
                    height={600}
                    src={project.imageSrc}
                    alt={project.header + " Preview"}
                    className="inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 group-hover:opacity-0"
                />
                <video
                    ref={videoRef}
                    muted
                    loop
                    preload="none" // important: don't fetch anything until hover
                    className="absolute inset-0 w-full h-full object-center z-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
            </div>

            <div className="flex justify-end mt-1">
                <p className="text-black font-light text-[15px] md:hidden">Tap for video preview</p>
                <p className="text-black font-light text-[15px] hidden md:block">Hover for video preview</p>
            </div>

            <div className='mt-4 flex flex-col space-y-3'>
                <h1 ref={titleRef} className='text-[24px] font-semibold mb-2'>{project.header}</h1>
                <span ref={descriptionRef} className=''>
                    <p
                        className={`text-[#5a5a5a] text-[16px] ${clampNumber === 2 ? "line-clamp-2" : "line-clamp-none"
                            }`}
                    >
                        {project.text}
                    </p>

                    {clampNumber != 8 && (
                        <p className='underline text-purple-800 cursor-pointer font-semibold' onClick={handleShowMore}>show more</p>
                    )}
                    {clampNumber == 8 && (
                        <p className='underline text-purple-800 cursor-pointer font-semibold' onClick={handleShowMore}>show less</p>
                    )}
                </span>

                <div ref={stackRef} className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 min-h-[80px]">
                    {project.stack.map((stack, idx) => (
                        <span key={idx} className="px-4 group relative overflow-hidden py-2 border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500">
                            <p className="relative group-hover:text-white z-10 text-[13px] md:text-md">{stack}</p>
                        </span>
                    ))}
                </div>
            </div>

            <div ref={buttonsRef} className="flex items-center space-x-3 text-white mt-8 pt-4 border-t border-[#00000041]">
                <Link href={project.liveLink} target="_blank">
                    <ButtonUI className="px-10 md:px-14 py-2 flex space-x-1 hover:md:px-15 transition-all duration-300">
                        <p className="tracking-wide md:text-lg">Visit</p>
                        <BiLinkExternal className="text-xs" />
                    </ButtonUI>
                </Link>
                <Link href={project.githubLink} target="_blank">
                    <button className="cursor-pointer px-4 text-black group relative overflow-hidden py-2 border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500 flex ">
                        <p className="relative group-hover:text-white z-10">Github Repo</p>
                        <BiLinkExternal className="relative group-hover:text-white z-10" />
                    </button>
                </Link>
            </div>

        </div>

    );
}

export default ProjectCard