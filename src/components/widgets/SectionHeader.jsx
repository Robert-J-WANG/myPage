import React from 'react'

export default function SectionHeader ({ title }) {
  return (
    <div className='flex flex-col items-center w-full h-full bg-yellow-300 justify-evenly'>
      <h1 className='text-xl font-black uppercase sm:text-2xl lg:text-3xl xl:text-4xl'>
        {' '}
        {title}{' '}
      </h1>
      <span className='inline-block w-32 h-1.5 bg-mainColor20 rounded relative overflow-hidden'>
        <span className='absolute top-0 left-0 inline-block w-2 h-full rounded-full bg-mainColor animate-leftToRight'></span>
      </span>
    </div>
  )
}
