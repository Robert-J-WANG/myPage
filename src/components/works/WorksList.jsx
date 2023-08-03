import React from 'react'

export default function WorksList({ id, img, title, description }) {
    return (
        <li className=' h-full basis-1/3 p-5 flex flex-col items-start justify-center gap-3 bg-subBgColor rounded border border-subBdColor flex-shrink-0 '>

            <img className=' w-full h-full basis-5/6' src="" alt="" />
            <div className=' w-full h-full basis-1/6 flex flex-col items-start justify-evenly'>
                <h2 className='text-2xl '>{title}</h2>
                <p className='text-xl text-subColor'>{description}</p>
            </div>
        </li>
    )
}
