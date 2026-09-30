import React from 'react';
import { UserCheck, Calendar, Languages, Flag } from 'lucide-react';

export const PersonalDetails: React.FC = () => {
  const details = [
    {
      label: 'Date of Birth',
      value: '10-04-2008',
      icon: Calendar,
    },
    {
      label: 'Languages Known',
      value: 'English, Telugu',
      icon: Languages,
    },
    {
      label: 'Nationality',
      value: 'Indian',
      icon: Flag,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070F20] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Background Info
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
              Personal Details
            </h2>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-5 card-hover-effect flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center shrink-0 text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-mono">
                    {item.label}
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
                    {item.value}
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
