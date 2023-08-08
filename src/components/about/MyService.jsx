import React from 'react'
import { serviceData } from '../../data'

export default function MyService () {
  return (
    <div className='flex items-center justify-center w-full h-full '>
      <ul className='flex flex-col items-center justify-center w-4/5 h-full gap-3 xl:gap-5 sm:w-full sm:flex-row 2xl:w-5/6 sm:h-2/3'>
        {serviceData.map(item => (
          <li
            key={item.id}
            className='flex flex-col items-start w-full h-full p-2 border justify-evenly xl:p-5 border-subBdColor bg-subBgColor rounded-xl group'
          >
            <div className='flex justify-between w-full'>
              <span className='flex items-center justify-center w-12 h-12 overflow-hidden rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 3xl:w-28 3xl:h-28 text-mainColor bg-subBgColor '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='60%'
                  height='60%'
                  className='injected-svg group-hover:animate-iconScale'
                  data-src={item.link}
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  fill='currentColor'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d={item.path}></path>
                </svg>
              </span>

              <span className='flex items-center justify-center w-12 h-12 text-5xl italic font-black rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 3xl:w-28 3xl:h-28 xl:text-6xl felx text-subBgColor'>
                {item.id}
              </span>
            </div>
            <h5 className='text-base font-bold lg:text-xl 3xl:text-3xl '>
              {item.title}
            </h5>
            <p className='text-sm lg:text-lg 3xl:text-2xl text-subColor'>
              {item.content}
            </p>
          </li>
        ))}

        {/* <li className='bg-pink-500'>1</li>
                <li className='bg-pink-500'>1</li> */}
      </ul>
    </div>
  )
}
