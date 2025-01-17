
import HTML from "./Assets/HTML.svg";
import CSS from "./Assets/CSS.svg";
import Js from "./Assets/Js.svg";
import Bootstrap from "./Assets/Bootstrap.svg";
import Tailwind from "./Assets/Tailwind.svg";
import React from "./Assets/React.svg";
import Java from "./Assets/Java.svg";
import SpringBoot from "./Assets/SpringBoot.svg";
import MySQL from "./Assets/MySQL.svg";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind ",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: React,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: Java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: SpringBoot,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: MySQL,
      title: "MYSQL",
      style: "shadow-blue-500",
    },
  ];
  return (
    <>
      <section id='skills' className="w-full h-fit bg-black py-20 flex flex-col justify-center items-center md:px-5">
        <div className='container mx-auto flex flex-col items-center justify-center gap-10 px-6'>
          <div className='w-full'>
          <h1 className="text-purple-400 text-4xl font-bold text-start md:ps-8">
            My Skills
          </h1>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-8 text-center py-2 px-6 md:px-10">
            {skills.map(({ id, title, src, style }) => (
              <div
                key={id}
                className={`flex flex-col w-full h-auto justify-center items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img className="w-32 h-32" src={src} alt={title} />
                <p className="text-white font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
