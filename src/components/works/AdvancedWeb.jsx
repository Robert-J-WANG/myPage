import React, { useEffect, useState } from 'react'
import { advancedWebData } from '../../data'
import WorksList from './worksList';

export default function AdvancedWeb({ onDataLengthChange }) {

    // 使用useState钩子，获取每次页面挂载后的数据（componentDidMount生命钩子）
    useEffect(() => {
        onDataLengthChange(advancedWebData.length);
    }, []);

    return (
        <ul className='w-full h-full flex items-center justify-start '>
            {
                advancedWebData.map(data => (
                    <li key={data.id} className=' h-full basis-1/3 px-5 flex justify-center items-center flex-shrink-0 group'>
                        <WorksList  {...data} />
                    </li>
                ))
            }
        </ul>
    )
}