import { blogs } from '@/data/blogs';
import { TfiWrite } from "react-icons/tfi";
import Image from 'next/image';
import React from 'react'
import { MdOutlineVolunteerActivism } from "react-icons/md";


const Blog = () => {
    return (
        <main className='my-12 pb-12 border-b border-[#00000015]'>
            <section className='flex items-start space-x-2'>
                <h2 className="text-[32px] tracking-[-.03em] md:text-3xl leading-[110%] font-semibold">
                    My Blogs
                </h2>
                <span>
                    <TfiWrite className='text-3xl rotate-12' aria-hidden="true" />
                </span>
            </section>

            <section className='pt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12'>
                {blogs.map((each, idx) => (
                    <div key={idx} className='border border-[#00000015] rounded-lg w-full flex flex-col hover:-translate-y-2 duration-300 transition-all hover:shadow-lg' data-aos="fade-left">
                        <Image width={1000} height={1000} src={each.image} alt={`${each.name} image`} className='w-full rounded-t-lg h-56' />
                        <div className='p-4 flex flex-col gap-3'>
                            <a href={each.link} target='_blank' aria-label={each.name} className='underline text-[#4287F6] text-xl tracking-tighter font-semibold'>{each.name}</a>
                            <span className=''>
                                <p className='text-sm text-gray-500'>{each.body} <a href={each.link} target='_blank' aria-label={each.name} className='underline text-sm text-[#4287F6] font-semibold cursor-pointer'>Read more...</a></p>

                            </span>
                            <ul className='flex gap-6 items-center text-gray-500 text-sm justify-end'>
                                <li className=''>{each.minsRead} read</li>
                                <li className='list-disc'>{each.datePosted}</li>
                            </ul>

                        </div>
                    </div>
                ))}

            </section>

        </main>
    )
}

export default Blog