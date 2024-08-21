import React from 'react'

export default function CardList ({ id, img, title, description,url }) {
  return (
    <div className='flex flex-col items-start justify-center w-full h-full gap-3 p-5 duration-500 border rounded-xl bg-subBgColor border-subBdColor group group-hover:-translate-y-2'>
      <div className='relative w-full h-full overflow-hidden basis-5/6'>
        <img
          className='absolute top-0 left-0 w-full h-full duration-500 group-hover:blur group-hover:opacity-20'
          src={img}
          alt=''
        />

        <div className='absolute top-0 z-20 flex items-center justify-center w-full h-full duration-500 rounded -left-full bg-subBgColor group-hover:translate-x-full'>
          <a href={url} target='_blank'>
            <img
              className='w-8 h-8 rounded cursor-pointer bg-mainColor'
              src='../../../src/assets/worksLink.svg'
              alt=''
            />
          </a>
        </div>
      </div>

      <div className='flex flex-col items-start w-full h-full basis-1/6 justify-evenly'>
        <h2 className='text-2xl '>{title}</h2>
        <p className='text-xl text-subColor'>{description}</p>
      </div>
    </div>
  )
}
