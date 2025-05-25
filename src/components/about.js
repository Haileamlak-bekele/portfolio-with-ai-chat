'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const aboutSections = [
  {
    title: "Introduction",
    content: (
      <>
        Hello! I’m Haileamlak, a dedicated and passionate <span className="font-semibold text-cyan-400">web developer</span> with a strong background in building modern, responsive, and animated websites and applications.
        i am also a student at Debre Markos University, pursuing a Bachelor of Software Engineering. My journey in tech has been fueled by a love for coding and a desire to create impactful digital experiences.
      </>
    ),
  },
  {
    title: "My Journey",
    content: (
      <>
      My journey in software development began with a fascination for how websites and applications work behind the scenes. I started by experimenting with HTML and CSS, then quickly moved on to JavaScript and modern frameworks. Over time, I built personal projects, contributed to group assignments, and participated in coding challenges, all of which helped me grow my skills and confidence as a developer. Each step has reinforced my passion for problem-solving and creating meaningful digital experiences.
      </>
    ),
  },
  {
    title: "Education & Projects",
    content: (
      <>
        My educational background includes a Bachelor of Software Engineering from Debre Markos University , where I gained a solid foundation in software development principles and practices. I have also worked on various projects that showcase my ability to deliver high-quality code and innovative solutions.
      </>
    ),
  },
  {
    title: "Continuous Learning",
    content: (
      <>
        Beyond coding, I am an avid learner who loves exploring new tech trends, frameworks, and tools. I believe in continuous growth and often participate in online courses, hackathons, and developer communities to stay updated and inspired.
      </>
    ),
  },
  {
    title: "Life & Hobbies",
    content: (
      <>
        Outside of tech, I enjoy photography, listening to hymn, and spending time with friends and family. My spiritual life is important to me, and I find balance through faith and personal reflection. I also love gaming as a way to relax and spark creativity.
      </>
    ),
  },
  {
    title: "Let's Connect",
    content: (
      <>
        If you’re looking for someone who is committed, creative, and always eager to learn and collaborate, I’d love to connect and work together!
      </>
    ),
  },
];
export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

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

      {/* Responsive layout: image above on small screens, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-20 max-w-5xl mx-auto">
        {/* Image section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          variants={itemVariants}
        >
          <Image
            width={400}
            height={400}
            src="/profile.jpg"
            alt="Haileamlak"
            className="mb-4 rounded-full object-cover w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-cyan-400 shadow-lg"
          />
          <span className="text-white font-semibold text-center text-lg sm:text-xl mt-2">
            Haileamlak <br /> Web Developer
          </span>
        </motion.div>

        {/* Collapsible Text content */}
        <motion.div
          className="w-full md:w-1/2 flex-shrink space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed"
          variants={containerVariants}
        >
          {aboutSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <button
                className="w-full text-left font-semibold text-cyan-300 hover:text-cyan-400 focus:outline-none transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {section.title}
              </button>
              {openIndex === idx && (
                <div className="mt-2 text-white">
                  {section.content}
                </div>
              )}
            </motion.div>
          ))}
          {/* Add the "Ask about me..." section here */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-b border-gray-700 my-4">
              <span className="text-blue-500 text-sm">
                Ask about me anything the AI or Send me a message via Email below
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}