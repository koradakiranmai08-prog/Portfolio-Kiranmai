import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-cyan-900/30 py-12 px-4 sm:px-6 lg:px-8 text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-wider mb-1">
          KORADA KIRANMAI
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono text-cyan-400 font-medium mb-6">
          B.Tech CSE Student | Aspiring Software Engineer
        </p>

        {/* Social / Direct Links */}
        <div className="flex items-center justify-center gap-6 text-slate-300 text-xs sm:text-sm mb-8">
          <a
            href="https://github.com/kiranmai-cse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="https://linkedin.com/in/korada-kiranmai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="mailto:koradakiranmai08@gmail.com"
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-900 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Korada Kiranmai</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all text-xs"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
