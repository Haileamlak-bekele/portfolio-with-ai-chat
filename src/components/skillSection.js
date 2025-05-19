'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const skills = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'HTML', level: 98 },
    { name: 'CSS', level: 96 },
    { name: 'JavaScript', level: 90 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs', level: 90 },
  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 85 },
    { name: 'Figma', level: 75 },
  ],
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          🚀 My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {Object.entries(skills).map(([category, skillList], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-xl md:rounded-2xl border border-white/10 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">{category}</h3>
              <div className="space-y-4 sm:space-y-5">
                {skillList.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1 text-blue-200">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-800/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: j * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-teal-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}