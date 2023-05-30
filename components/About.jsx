import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                About
            </p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            I specialize in developing responsive and accessible websites, 
            and I&apos;m passionate about creating user-friendly interfaces 
            that provide an exceptional user experience.  I am also
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end websites using HTML, CSS, Javascript, and
            React, I&apos;m a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
           </p>
           <p className='py-2 text-gray-600'>
            I&apos;m now spending my time building projects with React JS, Next JS, 
            and learning new technologies.
            Overall, I&apos;m a motivated and enthusiastic frontend developer 
            with a passion for creating engaging and innovative web experiences. 
            I&apos;m excited to continue growing my skills and contributing to the success of future projects.
            </p>
           <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' width='500' height='300' alt='/' />
          </div>
      </div>
    </div>
  );
};

export default About;
