import { GoHome } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../ui/Button";


const Navbar = () => {
  const styleForIcons = "text-black/80 text-xl hover:scale-110 transition-all duration-200"
  const hoverForSpanIconElement = "hover:bg-gray-50 w-fit p-3 rounded-xl transition-all duration-200 cursor-pointer"
  return (
    <nav className="fixed z-50 w-[90%] md:w-[30%] top-6 bg-clip-padding backdrop-filter inset-x-0 mx-auto backdrop-blur-[7px] bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100 border border-gray-300 rounded-xl py-1">
      <section className="grid grid-cols-[20%_40%_40%] gap-1 w-full">

        <div className="flex items-center justify-center border-r border-gray-300">
          <span className={`${hoverForSpanIconElement}`}>
            <GoHome className={`${styleForIcons}`} />
          </span>
        </div>

        <div className="flex items-center justify-between border-r border-gray-300">
          <span className={`${hoverForSpanIconElement}`}>
            <FaLinkedinIn className={`${styleForIcons}`} />
          </span>
          <span className={`${hoverForSpanIconElement}`}>
            <FaXTwitter className={`${styleForIcons}`} />
          </span>
          <span className={`${hoverForSpanIconElement}`}>
            <RiGithubLine className={`${styleForIcons}`} />
          </span>
        </div>

        <div className="px-3">
          <Button className=" text-white mx-auto text-center px-4 py-3 space-x-1 hover:px-5 transition-all duration-400">
            <p>Projects</p>
          </Button>
        </div>

      </section>
    </nav>
  )
}

export default Navbar