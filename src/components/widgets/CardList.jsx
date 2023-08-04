import React from 'react'

export default function CardList({ id, img, title, description }) {
    return (
        <div className='w-full h-full p-5 flex flex-col items-start justify-center gap-3  bg-subBgColor rounded border border-subBdColor group group-hover:-translate-y-2 duration-500'>
            <div className='basis-5/6 w-full h-full relative overflow-hidden'>
                <img className='absolute top-0 left-0 w-full h-full group-hover:blur group-hover:opacity-20  duration-500' src={img} alt="" />

                <div className='absolute top-0 -left-full w-full h-full bg-subBgColor rounded group-hover:translate-x-full duration-500  z-20 flex items-center justify-center'>
                    <a href="#">
                        <img className='bg-mainColor w-8 h-8 rounded cursor-pointer' src="../../../src/assets/worksLink.svg" alt="" />
                    </a>
                </div>
            </div>

            <div className=' w-full h-full basis-1/6 flex flex-col items-start justify-evenly'>
                <h2 className='text-2xl '>{title}</h2>
                <p className='text-xl text-subColor'>{description}</p>
            </div>
        </div>
    )
}
