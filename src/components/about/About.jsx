import React, { useRef, useState } from 'react'
import SectionHeader from '../widgets/SectionHeader'
import { aboutMenuData, infoData } from '../../data'
import AboutBody from './AboutBody';
import MySkill from './MySkill';
import MyService from './MyService';
import SectionPagination from '../widgets/SectionPagination';

export default function About() {
    const [page, setPage] = useState(1)
    const handlePage = (event, value) => {
        setPage(value);
    }
    return (
        <div id='about' className=' about flex flex-col items-center justify-center'>
            <header className=' w-full basis-0.2 items-center justify-center'>
                {
                    aboutMenuData.map(item => {
                        if (item.id === page) {
                            return <SectionHeader title={item.title} key={item.id} />;
                        }
                        return null;
                    })
                }
            </header>

            <main className=' w-full basis-0.65 flex items-center justify-center overflow-hidden ' >
                {/* 使用JS渲染组件的方式 */}
                {/* {renderSelectedPage()} */}

                {/* 使用css实现轮播效果 */}
                <div className='  w-full h-full flex  transition-transform items-center ease-in-out duration-1500' style={{ transform: `translateX(-${(page - 1) * 100}%)` }}>

                    <div className='w-full h-5/6 flex-shrink-0'>
                        <AboutBody />
                    </div>
                    <div className=' w-full h-full  flex-shrink-0'>
                        <MySkill />
                    </div>
                    <div className=' w-full h-full flex-shrink-0'>
                        <MyService />
                    </div>

                </div>

            </main>

            <footer className=' w-full basis-0.15  flex items-center justify-center'>
                <SectionPagination count={3} handlePage={handlePage} />
            </footer>
        </div>
    )
}


