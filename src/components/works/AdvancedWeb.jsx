import React, { useState } from 'react'
import { advancedWebData } from '../../data'
import CardList from '../widgets/CardList'
import SectionPagination from '../widgets/SectionPagination'

export default function AdvancedWeb () {
  const [page, setPage] = useState(1)
  const handlePage = (event, value) => {
    setPage(value)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full '>
      <ul className='flex items-center justify-start w-full basis-31/40'>
        {advancedWebData.map(data => (
          <li
            key={data.id}
            className='flex items-center justify-center flex-shrink-0 h-full p-5 transition-transform duration-500 ease-in-out sm:px-1 lg:px-2 xl:px-5 basis-full sm:basis-1/2 lg:basis-1/3 group'
            style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
          >
            <CardList {...data} />
          </li>
        ))}
      </ul>
      <footer className='flex items-center justify-center w-full basis-9/40'>
        <SectionPagination
          count={advancedWebData.length}
          handlePage={handlePage}
        />
      </footer>
    </div>
  )
}
