import React, { useEffect, useState } from 'react'
import { basicWebData } from '../../data'
import WorksList from './worksList';

export default function BasicWeb({ onDataLengthChange, }) {


    // 使用useState钩子，获取每次页面挂载后的数据（componentDidMount生命钩子）
    useEffect(() => {
        onDataLengthChange(basicWebData.length);
    }, []);


    return (
        <ul className='w-full h-full flex items-center justify-start '>
            {
                basicWebData.map(data => (
                    <li key={data.id} className=' h-full basis-1/3 px-5 flex justify-center items-center flex-shrink-0 group'>
                        <WorksList  {...data} />
                    </li>
                ))
            }
        </ul>
    )
}



