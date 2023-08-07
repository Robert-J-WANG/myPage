import React from 'react'
import '../components.scss'
import { skillData, languageData } from '../../data'

export default function () {
  return (
    <div className='w-4/5 h-full mx-auto'>
      {/* top part */}
      <ul className='grid w-full grid-cols-4 gap-5 h-2/5'>
        {skillData.map(item => (
          <li key={item.id}>
            <div className='relative p-2 text-center border lg:p-4 xl:p-6 rounded-xl border-subBdColor bg-subBgColor'>
              <div className='relative inline-block lg:mb-2 text-mainColor'>
                <svg
                  className='circle'
                  width='120'
                  height='120'
                  viewBox='0 0 120 120'
                >
                  <circle
                    className='circlebg'
                    cx='60'
                    cy='60'
                    r='54'
                    pathLength='1'
                    strokeLinecap='round'
                    strokeWidth='12'
                  ></circle>
                  <circle
                    cx='60'
                    cy='60'
                    r='54'
                    strokeLinecap='round'
                    strokeWidth='12'
                    opacity='1'
                    pathLength='1'
                    strokeDashoffset='0px'
                    strokeDasharray={item.stroke}
                  ></circle>
                </svg>
                <span className='absolute text-xl text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 '>
                  {item.percent}
                </span>
              </div>
              <h5 className='text-sm xl:text-base'>{item.title}</h5>
            </div>
          </li>
        ))}
      </ul>

      {/* bottom part */}
      <ul className='grid w-full grid-cols-2 gap-2 bg-blue-400 lg:gap-5 h-3/5'>
        {languageData.map(item => (
          <li key={item.id} className='flex flex-col justify-center '>
            <h5 className='text-xl'>
              {item.title} -{' '}
              <span className='text-mainColor'>( {`${item.value} %`} )</span>
            </h5>
            <progress
              value={item.value}
              max='100'
              className='progress'
            ></progress>
          </li>
        ))}
      </ul>
    </div>
  )
}
