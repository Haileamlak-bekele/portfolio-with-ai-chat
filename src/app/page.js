'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Download } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/nav-bar';
import About from '@/components/about';
import ChatBot from '@/components/chatbot';
import ProjectsSection from '@/components/projectSection';
import Contact from '@/components/contact';
import SkillsSection from '@/components/skillSection';
import Footer from '@/components/footer';
import Testimonials from '@/components/Testimonial';

export default function Home() {
  // Typing effect for name and title
  const nameText = "Hi, I'm Haileamlak";
  const titleText = "Software Engineer & Full-Stack Developer";
  const [nameDisplay, setNameDisplay] = useState('');
  const [titleDisplay, setTitleDisplay] = useState('');

  useEffect(() => {
    let nameTimeout, titleTimeout;
    let i = 0, j = 0;

    function typeName() {
      if (i <= nameText.length) {
        setNameDisplay(nameText.slice(0, i));
        i++;
        nameTimeout = setTimeout(typeName, 60);
      } else {
        typeTitle();
      }
    }
    function typeTitle() {
      if (j <= titleText.length) {
        setTitleDisplay(titleText.slice(0, j));
        j++;
        titleTimeout = setTimeout(typeTitle, 40);
      }
    }
    typeName();
    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(titleTimeout);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <main
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-16 sm:py-20 text-white overflow-hidden
             before:absolute before:bottom-0 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-gray-900 before:z-10"
      >
        {/* Background Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-10 left-10 z-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] bg-cyan-700 opacity-40 blur-3xl rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          transition={{ duration: 3 }}
          className="absolute bottom-10 right-10 z-0 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] bg-purple-700 opacity-30 blur-2xl rounded-full"
        />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto w-full">
          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1 }}
              className="mb-4 text-cyan-400 flex justify-center md:justify-start"
            >
              <Laptop size={32} />
            </motion.div>

            <motion.h1
              initial={false}
              animate={false}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 whitespace-pre"
            >
              {nameDisplay}
              <span className="animate-pulse text-cyan-400">|</span>
            </motion.h1>

            <motion.h2
              initial={false}
              animate={false}
              className="text-lg sm:text-xl text-gray-400 mb-4 whitespace-pre"
            >
              {titleDisplay}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 mb-6 text-base sm:text-lg"
            >
              I build modern, fast, and responsive websites and applications. I love creating user-friendly experiences and solving complex problems with code.
            </motion.p>

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

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/Programming-pana.svg"
              alt="Developer Illustration"
              width={500}
              height={500}
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              priority
            />
          </motion.div>
        </div>
      </main>

      <About />
      <SkillsSection />
      <ChatBot />
      <ProjectsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}