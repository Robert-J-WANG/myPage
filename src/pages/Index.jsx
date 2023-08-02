import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../components/Home'
import About from '../components/About'
import Resume from '../components/Resume'
import Works from '../components/Works'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import './index.scss'

function Index() {
    return (
        <div className='index h-screen bg-bgColor '>
            <header className='h-16 bg-bgColorHeader border-b border-subColor'>
                <Header />
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