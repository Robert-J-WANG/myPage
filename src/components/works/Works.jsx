import React, { useRef, useState } from 'react'
import SectionHeader from '../widgets/SectionHeader'
import { aboutMenuData, infoData } from '../../data'
import BasicWeb from './BasicWeb';

import SectionPagination from '../widgets/SectionPagination';
import WorksNav from './WorksNav';

function Works() {
    const [count, setCount] = useState(0);  // pagination里页面的数量count
    const [page, setPage] = useState(1);  // 每次轮播是translate的页数

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
                <div className=' w-full basis-1/6 flex items-center justify-center'>
                    <WorksNav />
                </div>

                {/* 使用css实现轮播效果 */}
                <div className=' w-full h-full  basis-5/6  transition-transform ease-in-out duration-1500' style={{ transform: `translateX(-${(page - 1) * 100 / 3}%)` }}>
                    {/* 传递一个回调函数handleDataLengthChange给子组件，用来接收子组件传递来的数据count */}
                    <BasicWeb onDataLengthChange={handleDataLengthChange} />
                </div>

            </main>

            <footer className='w-full h-10  flex items-center justify-center'>
                <SectionPagination count={count} handlePage={handlePage} />
            </footer>
        </div>
    )
}

export default Works


