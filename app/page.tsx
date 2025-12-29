import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import HomePg from "@/components/sections/Home"
import Projects from "@/components/sections/Projects";
export default function Home() {
  return (
    <div className="pt-32 max-w-3xl mx-auto px-4 md:max-w-6xl">
      <HomePg/>
      <About/>
      <Projects/>
      <Experience/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
