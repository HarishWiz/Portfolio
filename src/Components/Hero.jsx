import React from 'react';
import avatar from './Assets/avatar.avif'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import resume from './Assets/Harish-Resume.pdf'
function Hero() {
  return (
    <>
      <section id='home' className='w-full pt-20  bg-black h-fit flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0'>
            <img className=' h-2/3 w-2/3 sm:h-1/2 lg:h-2/3 lg:w-auto text-center  rounded-lg' src={avatar} alt="" />
          </div>
          <div className='text-white flex flex-col justify-center space-y-6 w-full md:w-1/2 px-6 md:px-18'>
            <div className=' space-y-3 text-center md:text-left '>
              <h1 className='text-4xl md:text-6xl font-bold '><span className='text-red-600'>Hi</span>, I Am Harish</h1>
              <h2 className='text-2xl md:text-4xl font-semibold'>Full Stack <span className='text-blue-400'> Web Developer</span></h2>
              <p className='text-sm md:text-lg font-medium'>A Full-Stack Web Developer specializing in creating modern, responsive websites.</p>
            </div>
            <div className=' flex justify-center md:justify-start space-x-8'>
              <a href="https://www.linkedin.com/in/harish-v-503714286" target='_blank' className='text-white hover:text-blue-500 text-2xl'><FaLinkedin /></a>
              <a href="https://github.com/HarishWiz" target='_blank' className='text-white hover:text-gray-500 text-2xl'><FaGithub /></a>
              <a href="mailto:harishharish8122@gmail.com" className='text-white hover:text-red-500 text-2xl'><FaEnvelope /></a>
              <a href={resume} target='_blank' className='text-white hover:text-green-500 text-2xl'> <FaFileDownload /></a>
            </div>
            <div className=' flex justify-center md:justify-start'>
              <a href="#hire"><button className='px-6 py-2 bg-blue-600 text-white text-lg md:text-xl rounded-md hover:bg-blue-700'>Hire Me</button></a>
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero