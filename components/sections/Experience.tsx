import { experiences } from "@/data/experience"

const Experience = () => {
  return (
    <main className='mt-24 mb-12 py-12 border-y border-[#00000015]'>
        <h1 className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">Work Experience</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
            {experiences.map((exp, idx)=>(
                <div key={idx}>
                    <span className="text-sm md:text-[15px] text-gray-500 tracking-tighter">
                        <p>{exp.date}</p>
                    </span>
                    <span className="">
                        <h1 className="text-2xl font-semibold mt-1 tracking-tight">{exp.role}</h1>
                        <h3 className="text-[#4287F6] text-xl">{exp.company}</h3>
                    </span>
                    <span className="text-gray-500 mt-2 text-[16px]">
                        <p className="mt-3 md:mt-1 tracking-wide text-justify">{exp.desc}</p>
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