import React from 'react';
import { Cpu, HardDrive, Zap, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Project: React.FC = () => {
  const techUsed = [
    'Arduino UNO',
    'LDR Sensor',
    'PIR Sensor',
    'LED',
    'Relay Module',
    'Power Supply',
    'Embedded C',
  ];

  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070F20] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Project
            </h2>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-[#0A1929] border border-cyan-800/50 rounded-2xl p-6 sm:p-8 shadow-xl shadow-cyan-950/40 relative overflow-hidden">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badges / Category */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-700/60 font-mono">
              <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
              Hardware Project
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-950/80 text-blue-300 border border-blue-800/50 font-mono">
              IoT & Embedded Systems
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-4 tracking-tight">
            SMART STREET LIGHTS USING IoT
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            “Designed and developed a complete hardware based smart street lighting system using sensors and microcontrollers. The system automatically adjusts brightness based on motion detection and ambient light intensity to save energy.”
          </p>

          {/* Hardware project note banner */}
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-200 text-xs sm:text-sm font-medium mb-6 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>This is a complete hardware based project.</span>
          </div>

          {/* Tech Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold mb-3">
              Technologies & Components Used:
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {techUsed.map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070F20] border border-cyan-900/60 text-slate-200 text-xs sm:text-sm font-medium hover:border-cyan-700/80 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
