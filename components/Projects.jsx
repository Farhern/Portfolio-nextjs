import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I &apos;ve Built</h2>                       
        <div className='grid md:grid-cols-2 gap-8'>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/crypto.jpg' width='700' height='400' alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Crypto App</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                    <Link href='/Crypto'>
                        <p className='bg-white py-3 text-center text-gray-700 font-bold text-lg rounded-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/netflix.jpg' width='700' height='400' alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Netflix App</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                    <Link href='/Netflix'>
                        <p className='bg-white py-3 text-center text-gray-700 font-bold text-lg rounded-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/food.jpg' width='1000' height='400' alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Restaurant App</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                    <Link href='/Restaurant'>
                        <p className='bg-white py-3 text-center text-gray-700 font-bold text-lg rounded-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/projects/blackjack.jpg' width='600' height='400' alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Blackjack Game</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                    <Link href='/'>
                        <p className='bg-white py-3 text-center text-gray-700 font-bold text-lg rounded-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;


