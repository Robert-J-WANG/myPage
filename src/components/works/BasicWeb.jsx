import React, { useEffect, useState } from 'react'
import { basicWebData } from '../../data'
import WorksList from './worksList';

export default function BasicWeb({ onDataLengthChange }) {

    // 使用useState钩子，获取每次页面挂载后的数据（componentDidMount生命钩子）
    useEffect(() => {
        onDataLengthChange(basicWebData.length);
    }, []);

    return (
        <ul className='w-full h-full flex items-center justify-start '>
            {
                basicWebData.map(data => (
                    <WorksList key={data.id} {...data} />
                ))
            }
        </ul>
    )
}

