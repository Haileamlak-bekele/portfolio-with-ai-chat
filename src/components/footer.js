import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-cyan-400 text-lg">Haileamlak Bekele</span>
          <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a
            href="https://github.com/Haileamlak-bekele"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/haileamlak-bekele"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}