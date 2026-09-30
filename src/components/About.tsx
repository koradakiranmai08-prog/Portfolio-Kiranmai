import React from 'react';
import { User, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>
        </div>

        {/* Card containing EXACT quote */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0A1929] to-[#081322] border border-cyan-900/40 p-6 sm:p-8 md:p-10 shadow-xl shadow-cyan-950/30">
          <div className="absolute top-4 right-4 text-cyan-500/20">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <div className="relative z-10">
            <blockquote className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed italic border-l-4 border-cyan-500 pl-4 sm:pl-6 my-2">
              “Motivated and detail-oriented CSE 2nd year student with a strong foundation in programming and problem-solving. Passionate about AI, Cloud Computing and emerging technologies. Eager to learn, build innovative solutions and contribute to impactful projects through continuous growth and collaboration.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
