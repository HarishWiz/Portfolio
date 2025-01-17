import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');
  return (
    <>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-black fixed top-0 shadow-sm shadow-slate-500 z-20">
        <h1 className="text-3xl text-white">Developer</h1>
        <div className="hidden md:block">
          <ul className="flex space-x-10 text-gray-400 cursor-pointer px-8 ">
            <li className={`hover:text-white hover:underline ${active === 'home' ? 'text-white' : ''}`}
              onClick={() => setActive('home')}><a href="#home">Home</a></li>
            <li className={`hover:text-white hover:underline ${active === 'about' ? 'text-white' : ''}`}
              onClick={() => setActive('about')}><a href="#about">About Me</a></li>
            <li className={`hover:text-white hover:underline ${active === 'experience' ? 'text-white' : ''}`}
              onClick={() => setActive('experience')}><a href="#experience">Experience</a></li>
            <li className={`hover:text-white hover:underline ${active === 'skills' ? 'text-white' : ''}`}
              onClick={() => setActive('skills')}><a href="#skills">Skills</a></li>
            <li className={`hover:text-white hover:underline ${active === 'projects' ? 'text-white' : ''}`}
              onClick={() => setActive('projects')}><a href="#projects">Projects</a></li>
            <li className={`hover:text-white hover:underline ${active === 'contact' ? 'text-white' : ''}`}
              onClick={() => setActive('contact')}><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {toggle && <div className="block md:hidden">
          <ul onClick={()=>setToggle(!toggle)} className=" flex flex-col fixed top-16 left-0 px-8 bg-black py-4 space-y-3 w-full h-fit text-white justify-around">
            <li><a href="#home">Home</a></li>
            <li><a href="#about" >About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>}
        <button className="text-white block md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <MdMenu className="w-7 h-7" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
