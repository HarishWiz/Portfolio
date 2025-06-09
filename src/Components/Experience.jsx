import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-black text-white py-20 px-6 md:px-16"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 text-start mb-12">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              Frontend Developer
            </h3>
            <p className="text-xl font-medium mb-3">
              <strong>Techzyra | Jan 2025 – Apr 2025</strong>
            </p>
            <ul className="md:list-disc list-none md:list-inside text-lg leading-relaxed space-y-3">
              <li>
                Built and maintained responsive UIs using{" "}
                <span className="text-cyan-400">React.js</span>,{" "}
                <span className="text-cyan-400">TypeScript</span>, and{" "}
                <span className="text-cyan-400">Tailwind CSS</span>.
              </li>
              <li>
                Developed dynamic animations with{" "}
                <span className="text-cyan-400">Framer Motion</span>.
              </li>
              <li>
                Worked closely with designers and backend developers (Node.js, Express).
              </li>
              <li>
                Focused on performance, accessibility, and clean code structure.
              </li>
            </ul>
          </motion.div>

          {/* Credo Systemz Experience - Right */}
          <motion.div
            className="bg-gray-900 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              Full Stack Web Developer Trainee
            </h3>
            <p className="text-xl font-medium mb-3">
              <strong>Credo Systemz | Aug 2024 – Dec 2024</strong>
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-3">
              <li>
                Learned and practiced modern web development with{" "}
                <span className="text-cyan-400">React.js</span>,{" "}
                <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
                <span className="text-cyan-400">Spring Boot</span>.
              </li>
              <li>
                Built mobile-responsive UI layouts and integrated RESTful APIs.
              </li>
              <li>
                Worked on MySQL-based backend features and user authentication flows.
              </li>
              <li>
                Developed full-stack CRUD applications and dynamic dashboards.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
