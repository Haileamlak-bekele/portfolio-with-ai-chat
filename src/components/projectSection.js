'use client';
import { projects } from '@/lib/projects';
import { Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300"
        >
          💼 Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-blue-500/40 transition duration-300 group"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-300 group-hover:text-white transition">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-800/20 text-blue-300 border border-blue-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white flex items-center gap-1 text-sm transition"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-white flex items-center gap-1 text-sm transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}