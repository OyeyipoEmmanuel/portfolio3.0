'use client'
import { useLayoutEffect, useRef } from 'react'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    const mainRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(mainRef.current, {
                scale: 1.05,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top 75%",
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);



    return (
        <main ref={mainRef} className="mt-24 bg-[url('/assets/images/background2.webp')] bg-cover bg-repeat-space bg-center rounded-md">
            <section className='flex items-center justify-center mx-auto min-h-[300px]'>
                <div>
                    <h1 className='text-white font-semibold tracking-tighter text-2xl text-center md:text-4xl font-barlow'>You've come a long way!</h1>
                    <h3 className='text-white/80 text-center mt-2 text-xl tracking-tight font-barlow'>Like what you see?</h3>

                    <div className='flex flex-col md:flex-row items-center space-y-4 w-full md:space-y-0 md:space-x-6 justify-center mt-16'>

                        <a href='mailto:deleoth702@gmail.com?subject=From%20your%20portfolio' target="_blank">
                            <button className='flex items-center space-x-2 text-lg bg-white px-12 md:px-5 py-2 hover:scale-105 duration-300 transition-all cursor-pointer'>
                                <p>Send me an</p>
                                <SiGmail />
                            </button>
                        </a>

                        <a href="https://wa.me/2348111184177?text=Hello%20Emmanuel,%20I%20checked%20your%20portfolio%20and"
                        >
                            <button className='flex items-center space-x-2 text-lg bg-white px-13 md:px-5 py-2 hover:scale-105 duration-300 transition-all cursor-pointer'>
                                <p>Text me on</p>
                                <IoLogoWhatsapp className='text-green-700' />
                            </button>
                        </a>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default CallToAction