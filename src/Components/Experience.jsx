import React from 'react';
import ExperienceImage from './Assets/ExperienceImage.png'

const Experience = () => {
  return (
    <section id='experience' className="h-full w-full bg-black text-white flex items-center justify-center md:px-5 py-20">
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='md:w-1/2 text-left hidden md:block'>
          <img src={ExperienceImage} alt="ExperienceImage" />
        </div>
        <div className='md:1/2 text-left ps-6 '>
        <h1 className='text-4xl font-bold text-purple-400 mb-4'>Experience</h1>
        <h2 className='text-2xl font-semibold text-blue-400 mb-2'>Full Stack Web Developer Trainee</h2>
        <p className='text-xl font-medium leading-relaxed mb-6'>
        <strong>Credo Systemz | Aug 2024 – Dec 2024</strong>
        </p>
        <ul className='text-xl font-medium leading-relaxed list-disc list-inside'>
          <li>Learned Full-Stack Web Development, focusing on building modern, responsive Applications.</li>
          <li>Gained hands-on Experience with <span className='text-blue-400'>React.js, Tailwind CSS,</span> and <span className='text-blue-400'>Spring Boot</span> .</li>
          <li>Designed User-Friendly, Mobile-responsive layouts to enhance usability across devices.</li>
          <li>Practiced integrating REST APIs and managing MySQL databases for Dynamic Web Applications.</li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience