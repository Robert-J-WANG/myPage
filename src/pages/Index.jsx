import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  createContext
} from 'react'
import TopBar from '../components/topBar/TopBar'
import Home from '../components/Home'
import About from '../components/about/About'
import Resume from '../components/resume/Resume'
import Works from '../components/works/Works'
import Blog from '../components/blog/Blog'
import Contact from '../components/Contact'
import { menuData } from '../data'

import './index.scss'

// 使用 useContext, createContext钩子将参数从祖组件传递给孙组件
export const PageContext = createContext()
export default function Index () {
  // 存储所有子容器的滚动信息（id,初始时距离顶部的距离offsetTop)
  const [scrollList, setScrollList] = useState([])
  const [curPageKey, setCurPageKey] = useState('home') //存储当前页面key,用于将key传递给子组件来设置a链接的样式

  // 获取页面初次加载后所有子容器的滚动信息
  useEffect(() => {
    const newScrollList = []
    menuData.forEach(item => {
      const curDom = document.getElementById(item.key)
      if (curDom) {
        newScrollList.push({
          key: item.key,
          offsetTop: curDom.getBoundingClientRect().top
        })
      }
    })
    setScrollList(newScrollList)
  }, [])

  const ref = useRef(null) // 创建一个引用，用于获取滚动容器的DOM节点

  // 滚动页面后，检查页面滚动的状态
  useEffect(() => {
    // 处理滚动事件的回调
    const onScrollEvent = () => {
      // 判断实际滚动距离，挑选出处于当前的视口的子组件
      if (scrollList && ref.current) {
        for (let i = scrollList.length - 1; i >= 0; i--) {
          const { key, offsetTop } = scrollList[i] //获取每个页面的数据
          if (ref.current.scrollTop >= offsetTop - 100) {
            setCurPageKey(key)
            break // 倒序遍历，一旦满足条件就退出遍历
          }
        }
      }
    }
    // 给容器添加监听事件
    ref.current.addEventListener('scroll', onScrollEvent)

    return () => {
      // 更新完成后移出监听事件
      ref.current.removeEventListener('scroll', onScrollEvent)
    }
  }, [scrollList]) // Add scrollList as a dependency

  return (
    // 将curPageKey传递个所以后代组件
    <PageContext.Provider value={curPageKey}>
      <div className='h-screen index bg-bgColor '>
        <header className='h-16 border-b bg-bgColorHeader border-subBdColor'>
          <TopBar curPageKey={curPageKey} />
        </header>
        <section
          className='container mx-auto section'
          // onScrollCapture={onScrollEvent} // 监听滚动事件并执行onScrollEvent函数
          ref={ref} // 将引用绑定到滚动容器的DOM节点
        >
          <Home />
          <About />
          <Resume />
          <Works />
          {/* <Blog /> */}
          <Contact />
        </section>
      </div>
    </PageContext.Provider>
  )
}
