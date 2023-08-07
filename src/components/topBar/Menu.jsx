import React, { useState } from 'react'
import { menuData } from '../../data'

function Menu () {
  const [clickedId, setClickedId] = useState(1)

  const handleClick = id => {
    setClickedId(id)
  }
  return (
    <ul className='flex items-center justify-between w-full h-full md:justify-evenly lg:justify-between lg:w-4/5 xl:w-3/5 '>
      {menuData.map(item => (
        <li
          key={item.id}
          className={` text-sm xs:text-base sm:text-lg md:text-xl font-RCD font-bold  ${
            clickedId === item.id ? ' text-mainColor' : ' '
          } cursor-pointer`}
          onClick={() => {
            handleClick(item.id)
          }}
        >
          <a href={item.anchor}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
