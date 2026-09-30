import React from 'react';
import { Code, Binary, Lightbulb } from 'lucide-react';

export const Skills: React.FC = () => {
  const languageSkills = [
    'C',
    'Python (Basics)',
    'Java (Basics)',
    'HTML',
    'CSS',
  ];

  const coreCsSkills = [
    'Data Structures (Basics)',
  ];

  const otherSkills = [
    'Problem Solving',
    'Logical Thinking',
    'Communication',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Technical Skills
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Languages */}
          <div className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-6 card-hover-effect">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
              <div className="p-1.5 rounded-md bg-blue-950 text-blue-400">
                <Code className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-white tracking-wide text-sm sm:text-base uppercase font-mono">
                Languages
              </h3>
            </div>
            <ul className="space-y-3">
              {languageSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#070F20] border border-slate-800/80 hover:border-cyan-700/50 text-slate-200 text-sm font-medium transition-colors"
                >
                  <span>{skill}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
                </li>
              ))}
            </ul>
          </div>

          {/* Core CS */}
          <div className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-6 card-hover-effect">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
              <div className="p-1.5 rounded-md bg-cyan-950 text-cyan-400">
                <Binary className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-white tracking-wide text-sm sm:text-base uppercase font-mono">
                Core CS
              </h3>
            </div>
            <ul className="space-y-3">
              {coreCsSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#070F20] border border-slate-800/80 hover:border-cyan-700/50 text-slate-200 text-sm font-medium transition-colors"
                >
                  <span>{skill}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
                </li>
              ))}
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-6 card-hover-effect">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
              <div className="p-1.5 rounded-md bg-sky-950 text-sky-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-white tracking-wide text-sm sm:text-base uppercase font-mono">
                Other Skills
              </h3>
            </div>
            <ul className="space-y-3">
              {otherSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#070F20] border border-slate-800/80 hover:border-cyan-700/50 text-slate-200 text-sm font-medium transition-colors"
                >
                  <span>{skill}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
