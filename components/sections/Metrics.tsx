'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import gsap from 'gsap'
import Autoplay from "embla-carousel-autoplay"


const METRIC_IMGS = ['/assets/images/metric1.webp', '/assets/images/metric2.webp', '/assets/images/metric3.webp', '/assets/images/metric4a.avif', '/assets/images/metric4b.avif']

const quotes = [
    'These metrics are critical: they shape user experience, performance budgets, and infrastructure efficiency.',
    'Performance is not an optimization phase — it is a product feature users experience every time they load a page.',
    'Every unnecessary millisecond compounds: in cost, in infrastructure load, and in lost user trust.',
    'From 7s to 1.7s: This ~90% reduction in LCP makes user feel like the webpage loaded instantly.',

]

const Metrics = () => {
    const [quoteState, setQuoteState] = useState<string>('These metrics are critical: they shape user experience, performance budgets, and infrastructure efficiency.')
    const quoteRef = useRef<HTMLHeadingElement | null>(null);

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    useEffect(() => {
        let idx = 0
        const interval = setInterval(() => {

            setQuoteState(quotes[idx])
            idx++

            if (idx == quotes.length) {
                idx = 0
            }
        }, 4000)

        return () => clearInterval(interval);

    }, [])

    useLayoutEffect(() => {
        if (!quoteRef.current) return;

        gsap.fromTo(
            quoteRef.current,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: .5, ease: "back.inOut" }
        );
    }, [quoteState]);

    return (
        <main className="py-24 lg:pt-40 lg:pb-16">
            <Carousel
                className="w-full max-w-lg mx-auto"
                plugins={[plugin.current]}
            >
                <CarouselContent >
                    {METRIC_IMGS.map((item, idx) => (
                        <CarouselItem key={idx} >
                            <div className="w-full h-72 flex items-center justify-center">
                                <Image
                                    src={item}
                                    alt="metric"
                                    width={512}
                                    height={288}
                                    className={`border border-[#00000015] rounded-[20px] ${idx > 2 ? "aspect-square" : "asp"} lg:object-cover lg:w-full lg:h-full`}
                                />

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className='hidden md:flex'/>
                <CarouselNext className='hidden md:flex'/>
            </Carousel>

            <div className="max-w-3xl mx-auto py-8">
                <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {/* Decorative quote mark */}
                    <div className="absolute -top-6 -left-6 text-8xl text-blue-500/20 font-serif leading-none">
                        "
                    </div>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

                        <p
                            ref={quoteRef}
                            className="pl-8 text-lg md:text-xl font-medium italic text-slate-700 leading-relaxed"
                        >
                            {quoteState}
                        </p>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-indigo-200 rounded-br-2xl" />
                </div>
            </div>

        </main>
    )
}

export default Metrics