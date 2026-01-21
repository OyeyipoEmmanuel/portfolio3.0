import React from 'react'
import { PiGraduationCapFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { education } from '@/data/education';


const Education = () => {
    return (
        <main className='mt-24 mb-12 pt-12 border-t border-[#00000015]'>
            <section className='flex items-start space-x-1'>
                <h1 className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">
                    Education
                </h1>
                <span>
                    <PiGraduationCapFill className='text-[26px] rotate-45' />
                </span>
            </section>

            <section className='pt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12'>
                {education.map((each, idx) => (
                    <div key={idx} className='border border-[#00000015] rounded-lg w-full p-4 flex flex-row-reverse md:flex-row space-x-4 items-center justify-between hover:-translate-y-2 duration-300 transition-all hover:shadow-lg' data-aos="fade-left">
                        <div className='w-[5%]'>
                            <FaGraduationCap className='text-2xl' />
                        </div>
                        <div className='flex flex-col space-y-4 w-[90%] md:w-[60%]'>
                            <span className='flex flex-col space-y-1'>
                                <h1 className='text-xl tracking-tighter font-semibold'>{each.degree}</h1>
                                <h3 className='text-[#4287F6] font-light text-lg'>{each.school}</h3>
                            </span>

                            <p className='text-gray-500 md:hidden'>{each.date}</p>
                        </div>
                        <div className='w-[35%] hidden md:block'>
                            <p className=' text-gray-500'>{each.date}</p>
                        </div>
                    </div>
                ))}

            </section>

        </main>
    )
}

export default Education