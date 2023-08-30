import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-between items-center'>
        <div>
           <p className='uppercase text-sm tracking-widest text-gray-600'>
               LET&apos;S BUILD SOMETHING TOGETHER
           </p>
           <h1 className='py-4 text-gray-700'>
               Hi, I&apos;m <span className='text-[#5651e5]'>Aden</span>
           </h1>
           <h1 className='py-2 text-gray-700'>
               A Front-End Web Developer
           </h1>
           <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           I&apos;m a front-end web developer specialized in building
            exceptional digital experiences. Currently, I&apos;m focused on building responsive front-end 
            web applications while learning other technologies.
           </p>
           <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
           <a
              href='www.linkedin.com/in/aden-bashir'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Farhern'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='mailto:farhanjp7452@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                 <AiOutlineMail />
             </div>
            </a>
            <a
              href='https://docs.google.com/document/d/e/2PACX-1vTGcSztvXpY5iaFSXDtbwxQKx_d7M5dpAewNiKnB4fUifZGbaub_pcPZjIqTyD0_9YxdC_1KexYkU5X/pub'
              target='_blank'
              rel='noreferrer'
            >
             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                 <BsFillPersonLinesFill />
             </div>
             </a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Main
