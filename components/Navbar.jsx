import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();


    useEffect(()=> {
      if (
        router.asPath  === '/crypto' ||
        router.asPath === '/restaurant' 
      ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
      }else {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      }
    }, [router]);


    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

  return (
    <div 
       style={{backgroundColor: `${navBg}`}}
       className={
               shadow 
               ? 'fixed w-full h-20 shadow-xl z-[100]' 
               : 'fixed w-full h-20 z-[100]'
           }
         >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
           <Image 
              src={NavLogo} 
              alt="/" 
              width='80' 
              height='40' 
              className='cursor-pointer'
           />
        </Link>
       
        <div >
        <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#home' scroll={false}>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about' scroll={false}>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills' scroll={false}>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects' scroll={false}>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link 
                href='https://docs.google.com/document/d/e/2PACX-1vTGcSztvXpY5iaFSXDtbwxQKx_d7M5dpAewNiKnB4fUifZGbaub_pcPZjIqTyD0_9YxdC_1KexYkU5X/pub'
                target='_blank'
                rel='noreferrer'
              >
                  Resume
              </Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact' scroll={false}>Contact</Link>
            </li>
          </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
      </div>

        <div className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
            >
        {/* Side Drawer Menu */}
            <div className={
                nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    :   'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                  }
                >
                <div>
                    <div className='flex w-full justify-between items-center'>
                       <Link href='/'>
                       <Image
                          src='/../public/assets/navLogo.png'
                          width='87'
                          height='35'
                          alt='/'
                       />
                       </Link>
                       <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                           <AiOutlineClose />
                       </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                          <li onClick={() => setNav(false)} className='text-sm py-4'>Home</li>
                        </Link>
                        <Link href='/#about'>
                          <li onClick={() => setNav(false)} className='text-sm py-4'>About</li>
                        </Link>
                        <Link href='/#skills'>
                          <li onClick={() => setNav(false)} className='text-sm py-4'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                          <li onClick={() => setNav(false)} className='text-sm py-4'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                          <li onClick={() => setNav(false)} className='text-sm py-4'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5655e5]'>let&apos;s Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;