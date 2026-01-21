import { volunteering } from '@/data/volunteering'
import Image from 'next/image';
import React from 'react'
import { MdOutlineVolunteerActivism } from "react-icons/md";


const Volunteering = () => {
    return (
        <main className='my-12 pb-12 border-b border-[#00000015]'>
            <section className='flex items-start space-x-2'>
                <h1 className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">
                    Volunteering
                </h1>
                <span>
                    <MdOutlineVolunteerActivism className='text-3xl rotate-12' />
                </span>
            </section>

            <section className='pt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12'>
                {volunteering.map((each, idx) => (
                    <div key={idx} className='border border-[#00000015] rounded-lg w-full p-4 flex flex-row-reverse md:flex-row space-x-4 items-center justify-between hover:-translate-y-2 duration-300 transition-all hover:shadow-lg' data-aos="fade-left">
                        <div className='w-[10%]'>
                            <Image src={each.logo} width={50} height={30} alt={each.company} />
                        </div>
                        <div className='flex flex-col space-y-4 w-[90%] md:w-[60%]'>
                            <span className='flex flex-col space-y-1'>
                                <h1 className='text-xl tracking-tighter font-semibold'>{each.role}</h1>
                                <h3 className='text-[#4287F6] font-light text-lg'>{each.company}</h3>
                            </span>

                            <p className='text-gray-500 md:hidden'>{each.date}</p>
                        </div>
                        <div className='w-[30%] hidden md:block'>
                            <p className=' text-gray-500'>{each.date}</p>
                        </div>
                    </div>
                ))}

            </section>

        </main>
    )
}

export default Volunteering