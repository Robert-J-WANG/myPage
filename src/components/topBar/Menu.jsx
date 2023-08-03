import React, { useState } from 'react'
import { menuData } from '../../data'

function Menu() {
    const [clickedId, setClickedId] = useState(1);

    const handleClick = (id) => {
        setClickedId(id);
    }
    return (
        <ul className='flex items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16'>
            {menuData.map(item => (
                <li
                    key={item.id}
                    className={`text-[8px] xs:text-sm sm:text-base md:text-lg lg:text-xl font-RCD font-bold  ${clickedId === item.id ? ' text-mainColor' : ' '} cursor-pointer`}
                    onClick={() => { handleClick(item.id) }}
                >
                    <a href={item.anchor}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Menu