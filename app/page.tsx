'use client'
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import HomePg from "@/components/sections/Home"
import Projects from "@/components/sections/Projects";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    if (ScrollSmoother.get()) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);
  return (
    <div className="pt-32 max-w-3xl mx-auto px-4 md:max-w-6xl">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HomePg />
          <About />
          <Projects />
          <Experience />
          <CallToAction />
          <Footer />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Emmanuel Oyeyipo",
            jobTitle: "Frontend Engineer",
            url: "https://devemmanuel.tech",
            sameAs: [
              "https://github.com/OyeyipoEmmanuel",
              "https://linkedin.com/in/emmanuel-the-dev",
              "https://x.com/emma_leo01?s=21",
            ],
            knowsAbout: [
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Web Performance",
              "Web Optimization",
              "SEO",
              "Progressive Web Application",
              "Python",
              "Java",
              "Solidity",
              "Web3",
              "Ethers.JS",
              "Data Structure and Algorithm"
            ],
          }),
        }}
      />

    </div>
  );
}
