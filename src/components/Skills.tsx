// components/Skills.tsx
"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS / Tailwind", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "UI/UX Design", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
