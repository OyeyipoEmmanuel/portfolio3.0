'use client'
import Image from "next/image";
import Button from "../ui/Button"
import { AiOutlineDownload } from "react-icons/ai";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const metadata = {
  title: "Frontend Engineer Portfolio – Emmanuel Oyeyipo",
  description:
    "I craft dynamic, responsive, and visually compelling web applications, specializing in frontend engineering that blends performance, usability, and thoughtful design to deliver seamless experiences across all devices",
};

const heyInDiffLangArr: string[] = ["Hey", "Hola", "Salut", "Hallo", "Ciao", "Oi", "你好", "مرحباً"]
const Home = () => {
    const [hey, setHey] = useState<string>("Hey")

    const mainRef = useRef<HTMLElement | null>(null);
    const imageRef = useRef<HTMLElement | null>(null);
    const textRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let idx = 0
        const interval = setInterval(() => {

            setHey(heyInDiffLangArr[idx])
            idx++

            if (idx == heyInDiffLangArr.length) {
                idx = 0
            }
        }, 2000)

        return () => clearInterval(interval);

    }, [])
    
    const heyRef = useRef<HTMLHeadingElement | null>(null);

    useLayoutEffect(() => {
        if (!heyRef.current) return;

        gsap.fromTo(
            heyRef.current,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: .5, ease: "back.inOut" }
        );
    }, [hey]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                imageRef.current,
                { scale: 0.8, autoAlpha: 0, y: 30 },
                { scale: 1, autoAlpha: 1, y: 0, duration: 1.2 }
            ).fromTo(
                textRef.current,
                { x: -50, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1 },
                "-=0.8"
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} id="home" className="flex flex-col items-center justify-center space-y-5 md:flex-row-reverse md:justify-between">
            <section ref={imageRef} className="relative">
                <Image
                    src="/assets/images/Emmanuel-Oyeyipo-HeroImg.webp"
                    priority={true}
                    alt="Emmanuel Oyeyipo - Frontend Engineer"
                    width={280}
                    height={280}
                    className="aspect-square rounded-full mx-auto overflow-hidden bg-gray-900 mt-0 md:mt-10 lg:mt-0 md:w-[350px] lg:w-[450px]"
                />
                <div className="">
                    <span className="absolute -top-3 left-6 md:left-16 md:top-4 bg-white/90 backdrop-blur text-gray-900 
                   text-sm font-medium shadow-md px-4 py-1.5 rounded-full">
                        user-centric
                    </span>

                    <span className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/90 backdrop-blur text-gray-900 text-sm font-medium shadow-md px-4 py-1.5 rounded-full">
                        performance-driven
                    </span>

                    <span className="absolute bottom-4 left-1/6 -translate-x-1/2 bg-white/90 backdrop-blur 
                   text-gray-900 text-sm font-medium shadow-md px-4 py-1.5 rounded-full">
                        optimization
                    </span>
                </div>
            </section>

            <section ref={textRef} className="md:w-[50%]">

                <span className="flex items-center space-x-2">
                    <h3 className="text-xl md:text-2xl text-gray-600 tracking-wider" ref={heyRef}>{hey}</h3>
                    <h3 className="text-xl md:text-2xl text-gray-600 tracking-wider">I'm</h3>
                </span>
                <span className="flex flex-col">
                    <h1 className="text-[32px] tracking-tight md:text-6xl uppercase">Emmanuel Oyeyipo</h1>
                    <h3 className="text-[26px] tracking-tighter text-gray-600">Frontend Engineer</h3>
                    <p className="text-[18px] py-4">I craft dynamic, responsive, and visually compelling web applications, specializing in frontend engineering that blends performance, usability, and thoughtful design to deliver seamless experiences across all devices. Computer science undergrad.</p>
                </span>

                <span className="flex space-x-3 items-center">
                    <a href="/Emmanuel Oyeyipo CV.pdf" download>
                        {/* <Button className="bg-[#2563EB] text-white px-8 py-3 space-x-1 hover:px-9 transition-all duration-400">
                            <AiOutlineDownload />
                            <p>Resume</p>
                        </Button> */}
                        <Button className=" text-white px-8 py-3 space-x-1 hover:px-9 transition-all duration-400">
                            <AiOutlineDownload />
                            <p>Resume</p>
                        </Button>
                    </a>
                    <span className="bg-[#E1F9DC] flex items-center justify-center w-fit px-6 py-3 rounded-full space-x-2">
                        <div className="w-2 h-2 bg-[#178D00] animate-pulse [animation-duration:1s] rounded-full "></div>
                        <p className="text-[#178D00]">Available</p>
                    </span>
                </span>
            </section>
        </main>
    )
}

export default Home