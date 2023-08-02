import React, { useRef, useState } from 'react'
import SectionHeader from './widgets/SectionHeader'
import { aboutMenuData, infoData } from '../data'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AboutBody from './widgets/AboutBody';
import MySkill from './widgets/MySkill';
import MyService from './MyService';

function About() {


    const [page, setPage] = useState(1)
    const handlePage = (event, value) => {
        setPage(value);

    }

    const renderSelectedPage = () => {
        switch (page) {
            case 1:
                return <AboutBody />;
            case 2:
                return <MySkill />;
            case 3:
                return <MyService />;
            default:
                return null;
        }
    };

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

            <main className='w-full h-3/5 flex items-center justify-center overflow-hidden ' >
                {renderSelectedPage()}
            </main>

            <footer className='w-full h-10  flex items-center justify-center'>
                <Stack spacing={2}>
                    <Pagination count={3} variant="outlined" color="primary" size="large" onChange={handlePage} />
                </Stack>
            </footer>
        </div>
    )
}

export default About
