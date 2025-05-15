'use client';

import { motion } from 'framer-motion';
import { Laptop, Download } from 'lucide-react';
import Navbar from '@/components/nav-bar';
import About from '@/components/about';
import ChatBot from '@/components/chatbot';

export default function Home() {
  return (
    <>
    <Navbar />
    <main id='hero' className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 text-center text-white">
      

     {/* Background Blob 1 - Darker Cyan */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 0.4, scale: 1 }}
  transition={{ duration: 2 }}
  className="absolute top-10 left-10 z-0 h-[600px] w-[600px] bg-cyan-700 opacity-40 blur-3xl rounded-full"
/>

{/* Background Blob 2 - Darker Purple */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 0.3, scale: 1.1 }}
  transition={{ duration: 3 }}
  className="absolute bottom-10 right-10 z-0 h-[500px] w-[500px] bg-purple-700 opacity-30 blur-2xl rounded-full"
/>


      <div className="relative z-10 flex flex-col items-center">

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="mb-4 text-cyan-400"
        >
          <Laptop size={32} />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Hi, I'm Haileamlak
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-400 mb-4"
        >
          Software Engineer & Full-Stack Developer
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-xl text-gray-300 mb-6"
        >
          I build modern, fast, and responsive websites and applications. I love creating user-friendly experiences and solving complex problems with code.
        </motion.p>

        {/* Download Button */}
       <motion.a
  href="https://drive.google.com/file/d/1BhKx1p47eC26j-FE621D9UYrWDu3lWxr/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors"
>
  <span
    className="absolute inset-0 -translate-x-full bg-cyan-700 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
    aria-hidden="true"
  />

  <span className="relative z-10 flex items-center gap-2">
    <Download size={18} />
    Download My CV
  </span>
</motion.a>


      </div>
    </main>
    <About />
    <ChatBot />
    {/* Add more sections here as needed */}
    </>
  );
}
