import React from 'react';
import {
  Wrench,
  GitBranch,
  Github,
  Code2,
  Cloud,
  BookOpen,
  Cpu,
  Figma,
  Send,
  Palette,
} from 'lucide-react';

export const Tools: React.FC = () => {
  const toolsList = [
    { name: 'Git', icon: GitBranch, category: 'Version Control' },
    { name: 'GitHub', icon: Github, category: 'Collaboration' },
    { name: 'VS Code', icon: Code2, category: 'Code Editor' },
    { name: 'Azure', icon: Cloud, category: 'Cloud Platform' },
    { name: 'Microsoft Learn', icon: BookOpen, category: 'Technical Learning' },
    { name: 'Arduino IDE', icon: Cpu, category: 'Embedded Development' },
    { name: 'Figma (Basics)', icon: Figma, category: 'UI Design' },
    { name: 'Postman (Basics)', icon: Send, category: 'API Testing' },
    { name: 'Canva', icon: Palette, category: 'Visual Design' },
  ];

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070F20] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Software & Platforms
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Tools & Technologies
            </h2>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {toolsList.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-4 sm:p-5 card-hover-effect flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center shrink-0 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all shadow-sm shadow-cyan-950">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                    {tool.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {tool.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
