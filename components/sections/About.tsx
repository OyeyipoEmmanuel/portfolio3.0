import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiSolidity, SiTailwindcss, SiRedux, SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";






const About = () => {

const classNameForIcons = "text-[#BDBDBD] text-3xl"
    return (
        <main className="py-24">
            <h1 className="text-[32      px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">About</h1>
            <section className="pt-8">
                <p className="text-[16px] font-normal md:tracking-[.01em] md:text-lg md:leading-[1.4em] text-[#5a5a5a] split">
                    I’m a Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences. With over 2 years of experience, I specialize in building scalable web applications using React, Next.js, and TypeScript.<br /><br />

                    My approach combines clean, maintainable code with a sharp eye for UI/UX. Whether it’s an AI-integrated tool or a high-traffic e-commerce platform to architecting intricateqwerty
                     admin dashboards, I focus on optimizing for speed, accessibility, and an intuitive user journey.<br /><br /> I don’t just build interfaces; I build solutions that challenge the status quo.
                </p>
            </section>

            <section className="max-w-[30rem] mx-auto mt-12 bg-[url('/assets/images/background2.webp')] bg-cover bg-no-repeat bg-center py-6 shadow-xl rounded-xl px-12 ">
                <Marquee speed={30} pauseOnHover>
                    <div className="flex space-x-3">
                    <FaHtml5 className={classNameForIcons}/>
                    <FaCss3 className={classNameForIcons}/>
                    <FaGitAlt className={classNameForIcons}/>
                    <FaGithub className={classNameForIcons}/>
                    <FaJava className={classNameForIcons}/>
                    <FaJs className={classNameForIcons}/>
                    <FaPython className={classNameForIcons}/>
                    <SiRedux className={classNameForIcons}/>
                    <SiSolidity className={classNameForIcons}/>
                    <SiTailwindcss className={classNameForIcons}/>
                    <SiTypescript className={classNameForIcons}/>
                    <SiVite className={classNameForIcons}/>
                    <RiNextjsFill className={classNameForIcons}/>
                    </div>
                </Marquee>
            </section>

        </main>
    )
}

export default About