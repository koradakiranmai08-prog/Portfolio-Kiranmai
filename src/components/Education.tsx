import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  statusBadge?: string;
}

export const Education: React.FC = () => {
  const educationHistory: EducationItem[] = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: "Vignan's Institute of Engineering for Women",
      location: 'Visakhapatnam',
      duration: '2024 – 2028 (Ongoing)',
      scoreLabel: 'CGPA',
      scoreValue: '8.88 / 10.00',
      statusBadge: 'Ongoing',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Viswa Junior College',
      duration: '2023 – 2025',
      scoreLabel: 'Percentage',
      scoreValue: '97%',
    },
    {
      degree: 'School (ICSE)',
      institution: 'Depaul School',
      duration: '2021 – 2023',
      scoreLabel: 'Percentage',
      scoreValue: '90%',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070F20] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Education
            </h2>
          </div>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-900/60 space-y-8">
          {educationHistory.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#050B18] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-sm shadow-cyan-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <div className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-5 sm:p-6 card-hover-effect">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  {item.statusBadge && (
                    <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono">
                      {item.statusBadge}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 font-medium text-sm sm:text-base mb-3">
                  {item.institution}
                  {item.location && <span className="text-slate-400">, {item.location}</span>}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono">{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-cyan-300 font-mono font-medium ml-auto">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>
                      {item.scoreLabel}: <strong className="text-white">{item.scoreValue}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
