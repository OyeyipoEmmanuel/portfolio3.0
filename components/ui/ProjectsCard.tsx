import { useRef, useState } from "react";
import { type ProjectsDataType } from "@/data/projects";
import Image from "next/image";
import Button from "./Button";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";


const ProjectCard = ({ project }: { project: ProjectsDataType }) => {
    const [clampNumber, setClampNumber] = useState(2);
    const videoRef = useRef<HTMLVideoElement | null>(null)

    return (
        <div className="w-full rounded-[20px] overflow-hidden p-5 border-[1.5px] border-[#0000001a] relative transition-all ">
            <div
                className="group relative w-full border border-[#00000015] rounded-[20px] overflow-hidden"
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => {
                    videoRef.current?.pause();
                    if (videoRef.current) videoRef.current.currentTime = 0;
                }}
            >
                <Image
                    width={800}
                    height={600}
                    src={project.imageSrc}
                    alt={project.header}
                    className=" inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 group-hover:opacity-0"
                />
                <video
                    ref={videoRef}
                    src={project.videoSrc}
                    muted
                    loop
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-center z-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
            </div>
            <div className="flex justify-end mt-1">
                <p className="text-black font-light text-[15px] md:hidden">Tap for video preview</p>
                <p className="text-black font-light text-[15px] hidden md:block">Hover for video preview</p>
            </div>

            <div className='mt-4 flex flex-col space-y-3'>
                <h1 className='text-[24px] font-semibold mb-2'>{project.header}</h1>
                <span className=''>
                    <p
                        className={`text-[#5a5a5a] text-[16px] ${clampNumber === 2 ? "line-clamp-2" : "line-clamp-8"
                            }`}
                    >
                        {project.text}
                    </p>

                    {clampNumber != 8 && (
                        <p className='underline text-purple-800 cursor-pointer font-semibold' onClick={() => setClampNumber(8)}>show more</p>
                    )}
                    {clampNumber == 8 && (
                        <p className='underline text-purple-800 cursor-pointer font-semibold' onClick={() => setClampNumber(2)}>show less</p>
                    )}
                </span>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 min-h-[80px]">
                    {project.stack.map((stack, idx) => (
                        <span key={idx} className="px-4 group relative overflow-hidden py-2 border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500">
                            <p className="relative group-hover:text-white z-10 text-[13px] md:text-md">{stack}</p>
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center space-x-3 text-white mt-8 pt-4 border-t border-[#00000041]">
                <Link href={project.liveLink} target="_blank">
                    <Button className="px-10 md:px-14 py-2 flex space-x-1 hover:md:px-15 transition-all duration-300">
                        <p className="tracking-wide md:text-lg">Visit</p>
                        <BiLinkExternal className="text-xs" />
                    </Button>
                </Link>
                <Link href={project.githubLink} target="_blank">
                    <button className="cursor-pointer px-4 text-black group relative overflow-hidden py-2 border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500 flex ">
                        <p className="relative group-hover:text-white z-10">Github Repo</p>
                        <BiLinkExternal className="relative group-hover:text-white z-10" />
                    </button>
                </Link>
            </div>

        </div>

    );
}

export default ProjectCard
