import React from 'react';
import { Award, BookOpen, Sparkles, BrainCircuit, Cloud, GitBranch } from 'lucide-react';

export const MicrosoftBadges: React.FC = () => {
  const badges = [
    { id: 1, title: 'Introduction to AI Concepts', domain: 'AI' },
    { id: 2, title: 'Introduction to Generative AI and Agents', domain: 'AI' },
    { id: 3, title: 'Introduction to Natural Language Processing Concepts', domain: 'AI' },
    { id: 4, title: 'Introduction to AI Speech Concepts', domain: 'AI' },
    { id: 5, title: 'Introduction to Computer Vision Concepts', domain: 'AI' },
    { id: 6, title: 'Introduction to AI-powered Information Extraction Concepts', domain: 'AI' },
    { id: 7, title: 'Introduction to Retrieval-Augmented Generation (RAG) Concepts', domain: 'AI' },
    { id: 8, title: 'Plan and Prepare to Develop AI Solutions on Azure', domain: 'Azure & AI' },
    { id: 9, title: 'Select, Deploy, and Evaluate Microsoft Foundry Models', domain: 'Azure & AI' },
    { id: 10, title: 'Describe Cloud Computing', domain: 'Cloud' },
    { id: 11, title: 'Describe the Benefits of Using Cloud Services', domain: 'Cloud' },
    { id: 12, title: 'Describe Cost Management in Azure', domain: 'Azure' },
    { id: 13, title: 'Introduction to Git', domain: 'Git & GitHub' },
    { id: 14, title: 'Contribute to an Open-Source Project on GitHub', domain: 'Git & GitHub' },
    { id: 15, title: 'Introduction to GitHub Copilot', domain: 'Copilot' },
    { id: 16, title: 'Introduction to Prompt Engineering with GitHub Copilot', domain: 'Copilot' },
    { id: 17, title: 'Responsible AI with GitHub Copilot', domain: 'Copilot & Ethics' },
  ];

  return (
    <section id="badges" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-cyan-900/30">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
                  Continuous Learning
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                  MICROSOFT LEARN JOURNEY
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              17 Microsoft Learn Badges completed covering Artificial Intelligence, Cloud Services on Azure, and GitHub developer workflows.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-cyan-300 font-mono text-xs">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>17 Microsoft Learn Badges</span>
          </div>
        </div>

        {/* Responsive Grid of Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-4 sm:p-5 card-hover-effect flex items-start gap-3.5 group"
            >
              {/* Badge Icon / Number */}
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-950 to-blue-900 border border-cyan-700/50 flex items-center justify-center shrink-0 text-cyan-300 font-mono font-bold text-xs shadow-sm shadow-cyan-900/50 group-hover:scale-105 transition-transform">
                #{badge.id}
              </div>

              {/* Title & Domain */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug mb-1.5">
                  {badge.title}
                </h3>
                <span className="inline-block text-[11px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-900/50">
                  {badge.domain}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono">
          <span>* Official Microsoft Learn module badges completed on Microsoft Learn platform</span>
        </div>
      </div>
    </section>
  );
};
