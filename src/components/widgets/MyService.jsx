import React from 'react'
import { serviceData } from '../../data'

export default function MyService() {
    return (
        <div className='w-5/6 h-2/3 '>
            <ul className='w-full h-full grid grid-cols-3 gap-5'>
                {
                    serviceData.map(item => (
                        <li key={item.id} className=' border border-subBdColor bg-subBgColor rounded-xl p-5 group'>
                            <div className='flex justify-between'>
                                <span className='w-20 h-20 text-mainColor  rounded-full  bg-subBgColor overflow-hidden flex items-center justify-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60%" height="60%" className="injected-svg group-hover:animate-iconScale" data-src={item.link} xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d={item.path}></path>
                                    </svg>
                                </span>

                                <span className='felx w-20 h-20 text-6xl font-black italic text-subBgColor rounded-full flex items-center justify-center'>
                                    {item.id}
                                </span>
                            </div>
                            <h5 className='mt-10 mb-4 text-xl font-bold ' >
                                {item.title}
                            </h5>
                            <p className=' text-lg text-subColor'>
                                {item.content}
                            </p>
                        </li>
                    ))
                }


                {/* <li className='bg-pink-500'>1</li>
                <li className='bg-pink-500'>1</li> */}
            </ul>
        </div>
    )
}
