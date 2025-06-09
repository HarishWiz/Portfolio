import AboutImage from "./Assets/AboutImage.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="h-full w-full bg-black text-white flex items-center justify-center md:px-5 py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-2">About Me</h2>
          <p className="text-lg text-gray-400 mb-6">
            Creative coder | UI Enthusiast | Problem Solver
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            Hello! I'm{" "}
            <span className="text-blue-400 font-semibold">Harish V</span>, a
            passionate{" "}
            <span className="text-blue-400 font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            with a strong focus on crafting high-performance, user-centric web
            applications.
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            I specialize in building modern interfaces using{" "}
            <span className="text-cyan-400">React.js</span> and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, along with
            powerful backends powered by{" "}
            <span className="text-cyan-400">Spring Boot</span> and{" "}
            <span className="text-cyan-400">MySQL</span>.
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            With a solid foundation in both frontend and backend technologies, I
            bring ideas to life with clean, scalable code and thoughtful design.
            I'm always exploring new tools, eager to collaborate, and love
            tackling challenges that push me to grow.
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            When I'm not coding, I'm usually improving my UI skills, sharing
            code on GitHub, or learning about system design and architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/harish-v-503714286"
              className="text-blue-400 underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s connect on LinkedIn!
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={AboutImage}
            alt="Harish V"
            className="rounded-xl shadow-2xl w-2/3 transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
