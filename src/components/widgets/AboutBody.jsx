import React from 'react'
import { infoData } from '../../data'


export default function AboutBody() {
    return (
        <div className=' w-full h-full grid  md:grid-cols-2 gap-10'>
            {/* left part */}
            <div className='hidden md:flex items-center justify-end'>
                <div className=" flex items-center justify-center h-4/5  w-4/5 rounded-xl overflow-hidden relative">
                    <span className='absolute w-[800px] h-[800px] bg-gradient-to-br from-mainColor to-bgColor animate-spin-slow'></span>
                    <div className="z-10 w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-lg bg-[url('./assets/about-image.jpg')] bg-cover"></div>
                </div>
            </div>

            {/* right part */}
            <div className=' flex flex-col items-center sm:items-start justify-center gap-8' >
                <div className='text-3xl'>
                    <span className='inline-block '>Hi, I am&nbsp;</span>
                    <span className=" inline-block text-mainColor "> Robert J Wang</span>
                </div>

                <ul className='w-4/5 md:w-full flex flex-col gap-3  '>
                    {infoData.map(item => (
                        <li key={item.id} className="  text-base lg:text-lg flex items-center justify-start gap-2 ">
                            <span className='inline-block w-2 h-2 rounded-full bg-mainColor'></span>
                            <span className=" inline-block min-w-[80px] font-medium text-subColor ">
                                {item.title}
                            </span>
                            <span className='inline-block text-subColor'>{item.value}</span>
                        </li>
                    ))}
                </ul>
                <a href="/resume.pdf" className="w-44 h-10 rounded text-gl text-mainColor bg-mainColor20 border border-mainColor uppercase flex items-center justify-center hover:bg-mainColor hover:text-bgColor  duration-200 "><span >Download Resume</span>
                </a>
            </div>

        </div>
    )
}
