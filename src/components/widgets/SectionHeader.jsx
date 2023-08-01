import React from 'react'

export default function SectionHeader() {
    return (
        <div className='flex flex-col items-center justify-center gap-5 py-20 '>
            <h1 className='text-4xl text-white font-black uppercase'> about me </h1>
            <span className='inline-block w-32 h-1.5 bg-gray-400 rounded relative overflow-hidden'>
                <span className='inline-block w-2 h-full rounded-full bg-mainColor absolute left-0 top-0 animate-leftToRight'></span>
            </span>
        </div>
    )
}
