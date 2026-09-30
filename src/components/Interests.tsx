import React from 'react';
import {
  Compass,
  BrainCircuit,
  Cloud,
  Lightbulb,
  Globe,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const Interests: React.FC = () => {
  const interestsList = [
    { name: 'AI & Machine Learning', icon: BrainCircuit },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Web Development', icon: Globe },
    { name: 'Reading Tech Blogs', icon: BookOpen },
    { name: 'Exploring New Technologies', icon: Sparkles },
  ];

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Fields of Curiosity
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Interests
            </h2>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interestsList.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-4 sm:p-5 card-hover-effect flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {interest.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
