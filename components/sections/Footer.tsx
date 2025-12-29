import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { RiGithubLine } from "react-icons/ri"
import { SiGmail } from "react-icons/si"


const Footer = () => {
    const styleForIcons = "text-black/80 text-xl hover:scale-110 transition-all duration-200"
    const hoverForSpanIconElement = "hover:bg-gray-50 w-fit p-3 rounded-xl transition-all duration-200 cursor-pointer"
    return (
        <footer className='mt-24 py-12 border-t border-gray-300 flex items-center justify-center'>
            <div>
                <h1 className='tracking-tighter text-gray-600'>&copy; devemmanuel. All rights reserved</h1>

                <div className="flex items-center justify-center space-x-2 mt-2 border-gray-300">
                    <a href='mailto:deleoth702@gmail.com?subject=From%20your%20portfolio' target="_blank" className={`${hoverForSpanIconElement}`}>
                        <SiGmail className={`${styleForIcons}`} />
                    </a>
                    <a href="https://linkedin.com/in/emmanuel-the-dev" target="_blank" className={`${hoverForSpanIconElement}`}>
                        <FaLinkedinIn className={`${styleForIcons}`} />
                    </a>
                    <a href="https://x.com/emma_leo01?s=21" target="_blank" className={`${hoverForSpanIconElement}`}>
                        <FaXTwitter className={`${styleForIcons}`} />
                    </a>
                    <a href="https://github.com/OyeyipoEmmanuel" target="_blank" className={`${hoverForSpanIconElement}`}>
                        <RiGithubLine className={`${styleForIcons}`} />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer