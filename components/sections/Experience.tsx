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
  // const ctaRef = useRef<HTMLDivElement | null>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {

  //     ScrollTrigger.matchMedia({

  //       "(min-width: 768px)": () => {

  //         // Title animation
  //         gsap.fromTo(
  //           titleRef.current,
  //           { x: -100, autoAlpha: 0, rotateZ: -5 },
  //           {
  //             x: 0,
  //             autoAlpha: 1,
  //             rotateZ: 0,
  //             duration: 1,
  //             ease: "power4.out",
  //             scrollTrigger: {
  //               trigger: titleRef.current,
  //               start: "top 100%",
  //               toggleActions: "play none none reverse"
  //             }
  //           }
  //         );

  //         const cards = gridRef.current?.querySelectorAll('.experience-card');
  //         if (cards) {
  //           gsap.fromTo(
  //             cards,
  //             { y: 30, autoAlpha: 0, rotateX: 25, scale: 0.9 },
  //             {
  //               y: 0,
  //               autoAlpha: 1,
  //               rotateX: 0,
  //               scale: 1,
  //               duration: 1,
  //               stagger: 0.2,
  //               ease: "power3.out",
  //               scrollTrigger: {
  //                 trigger: gridRef.current,
  //                 start: "top 100%",
  //                 toggleActions: "play none none reverse"
  //               }
  //             }
  //           );

  //           cards.forEach((card) => {
  //             const date = card.querySelector('.exp-date');
  //             const role = card.querySelector('.exp-role');
  //             const company = card.querySelector('.exp-company');
  //             const desc = card.querySelector('.exp-desc');

  //             gsap.fromTo(
  //               date,
  //               { x: -20, autoAlpha: 0 },
  //               {
  //                 x: 0,
  //                 autoAlpha: 1,
  //                 duration: 0.1,
  //                 scrollTrigger: {
  //                   trigger: card,
  //                   start: "top 100%",
  //                   toggleActions: "play none none reverse"
  //                 }
  //               }
  //             );

  //             gsap.fromTo(
  //               [role, company],
  //               { x: -20, autoAlpha: 0 },
  //               {
  //                 x: 0,
  //                 autoAlpha: 1,
  //                 duration: 0.1,
  //                 stagger: 0.1,
  //                 ease: "power2.out",
  //                 scrollTrigger: {
  //                   trigger: card,
  //                   start: "top 100%",
  //                   toggleActions: "play none none reverse"
  //                 }
  //               }
  //             );

  //             gsap.fromTo(
  //               desc,
  //               { y: 60, autoAlpha: 0, filter: "blur(3px)" },
  //               {
  //                 y: 0,
  //                 autoAlpha: 1,
  //                 filter: "blur(0px)",
  //                 duration: 0.2,
  //                 delay: 0.1,
  //                 scrollTrigger: {
  //                   trigger: card,
  //                   start: "top 85%",
  //                   toggleActions: "play none none reverse"
  //                 }
  //               }
  //             );
  //           });
  //         }

  //         // CTA (desktop only)
  //         gsap.fromTo(
  //           ctaRef.current,
  //           { scale: 0, autoAlpha: 0, rotation: -180 },
  //           {
  //             scale: 1,
  //             autoAlpha: 1,
  //             rotation: 0,
  //             duration: 0.6,
  //             ease: "elastic.out(1, 0.6)",
  //             scrollTrigger: {
  //               trigger: ctaRef.current,
  //               start: "top 85%",
  //               toggleActions: "play none none reverse"
  //             }
  //           }
  //         );

  //         gsap.to(ctaRef.current, {
  //           scale: 1.05,
  //           duration: 0.5,
  //           repeat: -1,
  //           yoyo: true,
  //           ease: "sine.inOut",
  //           scrollTrigger: {
  //             trigger: ctaRef.current,
  //             start: "top 85%",
  //           }
  //         });
  //       },

  //       "(max-width: 767px)": () => {

  //         // Title animation (mobile-safe)
  //         gsap.fromTo(
  //           titleRef.current,
  //           { x: -60, autoAlpha: 0 },
  //           {
  //             x: 0,
  //             autoAlpha: 1,
  //             duration: 0.8,
  //             ease: "power3.out",
  //             scrollTrigger: {
  //               trigger: titleRef.current,
  //               start: "top 90%",
  //               toggleActions: "play none none reverse"
  //             }
  //           }
  //         );

  //         const cards = gridRef.current?.querySelectorAll('.experience-card');
  //         if (cards) {
  //           gsap.fromTo(
  //             cards,
  //             { y: 20, autoAlpha: 0 },
  //             {
  //               y: 0,
  //               autoAlpha: 1,
  //               duration: 0.8,
  //               stagger: 0.15,
  //               ease: "power3.out",
  //               scrollTrigger: {
  //                 trigger: gridRef.current,
  //                 start: "top 90%",
  //                 toggleActions: "play none none reverse"
  //               }
  //             }
  //           );

  //           cards.forEach((card) => {
  //             const date = card.querySelector('.exp-date');
  //             const role = card.querySelector('.exp-role');
  //             const company = card.querySelector('.exp-company');
  //             const desc = card.querySelector('.exp-desc');

  //             gsap.fromTo(
  //               [date, role, company, desc],
  //               { y: 20, autoAlpha: 0 },
  //               {
  //                 y: 0,
  //                 autoAlpha: 1,
  //                 duration: 0.4,
  //                 stagger: 0.08,
  //                 scrollTrigger: {
  //                   trigger: card,
  //                   start: "top 90%",
  //                   toggleActions: "play none none reverse"
  //                 }
  //               }
  //             );
  //           });
  //         }
  //       }
  //     });

  //     ScrollTrigger.refresh();

  //   }, mainRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <main ref={mainRef} className='mt-16 mb-12 py-12 border-y border-[#00000015]'>
      <section className='flex items-start space-x-2'>
        <h1 ref={titleRef} className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">
          Work Experience
        </h1>
        <span>
          <LuBriefcase className='text-2xl rotate-12' />
        </span>
      </section>

      <section ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <span className="exp-date text-sm md:text-[15px] text-gray-500 tracking-tighter">
              <p>{exp.date}</p>
            </span>
            <span>
              <h1 className="exp-role text-2xl font-semibold mt-1 tracking-tight">{exp.role}</h1>
              <h3 className="exp-company text-[#4287F6] text-xl">{exp.company}</h3>
            </span>
            <span className="text-gray-500 mt-2 text-[16px]">
              <p className="exp-desc mt-3 md:mt-1 tracking-wide text-justify">{exp.desc}</p>
            </span>
          </div>
        ))}

        <div className="hidden md:flex items-center justify-center mx-auto">
          <h1 className="font-semibold text-3xl">Your Company Next??</h1>
        </div>
      </section>
    </main>
  )
}

export default Experience
