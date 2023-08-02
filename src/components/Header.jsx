import React, { useState } from 'react'
import Menu from './Menu'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='container mx-auto h-full md:px-5 flex items-center justify-between xs:justify-around'>
            {/*left logo */}
            <div className='hidden sm:block'>
                <a href="#home" className='text-[2.25rem] font-[900] italic text-mainColor'>Robert .</a>
            </div>

            {/* center menu */}
            <div className={`transition-all duration-500 ${menuOpen ? '-translate-y-12' : 'translate-y-0'}`} >
                <Menu />
            </div>


            {/*right hamburger */}
            <div className='w-6 h-5 sm:w-10  sm:h-8 flex flex-col justify-between cursor-pointer ' onClick={() => { setMenuOpen(!menuOpen) }}>
                <span className={`w-full h-1 bg-textColor transition-all duration-500 origin-left ${menuOpen ? 'rotate-0' : 'rotate-45'}`}></span>
                <span className={`w-full h-1 transition-all duration-500 ${menuOpen ? ' bg-textColor' : 'bg-bgColorHeader'}`}></span>
                <span className={`w-full h-1 bg-textColor origin-left transition-all duration-500 ${menuOpen ? 'rotate-0' : '-rotate-45'}`}></span>
            </div>

        </div>
    )
}

export default Header