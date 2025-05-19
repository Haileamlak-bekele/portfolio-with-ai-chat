'use client';

import { motion } from 'framer-motion';
import { FaCode, FaBible, FaGamepad } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gray-900 px-4 sm:px-6 py-12 sm:py-20 text-white flex flex-col justify-center mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="mb-8 sm:mb-12 text-center text-3xl sm:text-5xl font-extrabold text-cyan-400 tracking-wide"
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20">
        {/* Left: Text content */}
        <motion.div
          className="md:flex-1 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed max-w-xl"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            Hello! I’m John Doe, a passionate{' '}
            <span className="font-semibold text-cyan-400">web developer</span>{' '}
            specializing in modern, responsive, and animated websites.
          </motion.p>
          <motion.p variants={itemVariants}>
            I love crafting{' '}
            <span className="font-semibold text-cyan-400">sleek user experiences</span>{' '}
            and building projects with Next.js and TailwindCSS.
          </motion.p>
          <motion.p variants={itemVariants}>
            Outside of coding, I enjoy photography, music, and exploring new tech trends.
          </motion.p>
        </motion.div>

        {/* Right: Icons with short text */}
        <div className="md:flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-md w-full">
          {[
            { icon: FaCode, label: 'Coding & Development' },
            { icon: FaBible, label: 'spritual' },
            { icon: FaGamepad, label: 'Game' },
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-cyan-400 cursor-pointer"
              variants={itemVariants}
            >
              <Icon className="mb-2 sm:mb-3 text-4xl sm:text-5xl" />
              <span className="text-white font-semibold text-center text-sm sm:text-base">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}