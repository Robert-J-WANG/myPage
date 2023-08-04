import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import SectionHeader from '../widgets/SectionHeader'
import MyNavLink from '../widgets/MyNavLink';
import Programming from './Programming';
import ChatGPT from './ChatGPT';
import MechineLearning from './MechineLearning';



export default function Blog() {

    return (
        <div id='blog' className='flex flex-col items-center justify-center'>
            <header className='basis-1/5 w-full '>
                <SectionHeader title={'latest blogs'} />
            </header>

            <main className='  w-full basis-4/5 flex flex-col items-center justify-center  overflow-hidden' >
                {/* 连接路由 */}
                <div className=' w-full basis-1/6 flex items-center justify-center gap-5'>
                    <MyNavLink to='/blog/programming' >programming</MyNavLink>
                    <MyNavLink to='/blog/chatGPT'>chatGPT</MyNavLink>
                    <MyNavLink to='/blog/mechineLearning'>mechine learning</MyNavLink>
                </div>

                {/* 注册路由 */}
                <div className='basis-5/6 w-full '>
                    <Routes>
                        <Route path='/blog/programming' element={<Programming />} />
                        <Route path='/blog/chatGPT' element={<ChatGPT />} />
                        <Route path='/blog/mechineLearning' element={<MechineLearning />} />
                        <Route path='/blog/' element={<Navigate to='/blog/chatGPT' />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}

