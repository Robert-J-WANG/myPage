import React, { useState } from 'react'
import SectionHeader from '../widgets/SectionHeader'
import SectionPagination from '../widgets/SectionPagination'
import Education from './Education'
import Experience from './Experience'

function Resume() {

    const [page, setPage] = useState(1)
    const handlePage = (event, value) => {
        setPage(value);
    }

    const renderSelectedPage = () => {
        switch (page) {
            case 1:
                return <Education />;
            case 2:
                return <Experience />;
            default:
                return null;
        }
    };

    return (
        <div id='resume' className='about flex flex-col items-center justify-center gap-10'>
            <header>
                <SectionHeader title={'my resume'} />
            </header>

            <main className='bg-red-500 w-full h-3/5 overflow-hidden ' >

                <div className='bg-yellow-300 w-full h-full flex  transition-transform ease-in-out duration-1500' style={{ transform: `translateX(-${(page - 1) * 100}%)` }}>
                    <div className='bg-pink-400 w-full h-full flex-shrink-0'>
                        <Education />
                    </div>
                    <div className='bg-pink-400 w-full h-full flex-shrink-0'>
                        <Experience />
                    </div>
                </div>

            </main>

            <footer className='w-full h-10  flex items-center justify-center'>
                <SectionPagination count={2} handlePage={handlePage} />
            </footer>
        </div>
    )
}

export default Resume




