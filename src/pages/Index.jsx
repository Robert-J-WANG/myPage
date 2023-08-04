import React from 'react'
import TopBar from '../components/topBar/TopBar'
import Home from '../components/Home'
import About from '../components/about/About'
import Resume from '../components/resume/Resume'
import Works from '../components/works/Works'
import Blog from '../components/blog/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import './index.scss'

function Index() {
    return (
        <div className='index h-screen bg-bgColor '>
            <header className='h-16 bg-bgColorHeader border-b border-subBdColor'>
                <TopBar />
                {/* <Menu /> */}
            </header>
            <section className='section container mx-auto'>
                <Home />
                <About />
                <Resume />
                <Works />
                <Blog />
                <Contact />
            </section>
        </div>
    )
}

export default Index