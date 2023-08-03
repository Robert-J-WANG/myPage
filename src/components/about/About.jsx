import React, { useRef, useState } from 'react'
import SectionHeader from '../widgets/SectionHeader'
import { aboutMenuData, infoData } from '../../data'
import AboutBody from './AboutBody';
import MySkill from './MySkill';
import MyService from './MyService';
import SectionPagination from '../widgets/SectionPagination';

function About() {


    const [page, setPage] = useState(1)
    const handlePage = (event, value) => {
        setPage(value);

    }

    // // 使用JS渲染组件的方式
    // const renderSelectedPage = () => {
    //     switch (page) {
    //         case 1:
    //             return <AboutBody />;
    //         case 2:
    //             return <MySkill />;
    //         case 3:
    //             return <MyService />;
    //         default:
    //             return null;
    //     }
    // };

    return (
        <div id='about' className='about flex flex-col items-center justify-center gap-10'>
            <header>
                {
                    aboutMenuData.map(item => {
                        if (item.id === page) {
                            return <SectionHeader title={item.title} key={item.id} />;
                        }
                        return null;
                    })
                }
            </header>

            <main className='w-full h-3/5 overflow-hidden ' >
                {/* 使用JS渲染组件的方式 */}
                {/* {renderSelectedPage()} */}

                {/* 使用css实现轮播效果 */}
                <div className='w-full h-full flex  transition-transform ease-in-out duration-1500' style={{ transform: `translateX(-${(page - 1) * 100}%)` }}>

                    <div className=' w-full h-full flex-shrink-0'>
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

            <footer className='w-full h-10  flex items-center justify-center'>
                <SectionPagination count={3} handlePage={handlePage} />
            </footer>
        </div>
    )
}

export default About
