import React from 'react'
import TopBar from '../components/topBar/TopBar'
import Home from '../components/Home'
import About from '../components/about/About'
import Resume from '../components/resume/Resume'
import Works from '../components/works/Works'
import Blog from '../components/blog/Blog'
import Contact from '../components/Contact'

import './index.scss'

export default function Index () {
  return (
    <div className='h-screen index bg-bgColor '>
      <header className='h-16 border-b bg-bgColorHeader border-subBdColor'>
        <TopBar />
      </header>
      <section className='container mx-auto section'>
        <Home />
        <About />
        <Resume />
        <Works />
        {/* <Blog /> */}
        <Contact />
      </section>
    </div>
  )
}
