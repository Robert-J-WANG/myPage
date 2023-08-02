import React from 'react'

export default function SectionHeader({ title }) {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-4xl  font-black uppercase'> {title} </h1>
            <span className='inline-block w-32 h-1.5 bg-subColor rounded relative overflow-hidden'>
                <span className='inline-block w-2 h-full rounded-full bg-mainColor absolute left-0 top-0 animate-leftToRight'></span>
            </span>
        </div>
    )
}
