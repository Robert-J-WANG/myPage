import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { educationData } from '../../data';

export default function Education() {
    return (
        <div className='w-4/5 mx-auto h-full  flex flex-col items-center justify-center'>
            {/* top part */}
            <p className='p-5 basis-1/6 flex items-center justify-center'>
                <span className=' w-8 h-8  border border-subBdColor rounded-full mx-5 flex items-center justify-center text-mainColor bg-subBgColor   '>
                    <SchoolIcon />
                </span>
                <span className='text-2xl'>Educational Qualificationc</span>
            </p>

            {/* content part */}
            <ul className=' w-full basis-5/6 flex flex-col items-end justify-center '>
                {
                    educationData.map(data => (
                        <li key={data.id} className='relative w-4/5 basis-1/3 border-mainColor '>
                            {/* left */}
                            <span className=" absolute top-0 -left-40 mt-7 mr-12 min-w-[115px] rounded-full bg-subBgColor p-1 text-center text-sm ">{data.year}</span>

                            {/* right */}
                            <div className="w-full h-full  relative border-l-4 border-subBdColor pt-7 pl-12 ">
                                {/* corss line */}
                                <span className="absolute -left-0.5 top-0 mt-1 ">

                                    {/* big circle */}
                                    <span className="absolute -left-3 top-6 z-10 inline-block h-6 w-6 rounded-full border-4 border-mainColor "></span>
                                    {/* small circle */}
                                    <span className="absolute -left-2 top-7 z-11 inline-block h-4 w-4 rounded-full bg-bgColor "></span>
                                    {/* x-line */}
                                    <span className="absolute -left-10 top-6 -z-10 mt-2.5 h-1 w-20  rounded-full bg-subBdColor "></span>
                                </span>

                                {/* text */}
                                <h5 className=" text-mainColor text-lg">{data.title}</h5>
                                <p className="mb-2 text-heading text-subColor">{data.school}</p>
                                <p className='w-4/5 '>{data.content}</p>
                            </div>
                        </li>
                    ))
                }



            </ul>

        </div>
    )
}


