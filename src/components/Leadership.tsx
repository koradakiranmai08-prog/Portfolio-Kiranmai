import React from 'react';
import { Users, Award, Shield } from 'lucide-react';

export const Leadership: React.FC = () => {
  const leadershipRoles = [
    {
      title: 'Class Representative (1st Year – 2nd Semester)',
      description: '“Acted as a bridge between faculty and students and coordinated class activities.”',
      roleType: 'Academic Leadership',
    },
    {
      title: 'Hackathon Team Lead',
      description: '“Led and motivated a team to ideate, design and develop a project within the deadline.”',
      roleType: 'Technical Leadership',
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Responsibility & Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Leadership Experience
            </h2>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-6 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/70 border border-cyan-800/60 px-2.5 py-0.5 rounded-full font-semibold">
                    {role.roleType}
                  </span>
                  <Shield className="w-4 h-4 text-cyan-500/70" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3 leading-snug">
                  {role.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic border-l-2 border-cyan-500/80 pl-3">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
