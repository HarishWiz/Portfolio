import React from 'react';
import AboutImage from "./Assets/AboutImage.png";

const AboutMe = () => {
  return (
    <section id='about' className="h-full w-full bg-black text-white flex items-center justify-center md:px-5 py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
          <p className="text-xl font-medium leading-relaxed mb-6">
            I’m <span className="text-blue-400 font-semibold">Harish V</span>, a{" "}
            <span className="text-blue-400 font-semibold">Full-Stack Web Developer</span> passionate about building
            dynamic, user-focused web applications.
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            With expertise in <span className="text-cyan-400">React.js</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and <span className="text-cyan-400">Spring Boot</span>, I
            focus on creating seamless, innovative digital experiences.
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            I’m always eager to learn, collaborate, and tackle new challenges to craft solutions that make a real impact.
          </p>
          <a
            href="https://www.linkedin.com/in/harish-v-503714286"
            className="text-blue-400 underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s connect on LinkedIn!
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={AboutImage}
            alt="Harish V"
            className="rounded-lg shadow-lg w-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
