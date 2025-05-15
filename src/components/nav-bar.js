'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-20 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center text-white">
        {/* Logo / Name */}
        <div className="text-xl font-bold cursor-pointer select-none">
         HB
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
