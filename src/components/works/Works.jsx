import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import SectionHeader from '../widgets/SectionHeader'
import BasicWeb from './BasicWeb';

import MyNavLink from '../widgets/MyNavLink';
import AdvancedWeb from './AdvancedWeb';

export default function Works() {

    return (
        <div id='works' className='flex flex-col items-center justify-center'>
            <header className='basis-1/5 w-full '>
                <SectionHeader title={'my works'} />
            </header>

            <main className='  w-full basis-4/5 flex flex-col items-center justify-center  overflow-hidden' >
                {/* 连接路由 */}
                <div className=' w-full basis-1/6 flex items-center justify-center gap-5'>
                    <MyNavLink to='/works/basicWeb' >html & css</MyNavLink>
                    <MyNavLink to='/works/advancedWeb'>react js</MyNavLink>
                </div>

                {/* 注册路由 */}
                <div className='basis-5/6 w-full '>
                    <Routes>
                        <Route path='/works/basicWeb' element={<BasicWeb />} />
                        <Route path='/works/advancedWeb' element={<AdvancedWeb />} />
                        <Route path='/works/' element={<Navigate to='/works/basicWeb' />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}

