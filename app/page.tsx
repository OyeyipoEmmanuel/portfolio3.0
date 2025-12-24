import About from "@/components/sections/About";
import HomePg from "@/components/sections/Home"
export default function Home() {
  return (
    <div className="pt-24 max-w-3xl mx-auto px-4 md:max-w-6xl">
      <HomePg/>
      <About/>
    </div>
  );
}
