import React from 'react';
import { Award, Trophy, Users, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievementsList = [
    {
      icon: Trophy,
      text: 'Earned 17 Microsoft Learn Badges in AI, Azure, GitHub, Cloud Computing and more.',
      tag: 'Learning Milestone',
    },
    {
      icon: Users,
      text: 'Class Representative (CR) for 1st Year – 2nd Semester.',
      tag: 'Leadership',
    },
    {
      icon: Award,
      text: 'Team Lead in Hackathon – Led a team and developed a technical solution.',
      tag: 'Technical & Teamwork',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070F20] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Recognition & Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Achievements & Certifications
            </h2>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {achievementsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-5 sm:p-6 card-hover-effect flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {item.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-slate-100 font-medium text-sm sm:text-base leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
