'use client';

import "./globals.css";
import { switzerFont } from "./src/fonts/myfonts";
import Navbar from "@/components/layout/navbar";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en">
      <body className={`antialiased ${switzerFont.variable} scroll-smooth`}>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
