import React from 'react'
import SectionHeader from './widgets/SectionHeader'
import { contactData, contactInputData } from '../data'
import SocialLinks from './widgets/SocialLinks'

function Contact () {
  return (
    <div id='contact' className='flex flex-col items-center justify-center '>
      <header className='w-full basis-0.2  items-center justify-center'>
        <SectionHeader title={'contact me'} />
      </header>

      <main className=' w-5/6  basis-0.65 flex  items-center justify-center gap-5 '>
        {/* left part */}
        <div className='flex flex-col h-full p-5 basis-5/12'>
          <h3 className='flex items-center text-2xl font-bold basis-1/6'>
            Contact Information
          </h3>
          <ul className='flex flex-col items-center justify-center w-full gap-5 basis-5/6'>
            {contactData.map(data => (
              <li
                key={data.id}
                className='flex items-center justify-start w-full gap-5 p-5 border rounded cursor-pointer basis-1/3 border-subBdColor bg-subBgColor group hover:animate-contactListScale'
              >
                {/* icon part */}
                <span className='flex items-center justify-center w-10 h-10 rounded-full bg-mainColor20'>
                  <img className='w-3/5 h-3/5 ' src={data.img} alt='' />
                </span>

                {/* text part */}
                <div>
                  <h3 className='mb-2 text-xl font-bold '>{data.title}</h3>
                  <p className=' text-subColor group-hover:text-mainColor'>
                    {data.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* right part */}
        <div className='flex items-center justify-center h-full pt-12 pb-5 basis-7/12'>
          <form
            className='flex flex-col items-center justify-center w-full h-full gap-2 p-5 border rounded-lg border-subBdColor bg-subBgColor'
            action='#'
          >
            {/* top list */}
            <ul className='flex flex-col w-full gap-2 basis-7/12'>
              {contactInputData.map(data => (
                <li
                  key={data.id}
                  className='flex flex-col justify-around w-full basis-1/3'
                >
                  <h2 className='text-lg'>{data.title}</h2>
                  <input
                    className='w-full p-2 bg-transparent border rounded outline-none text-subColor border-subBdColor focus:bg-transparent'
                    type='text'
                    placeholder={data.placeHolder}
                  />
                </li>
              ))}
            </ul>
            {/* bottom list */}
            <ul className='flex flex-col items-start justify-between w-full basis-5/12'>
              <li className='w-full basis-4/5'>
                <h2 className='text-lg'>Message</h2>
                <textarea
                  className='w-full p-2 bg-transparent border rounded outline-none h-3/4 border-subBdColor focus:bg-transparent'
                  placeholder='Enter your message'
                ></textarea>
              </li>
              <li className='w-full basis-1/5 '>
                <button className='px-5 py-2 uppercase duration-500 rounded text-mainColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor '>
                  Send Email
                </button>
              </li>
            </ul>
          </form>
        </div>
      </main>

      <footer className='w-full basis-0.15  flex items-end justify-center'>
        <div className='flex items-center justify-between w-full border-t h-3/5 border-subBdColor'>
          <SocialLinks />
          <p>
            © 2023, All right reserved @{' '}
            <a
              className='text-subColor '
              href='https://github.com/Robert-J-WANG'
              target='_blank'
            >
              Robert-J-WANG
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
