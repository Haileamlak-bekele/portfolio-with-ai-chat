import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Fikru Tesfaye",
    title: "full-stack developer, Tech Solutions in AcaTech",
    quote:
      "Haileamlak is a talented developer who delivers high-quality work on time. His attention to detail and passion for learning new technologies make him a valuable asset to any team.",
  },
  {
    name: "Dr Melkamu",
    title: "CEO, python developer, Data Science Co. in AcaTech",
    quote:
      "Working with Haileamlak was a fantastic experience. He communicates clearly, solves problems efficiently, and always brings creative ideas to the table.",
  },
  {
    name: "Solomon",
    title: "senior developer, fullstack developer and Lead in FinServ Technology",  
    quote:
      "Haileamlak’s technical skills and positive attitude helped us launch our project successfully. I highly recommend him for any web development work.",
  },
  {
    name: "Biniyam",
    title: "senior developer, fullstack developer and Lead in FinServ Technology",
    quote:
      "Haileamlak is a dedicated and skilled developer. His ability to adapt to new challenges and his commitment to quality make him a pleasure to work with.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonial = testimonials[page];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage]) => {
        let nextPage = prevPage + 1;
        if (nextPage >= testimonials.length) nextPage = 0;
        return [nextPage, 1];
      });
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = testimonials.length - 1;
      if (nextPage >= testimonials.length) nextPage = 0;
      return [nextPage, newDirection];
    });
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Testimonials</h2>
        <div className="relative flex flex-col items-center">
          <div className="w-full min-h-[270px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
  key={page}
  custom={direction}
  variants={variants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
  className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center w-full"
>
  <UserCircle2 className="w-16 h-16 text-cyan-400 mb-4" />
  <p className="text-gray-200 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
  <span className="font-semibold text-cyan-300">{testimonial.name}</span>
  <span className="text-sm text-gray-400">{testimonial.title}</span>
</motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => paginate(-1)}
              className="px-4 py-2 rounded-full bg-cyan-700 hover:bg-cyan-600 transition text-white"
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <button
              onClick={() => paginate(1)}
              className="px-4 py-2 rounded-full bg-cyan-700 hover:bg-cyan-600 transition text-white"
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === page ? "bg-cyan-400" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}