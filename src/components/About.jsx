import React from 'react'
import PROFILE_PIC from '../assets/IMG_1242.jpg';
import { ABOUT_ME } from '../utils/data';

function About() {
  return (
    <>
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id='about'>
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center md:text-center pb-10 md:pb-14'> About Me</h5>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img src={PROFILE_PIC} className='w-full h-80 object-cover rounded-lg mb-4 md:mb-0' alt='profile' />

        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6'>
        <span className='text-2xl font-semibold text-sky-400'> Hello! </span> <br/><br/>
          <p className='text-blue-50 text-lg md:text-[18px] font-normal text-justify leading-6'>
          
          I am Ravishka Tushan Senanayaka, a self-taught full-stack software developer from Sri Lanka. 
          My passion for software is dreaming up ideas and making them come true with beautiful outcomes. 
          <br/>
          I specialize in handling complete web applications, front-end & back-end development, managing databases, ensuring security and performance. 
          I care deeply about the my experience, code quality and collaborating with clients to build and deliver high-quality software.
          </p>
          <br/>
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About