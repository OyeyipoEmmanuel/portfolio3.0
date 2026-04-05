'use client'
import { experiences } from "@/data/experience"
import { useRef } from "react"
import { LuBriefcase } from "react-icons/lu";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const Experience = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={mainRef} className='mt-16 mb-12 py-12 border-y border-[#00000015]'>
      <section className='flex items-start space-x-2'>
        <h2 ref={titleRef} className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">
          Work Experience
        </h2>
        <span>
          <LuBriefcase className='text-2xl rotate-12' aria-hidden="true" />
        </span>
      </section>

      <section ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <span className="exp-date text-sm md:text-[15px] text-gray-500 tracking-tighter">
              <p>{exp.date}</p>
            </span>
            <span>
              <h3 className="exp-role text-2xl font-semibold mt-1 tracking-tight">{exp.role}</h3>
              <p className="exp-company text-[#4287F6] text-xl">{exp.company}</p>
            </span>
            <span className="text-gray-500 mt-2 text-[16px]">
              <p className="exp-desc mt-3 md:mt-1 tracking-wide text-justify">{exp.desc}</p>
            </span>
          </div>
        ))}

        <div className="hidden md:flex items-center justify-center mx-auto">
          <p className="font-semibold text-3xl">Your Company Next??</p>
        </div>
      </section>
    </main>
  )
}

export default Experience