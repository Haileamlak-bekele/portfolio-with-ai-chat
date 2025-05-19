'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { useState } from 'react';
import { Mail, User, MessageCircle, Send } from 'lucide-react';

export default function ContactSection() {
  const form = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_5rn7ygi',
        'template_zr83wvn',
        form.current,
        'XMJxybqrMZMC6Of8I'
      )
      .then(() => {
        setStatusMessage('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setStatusMessage('❌ Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      ref={sectionRef}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-cyan-400">Contact Me</h2>
        <p className="text-gray-400 mb-8 md:mb-10 text-base sm:text-lg">
          Got a question or want to work together? Drop a message below!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-1 text-sm sm:text-base">
              <User size={18} />
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-600 focus:border-cyan-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-1 text-sm sm:text-base">
              <Mail size={18} />
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-600 focus:border-cyan-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-1 text-sm sm:text-base">
              <MessageCircle size={18} />
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white border border-gray-600 focus:border-cyan-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSending}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold shadow-lg transition disabled:opacity-50 text-sm sm:text-base"
          >
            <Send size={18} />
            {isSending ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        {statusMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-center text-cyan-400"
          >
            {statusMessage}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}