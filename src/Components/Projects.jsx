import React, { useState } from "react";
import Project1 from "./Assets/Project1.png";
import Project2 from "./Assets/Project2.png";
import Project3 from "./Assets/Project3.png";
import Project4 from "./Assets/Project4.png";
import krishnasite from "./Assets/krishnasite.png";
import property from "./Assets/property.png";
import weatherapp from "./Assets/weatherapp.png";
import rightmove from "./Assets/rightmove.png";
import todo from "./Assets/todo.png"
const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const featuredProjects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A fully functional weather app with live API integration, search functionality, and clean UI to display weather conditions by city.",
      teckStack: "React.js, JavaScript, Tailwind CSS, OpenWeather API,",
      liveDemo: "https://wizweatherapp.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: weatherapp,
    },
    {
      id: 2,
      title: "Wizard Emporium",
      description:
        "A magical e-commerce store where wizards can buy wands, potions, books and other essentials. The UI has smooth animations to enhance the user experience.",
      teckStack: "React.js, JavaScript, Tailwind CSS, Framer Motion",
      liveDemo: "https://wizard-emporium.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: Project1,
    },
    {
      id: 3,
      title: "KrishnaStore UI",
      description:
        "A modern supermarket UI showcasing products like vegetables, groceries, and daily essentials with a clean layout and category-based browsing.",
      teckStack: "React.js, TypeScript, Tailwind CSS, Framer Motion",
      liveDemo: "https://krishnasite.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: krishnasite,
    },
    {
      id: 4,
      title: "Property - Real Estate UI",
      description:
        "A responsive and modern real estate UI inspired by property.ca, featuring smooth animations with Framer Motion.",
      teckStack: "React.js, TypeScript, Tailwind CSS, Framer Motion",
      liveDemo: "https://aliproperty.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: property,
    },
    {
      id: 5,
      title: "RightMove UI Clone",
      description:
        "A responsive real estate website inspired by Rightmove, featuring intuitive navigation, modern layout, and smooth user interactions.",
      teckStack: "React.js, JavaScript, Tailwind CSS",
      liveDemo: "https://rightmoveupdated.netlify.app/home",
      github: "https://github.com/HarishWiz",
      image: rightmove,
    },
  ];

  const miniProjects = [
    {
      id: 1,
      title: "Mini To-Do App",
      teckStack: "React.js, JavaScript, Tailwind CSS",
      liveDemo: "https://small-todo.netlify.app/",
      github: "https://github.com/HarishWiz",
      image: todo,
    },
    {
      id: 2,
      title: "Amazon Login Page",
      teckStack: "React.js, Tailwind CSS",
      liveDemo: "*",
      github: "https://github.com/HarishWiz",
      image: Project2,
    },
    {
      id: 3,
      title: "Yahoo Login Page",
      teckStack: "React.js, Tailwind CSS",
      liveDemo: "*",
      github: "https://github.com/HarishWiz",
      image: Project3,
    },
    {
      id: 4,
      title: "Food Image Gallery",
      teckStack: "React.js, Bootstrap",
      liveDemo: "*",
      github: "https://github.com/HarishWiz",
      image: Project4,
    },
  ];

  const renderProjects = () => {
    if (activeTab === "featured") return featuredProjects;
    if (activeTab === "mini") return miniProjects;
    return [...featuredProjects, ...miniProjects];
  };

  return (
    <section id="projects" className="w-full bg-black py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-purple-400 mb-10">
          My Projects
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          {["all", "featured", "mini"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-5 py-2 rounded-full text-sm font-semibold flex items-center 
                ${
                  activeTab === tab
                    ? "bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-300"
                } 
                transition-colors duration-300`}
            >
              {tab} <span className="hidden md:flex">Projects</span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div
          className={`grid gap-6 ${
            activeTab === "mini"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {renderProjects().map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl shadow-md p-4"
            >
              {project.image && (
                <div className="overflow-hidden inline-block w-full rounded">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 rounded-md mb-3 hover:scale-110 duration-500 transition-transform"
                  />
                </div>
              )}
              <h3 className="text-lg font-bold text-blue-400">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-gray-300 text-sm mt-1">
                  {project.description}
                </p>
              )}
              <p className="text-gray-400 text-xs mt-2">
                <span className="font-semibold">Tech:</span> {project.teckStack}
              </p>
              <div className="flex justify-between text-sm mt-4 text-blue-400">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
