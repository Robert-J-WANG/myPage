import React, { useEffect } from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import SectionHeader from '../widgets/SectionHeader'
import MyNavLink from '../widgets/MyNavLink'
import Programming from './Programming'
import ChatGPT from './ChatGPT'
import MechineLearning from './MechineLearning'

export default function Blog () {
  const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('/chatGPT')
  // }, [])

  return (
    <div id='blog' className='flex flex-col items-center justify-center'>
      <header className='w-full basis-1/5 '>
        <SectionHeader title={'latest blogs'} />
      </header>

      <main className='flex flex-col items-center justify-center w-full overflow-hidden basis-4/5'>
        {/* 连接路由 */}
        <div className='flex items-center justify-center w-full gap-5 basis-1/6'>
          <MyNavLink to='/programming'>programming</MyNavLink>
          <MyNavLink to='/chatGPT'>chatGPT</MyNavLink>
          <MyNavLink to='/mechineLearning'>mechine learning</MyNavLink>
        </div>

        {/* 注册路由 */}
        <div className='w-full basis-5/6 '>
          <Routes>
            <Route path='/programming' element={<Programming />} />
            <Route path='/chatGPT' element={<ChatGPT />} />
            <Route path='/mechineLearning' element={<MechineLearning />} />
            <Route path='/' element={<Navigate to='/chatGPT' replace />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
