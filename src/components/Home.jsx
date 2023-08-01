import React from 'react'
import Typewriter from 'typewriter-effect'
import { introIconData } from '../data'

function Home() {
    return (
        <div id='home' className='flex flex-col items-center justify-center gap-8'>

            {/* top avatar */}
            <div className="flex items-center justify-center w-40 h-40 rounded-full overflow-hidden relative">
                <span className='absolute w-44 h-44 bg-gradient-to-br from-mainColor to-gray-700 animate-spin-slow'></span>
                <div className="z-10 w-36 h-36 rounded-full bg-gray-400 bg-[url('./assets/myAvatar.png')] bg-center bg-95%"></div>
            </div>


            {/* center type animation */}
            <div className=" flex flex-col items-center justify-center gap-5">
                <div className='flex items-center justify-center gap-3 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold' >
                    <span className='text-white'>Hi, I am</span>
                    <span className='text-mainColor ' >
                        <Typewriter
                            options={{
                                strings: ["Robert J WANG", "a Web Designer", "a Front-end Developer"],
                                autoStart: true,
                                delay: 150,
                                loop: true
                            }}
                        />
                    </span>
                </div>
                <p className='text-xs xs:text-sm sm:text-base md:text-xl text-gray-400 text-center'>
                    I am a frontend web developer. <br />
                    I can provide clean code and pixel perfect design. <br />
                    I also make website more & more interactive with web animations.
                </p>
            </div>

            {/* bottom links */}
            <ul className='flex items-center justify-center gap-10'>
                {
                    introIconData.map(item => (
                        <li key={item.id} className=''>

                            <a href={item.anchor} className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-50 text-center align-middle text-lg leading-none text-body rounded">

                                <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-bgColor transition-all duration-500 group-hover:-translate-y-full">
                                    <img src={item.icon1} alt="" className='w-10' />
                                </span>

                                <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-mainColor text-grey transition-all duration-500 group-hover:translate-y-0">
                                    <img src={item.icon2} alt="" className='w-10' />

                                </span>

                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Home