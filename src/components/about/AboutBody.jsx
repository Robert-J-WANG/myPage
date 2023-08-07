import React from 'react'
import { infoData } from '../../data'

export default function AboutBody () {
  return (
    <div className='grid w-full h-full gap-10 md:grid-cols-2'>
      {/* left part */}
      <div className='items-center justify-end hidden md:flex'>
        <div className='relative flex items-center justify-center w-4/5 overflow-hidden  h-4/5 rounded-xl'>
          <span className='absolute w-[800px] h-[800px] bg-gradient-to-br from-mainColor to-bgColor animate-spin-slow'></span>
          <div className="z-10 w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-lg bg-[url('./assets/about-image.jpg')] bg-cover"></div>
        </div>
      </div>

      {/* right part */}
      <div className='flex flex-col items-center justify-center gap-8  sm:items-start'>
        <div className='text-3xl'>
          <span className='inline-block '>Hi, I am&nbsp;</span>
          <span className='inline-block  text-mainColor'> Robert J Wang</span>
        </div>

        <ul className='flex flex-col w-4/5 gap-3 md:w-full '>
          {infoData.map(item => (
            <li
              key={item.id}
              className='flex items-center justify-start gap-2 text-base  lg:text-lg'
            >
              <span className='inline-block w-2 h-2 rounded-full bg-mainColor'></span>
              <span className=' inline-block min-w-[80px] font-medium text-subColor '>
                {item.title}
              </span>
              <span className='inline-block text-subColor'>{item.value}</span>
            </li>
          ))}
        </ul>
        <a
          href='/resume.pdf'
          target='_blank'
          className='flex items-center justify-center h-10 uppercase duration-500 border rounded w-44 text-gl text-mainColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor '
        >
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  )
}
