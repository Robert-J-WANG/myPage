import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import SectionHeader from '../widgets/SectionHeader'
import BasicWeb from './BasicWeb';

import WorksNavLink from './WorksNavLink';
import AdvancedWeb from './AdvancedWeb';

export default function Works() {

    return (
        <div id='works' className='about flex flex-col items-center justify-center'>
            <header className='basis-1/5 w-full '>
                <SectionHeader title={'my works'} />
            </header>

            <main className='  w-full basis-4/5 flex flex-col items-center justify-center  overflow-hidden' >
                {/* 连接路由 */}
                <div className=' w-full basis-1/6 flex items-center justify-center gap-5'>
                    <WorksNavLink to='/basicWeb' >html & css</WorksNavLink>
                    <WorksNavLink to='/advancedWeb'>react js</WorksNavLink>
                </div>

                {/* 注册路由 */}
                <div className='basis-5/6 w-full '>
                    <Routes>
                        <Route path='/basicWeb' element={<BasicWeb />} />
                        <Route path='/advancedWeb' element={<AdvancedWeb />} />
                        <Route path='/' element={<Navigate to='/basicWeb' />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}

