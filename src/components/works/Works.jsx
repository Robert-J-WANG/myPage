import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import SectionHeader from '../widgets/SectionHeader'
import BasicWeb from './BasicWeb';

import SectionPagination from '../widgets/SectionPagination';
import WorksNavLink from './WorksNavLink';
import AdvancedWeb from './AdvancedWeb';

export default function Works() {
    const [count, setCount] = useState(0);  // pagination里页面的数量count
    const [page, setPage] = useState(1);  // 每次轮播是translate的页数

    // 代码运行是有个小问题，初次渲染的注册路由组件是basicWeb组件，当我点击basicWeb组件的pagination按钮到第4页，然后点击上方的worksNavLink切渲染出advancedWeb组件，再点击上方的worksNavLink渲染返回到basicWeb组件，此时basicWeb组件的页面依然是在第4页。如何修改上面的代码，让之后每次切换路由组件时，此路由组件的页面都回到最初的状态，而不是上次点击的状态？

    // 解决原理是，监听路由路径改变时，都让page设置为1，使用useEffect钩子，监听路径的改变
    // const location = useLocation();
    // useEffect(() => {
    //     if (location)
    //         setPage(1);
    // }, [location]);
    console.log(page)


    const handlePage = (event, value) => {
        setPage(value);
    }

    const handleDataLengthChange = (dataLength) => {
        setCount(dataLength);
    };

    return (
        <div id='works' className='about flex flex-col items-center justify-center gap-10'>
            <header>
                <SectionHeader title={'my works'} />
            </header>

            <main className='w-full h-3/5 flex flex-col items-center justify-center  overflow-hidden gap-5' >

                {/* navLink */}
                <div className=' w-full basis-1/6 flex items-center justify-center gap-5'>
                    {/* 连接路由 */}
                    <WorksNavLink to='/basicWeb' >html & css</WorksNavLink>
                    <WorksNavLink to='/advancedWeb'>react js</WorksNavLink>
                </div>

                {/* 使用css实现轮播效果 */}
                <div className=' w-full h-full  basis-5/6  transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${(page - 1) * 100 / 3}%)` }}>
                    {/* 传递一个回调函数handleDataLengthChange给子组件，用来接收子组件传递来的数据count */}
                    {/* 注册路由 */}
                    <Routes>
                        <Route path='/basicWeb' element={<BasicWeb onDataLengthChange={handleDataLengthChange} />} />

                        <Route path='/advancedWeb' element={<AdvancedWeb onDataLengthChange={handleDataLengthChange} />} />

                        <Route path='/' element={<Navigate to='/basicWeb' />} />
                    </Routes>
                </div>

            </main>

            <footer className='w-full h-10  flex items-center justify-center'>
                <SectionPagination count={count} handlePage={handlePage} />
            </footer>
        </div>
    )
}

