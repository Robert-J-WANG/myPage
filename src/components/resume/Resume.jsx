import React, { useState } from 'react'
import SectionHeader from '../widgets/SectionHeader'
import SectionPagination from '../widgets/SectionPagination'
import Education from './Education'
import Experience from './Experience'

export default function Resume () {
  const [page, setPage] = useState(1)
  const handlePage = (event, value) => {
    setPage(value)
  }

  return (
    <div id='resume' className='flex flex-col items-center justify-center '>
      <header className='w-full basis-1/12 sm:basis-0.2  items-center justify-center'>
        <SectionHeader title={'my resume'} />
      </header>

      <main className=' w-full basis-3/4 sm:basis-0.65 overflow-hidden '>
        <div
          className='flex w-full h-full transition-transform ease-in-out duration-1500'
          style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
        >
          <div className='flex-shrink-0 w-full h-full '>
            <Education />
          </div>

          <div className='flex-shrink-0 w-full h-full '>
            <Experience />
          </div>
        </div>
      </main>

      <footer className=' w-full basis:1/12 sm:basis-0.15  flex items-center justify-center'>
        <SectionPagination count={2} handlePage={handlePage} />
      </footer>
    </div>
  )
}
