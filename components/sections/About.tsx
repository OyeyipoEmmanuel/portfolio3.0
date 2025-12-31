'use client'
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiSolidity, SiTailwindcss, SiRedux, SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const mainRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const marqueeRef = useRef<HTMLElement | null>(null);

    const classNameForIcons = "text-[#BDBDBD] text-3xl"

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation - slides in with bounce
            gsap.fromTo(
                titleRef.current,
                { x: -100, autoAlpha: 0, rotation: -5 },
                { 
                    x: 0, 
                    autoAlpha: 1, 
                    rotation: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.75)",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Text paragraphs stagger with blur effect
            gsap.fromTo(
                textRef.current,
                { y: 50, autoAlpha: 0, filter: "blur(10px)" },
                { 
                    y: 0, 
                    autoAlpha: 1, 
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Marquee section - pop in with scale and rotation
            gsap.fromTo(
                marqueeRef.current,
                { scale: 0.5, autoAlpha: 0, rotateY: 90 },
                { 
                    scale: 1, 
                    autoAlpha: 1, 
                    rotateY: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: marqueeRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="py-24">
            <h1 ref={titleRef} className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">About</h1>
            <section className="pt-8">
                <p ref={textRef} className="text-[18px] font-normal md:tracking-[.01em] md:text-lg md:leading-[1.4em] text-[#5a5a5a] split">
                    I'm a Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences. With over 2 years of experience, I specialize in building scalable web applications using React, Next.js, and TypeScript.<br /><br />

                    My approach combines clean, maintainable code with a sharp eye for UI/UX. Whether it's an AI-integrated tool or a high-traffic e-commerce platform to architecting intricateqwerty
                    admin dashboards, I focus on optimizing for speed, accessibility, and an intuitive user journey.<br /><br /> I don't just build interfaces; I build solutions that challenge the status quo.
                </p>
            </section>

            <section className="max-w-[30rem] mx-auto mt-12 customBg py-6 shadow-xl rounded-xl px-12 ">
                <Marquee speed={80} pauseOnHover>
                    <div className="flex space-x-5">
                        <FaHtml5 className={classNameForIcons} />
                        <FaCss3 className={classNameForIcons} />
                        <FaGitAlt className={classNameForIcons} />
                        <FaGithub className={classNameForIcons} />
                        <FaJava className={classNameForIcons} />
                        <FaJs className={classNameForIcons} />
                        <FaPython className={classNameForIcons} />
                        <SiRedux className={classNameForIcons} />
                        <SiPhp className={classNameForIcons} />
                        <SiSolidity className={classNameForIcons} />
                        <SiTailwindcss className={classNameForIcons} />
                        <SiTypescript className={classNameForIcons} />
                        <SiVite className={classNameForIcons} />
                        <RiNextjsFill className={classNameForIcons} />
                    </div>
                </Marquee>
            </section>

        </main>
    )
}

export default About