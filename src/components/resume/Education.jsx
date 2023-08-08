import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import { educationData } from '../../data'
;``

export default function Education () {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mx-auto xl:w-4/5'>
      {/* top part */}
      <p className='flex items-center justify-center w-full h-16 '>
        <span className='flex items-center justify-center w-8 h-8 mx-5 border rounded-full border-subBdColor text-mainColor bg-subBgColor'>
          <SchoolIcon />
        </span>
        <span className='test-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
          Educational Qualificationc
        </span>
      </p>

      {/* content part */}
      <ul className='flex flex-col items-end justify-center w-full  h-[calc(100%-4rem)]'>
        {educationData.map(data => (
          <li
            key={data.id}
            className='relative w-4/5 basis-1/3 border-mainColor '
          >
            {/* left */}
            <span className='absolute w-10 p-1 text-sm text-center rounded-xl h-15 top-2 -left-20 bg-subBgColor'>
              {data.year}
            </span>

            {/* right */}
            <div className='relative w-full h-full pl-12 border-l-4 border-subBdColor pt-7 '>
              {/* corss line */}
              <span className='absolute -left-0.5 top-0 mt-1 '>
                {/* big circle */}
                <span className='absolute z-10 inline-block w-6 h-6 border-4 rounded-full -left-3 top-6 border-mainColor '></span>
                {/* small circle */}
                <span className='absolute inline-block w-4 h-4 rounded-full -left-2 top-7 z-11 bg-bgColor '></span>
                {/* x-line */}
                <span className='absolute -left-10 top-6 -z-10 mt-2.5 h-1 w-20  rounded-full bg-subBdColor '></span>
              </span>

              {/* text */}
              <h5 className='w-full text-sm sm:text-base md:text-lg lg:text-xl h-2/12 text-mainColor'>
                {data.title}
              </h5>
              <p className='w-full text-xs sm:text-sm h-3/12 md:text-base text-heading text-subColor'>
                {data.school}
              </p>
              <p className='w-full overflow-hidden text-xs sm:text-sm h-7/17 2xl:w-4/5 lg:text-base'>
                {data.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
