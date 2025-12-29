'use client'
import { projects } from '@/data/projects'
import ProjectCard from '../ui/ProjectsCard'
import { useState } from 'react'


const Projects = () => {
  const [showMoreProj, setShowMoreProj] = useState<number>(4)
  return (
    <main className="" id='projects'>
      <h1 className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">Projects</h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full mt-8'>
        {projects.slice(0, showMoreProj).map((project, idx) => (

          <ProjectCard key={idx} project={project} />
        ))}

      </section>

      <section className='w-full py-6'>
        <button className="mx-auto px-4 text-black group relative overflow-hidden py-2 border-2 h-fit border-black text-sm font-bold uppercase hover:text-white tracking-wide before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-500 cursor-pointer flex" onClick={()=> showMoreProj !== projects.length ? setShowMoreProj(projects.length) : setShowMoreProj(4)}>
          <p className="relative group-hover:text-white z-10">{showMoreProj === projects.length ? "Show Less" : "Show More"}</p>
        </button>
      </section>


    </main>
  )
}

export default Projects