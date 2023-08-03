import React from 'react'
import '../components.scss'
import { skillData, languageData } from '../../data'

export default function
    () {
    return (
        <div className='w-4/5 h-full mx-auto'>
            {/* top part */}
            <ul className='w-full h-2/5 grid grid-cols-4 gap-5'>
                {
                    skillData.map(item => (
                        <li key={item.id}>
                            <div className="relative p-4 text-center md:p-6 rounded-xl border border-subBdColor bg-subBgColor">
                                <div className="relative mb-2 inline-block text-mainColor">
                                    <svg className="circle" width="120" height="120" viewBox="0 0 120 120">
                                        <circle className="circlebg" cx="60" cy="60" r="54" pathLength="1" strokeLinecap="round" strokeWidth="12"></circle>
                                        <circle cx="60" cy="60" r="54" strokeLinecap="round" strokeWidth="12" opacity="1" pathLength="1" strokeDashoffset="0px" strokeDasharray={item.stroke}></circle>
                                    </svg>
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl ">{item.percent}</span>
                                </div>
                                <h5 className=''>{item.title}</h5>
                            </div>
                        </li>
                    ))
                }

            </ul>

            {/* bottom part */}
            <ul className='w-full h-3/5  grid grid-cols-2  gap-5'>
                {
                    languageData.map(item => (
                        <li key={item.id} className=' flex flex-col justify-center' >
                            <h5 className='text-xl'>{item.title}t - <span className="text-mainColor">( {`${item.value} %`} )</span></h5>
                            <progress value={item.value} max="100" className='progress'></progress>
                        </li>
                    ))
                }


                {/* <li className='bg-green-300'>right</li>
                <li className='bg-green-300' >left</li>
                <li className='bg-green-300'>right</li>
                <li className='bg-green-300' >left</li>
                <li className='bg-green-300'>right</li>
                <li className='bg-green-300' >left</li>
                <li className='bg-green-300'>right</li> */}
            </ul>

        </div>
    )
}
