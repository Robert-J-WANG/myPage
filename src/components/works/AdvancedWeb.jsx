import React, { useState } from 'react'
import { advancedWebData } from '../../data'
import WorksList from './worksList';
import SectionPagination from '../widgets/SectionPagination';

export default function AdvancedWeb() {
    const [page, setPage] = useState(1);
    const handlePage = (event, value) => {
        setPage(value);
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center ' >
            <ul className=' w-full basis-31/40 flex items-center justify-start transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${(page - 1) * 100 / 3}%)` }} >
                {
                    advancedWebData.map(data => (
                        <li key={data.id} className=' h-full basis-1/3 px-5 flex justify-center items-center flex-shrink-0 group'>
                            <WorksList  {...data} />
                        </li>
                    ))
                }
            </ul>
            <footer className=' w-full basis-9/40  flex items-center justify-center'>
                <SectionPagination count={advancedWebData.length} handlePage={handlePage} />
            </footer>
        </div>
    )
}



