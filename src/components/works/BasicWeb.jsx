import React, { useState } from 'react'
import { basicWebData } from '../../data'
import CardList from '../widgets/CardList';
import SectionPagination from '../widgets/SectionPagination';


export default function BasicWeb() {
    const [page, setPage] = useState(1);
    const handlePage = (event, value) => {
        setPage(value);
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center ' >
            <ul className=' w-full basis-31/40 flex items-center justify-start transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${(page - 1) * 100 / 3}%)` }} >
                {
                    basicWebData.map(data => (
                        <li key={data.id} className=' h-full basis-1/3 px-5 flex justify-center items-center flex-shrink-0 group'>
                            <CardList  {...data} />
                        </li>
                    ))
                }
            </ul>
            <footer className=' w-full basis-9/40  flex items-center justify-center'>
                <SectionPagination count={basicWebData.length} handlePage={handlePage} />
            </footer>
        </div>
    )
}



