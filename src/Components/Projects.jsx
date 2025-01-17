import React from 'react';
import Project1 from './Assets/Project1.png'
import Project2 from './Assets/Project2.png'
import Project3 from './Assets/Project3.png'
import Project4 from './Assets/Project4.png'

const Projects = () => {


  const projects = [
    {
      id: 1,
      title: "Wizard Emporium",
      description:
        "A magical e-commerce store where wizards can buy  wands, potions, books and other essentials",
      teckStack: "React.js, Tailwind CSS ",
      liveDemo: "https://wizard-emporium.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: Project1,
    },
    {
      id: 2,
      title: "Amazon Login Page Clone",
      description:
        "A visually accurate clone of the Amazon login page, built for UI/UX practice.",
      teckStack: "React.js, Tailwind CSS",
      liveDemo: "http://localhost:5173/amazon",
      github: "https://github.com/HarishWiz",
      image: Project2,
    },
    {
      id: 3,
      title: "Yahoo Login Page Clone",
      description:
        "A recreation of Yahoo’s login page with a modern, responsive layout.",
      teckStack: "React.js, Tailwind CSS",
      liveDemo: "http://localhost:5173/yahoo",
      github: "https://github.com/HarishWiz",
      image: Project3,
    },
    {
      id: 4,
      title: "Food Image Gallery ",
      description: "A small image gallery showcasing delicious food items.",
      teckStack: "React.js, Bootstrap",
      liveDemo: "#",
      github: "https://github.com/HarishWiz",
      image: Project4,
    },
  ];
  return (
    <section id='projects' className="w-full h-full bg-black py-10 md:px-5">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="w-full flex justify-start md:justify-end md:pe-8 py-10">
          <h1 className="text-4xl text-purple-400 font-bold text-end">
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-0 md:px-8 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center p-4 justify-start shadow-lg shadow-gray-800 "
            >
              <div className="w-full flex justify-center items-center ">
                <img
                  className="w-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="w-full  p-3 space-y-2">
                <h2 className="w-full text-lg text-blue-400 font-bold">
                  {project.title}
                </h2>
                <p className="w-full text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <p className="w-full text-sm text-gray-400 leading-relaxed">
                  <span className='text-gray-300 font-semibold'>Technologies: </span>{project.teckStack}
                </p>
                <div className="flex justify-between w-full mt-4 pt-4 px-2 items-center border-white border-t">
                  <a className=' text-gray-300 hover:text-blue-500 hover:border-b' href={project.liveDemo} target='_blank' >Demo</a>
                  <a className='text-gray-300 hover:text-blue-500 hover:border-b' href={project.github} target='_blank'>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
