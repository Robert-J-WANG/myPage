import React, { useState, useContext } from 'react'
import { menuData } from '../../data'

// 引入createContext
import { PageContext } from '../../pages/Index'

function Menu () {
  const [clickedKey, setClickedKey] = useState('home')
  // 使用useContext钩子接收祖组件的参数
  const curPageKey = useContext(PageContext)

  const handleClick = key => {
    setClickedKey(key)
  }
  return (
    <ul className='flex items-center justify-between w-full h-full md:justify-evenly lg:justify-between lg:w-4/5 xl:w-3/5 '>
      {menuData.map(item => (
        <li
          key={item.id}
          className={` text-sm xs:text-base sm:text-lg md:text-xl font-RCD font-bold  ${
            (clickedKey && curPageKey) !== item.key ? ' ' : ' text-mainColor'
          } cursor-pointer`}
          onClick={() => {
            handleClick(item.key)
          }}
        >
          <a href={item.anchor}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
