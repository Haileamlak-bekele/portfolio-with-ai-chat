'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

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
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-gray-900 bg-opacity-95 px-6 pb-4 flex flex-col space-y-4 font-medium overflow-hidden`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <li>
          <a href="#hero" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setMenuOpen(false)}>
            skills
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </motion.ul>
    </motion.nav>
  );
}