import React, { useRef } from 'react';
import { Github, Linkedin, ArrowDown, FolderGit2, Mail, Camera, Upload } from 'lucide-react';

interface HeroProps {
  photoUrl: string;
  onPhotoUpload: (file: File) => void;
  onOpenUploadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ photoUrl, onPhotoUpload, onOpenUploadModal }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onPhotoUpload(e.target.files[0]);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050B18] via-[#0A1929] to-[#050B18] tech-grid-pattern overflow-hidden"
    >
      {/* Background Tech Glow / Circuit Accents */}
      <div className="absolute inset-0 circuit-glow pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-600/10 via-blue-700/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Container - Strict layout: Photo top/center -> Name -> Title -> Intro -> Buttons -> Socials */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. MY PHOTO - Prominently at Top/Center with Subtle Blue/Cyan Glow */}
        <div className="relative mb-6 sm:mb-8 group">
          {/* Subtle Ambient Cyan Glow Behind Frame */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-400 opacity-60 blur-md group-hover:opacity-85 transition-opacity duration-300" />
          
          {/* Frame */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800 shadow-2xl shadow-cyan-950/70 overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1929] relative flex items-center justify-center">
              <img
                src={photoUrl}
                alt="Korada Kiranmai"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback safely to svg if file not found
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/kiranmai-photo.svg')) {
                    target.src = '/kiranmai-photo.svg';
                  }
                }}
              />
              
              {/* Subtle hover overlay to upload/change photo */}
              <div
                onClick={onOpenUploadModal}
                className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center cursor-pointer text-white p-2"
                title="Click to upload your photograph"
              >
                <Camera className="w-6 h-6 text-cyan-400 mb-1" />
                <span className="text-[11px] font-medium tracking-wide text-cyan-200">
                  Update Photo
                </span>
              </div>
            </div>
          </div>

          {/* Quick upload trigger pill below photo */}
          <div className="mt-2.5 flex justify-center">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-cyan-950/80 text-cyan-300/80 hover:text-cyan-200 border border-cyan-800/40 transition-colors shadow-sm"
              title="Select your photo from device"
            >
              <Upload className="w-3 h-3 text-cyan-400" />
              <span>Choose Your Photograph</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* 2. NAME */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-2 sm:mb-3">
          KORADA KIRANMAI
        </h1>

        {/* 3. SUBTITLE / TITLE */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-blue-950/50 border border-cyan-800/50 text-cyan-300 shadow-sm shadow-cyan-950/50">
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase font-mono">
            B.TECH CSE STUDENT <span className="text-cyan-500 mx-1.5 font-normal">|</span> ASPIRING SOFTWARE ENGINEER
          </p>
        </div>

        {/* 4. PROFESSIONAL INTRODUCTION */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 px-2">
          “Motivated and detail-oriented CSE 2nd year student with a strong foundation in programming and problem-solving. Passionate about AI, Cloud Computing and emerging technologies.”
        </p>

        {/* 5. BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-cyan-600/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-200" />
            <span>View My Project</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/60 font-medium text-sm sm:text-base shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* 6. SOCIAL PROFILES: GitHub and LinkedIn */}
        <div className="flex items-center justify-center gap-6 text-slate-400">
          <a
            href="https://github.com/kiranmai-cse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-cyan-300 transition-colors group px-3 py-1.5 rounded-md hover:bg-slate-800/40 border border-transparent hover:border-cyan-900/40"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="font-mono">GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="https://linkedin.com/in/korada-kiranmai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-cyan-300 transition-colors group px-3 py-1.5 rounded-md hover:bg-slate-800/40 border border-transparent hover:border-cyan-900/40"
          >
            <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="font-mono">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 hidden md:flex flex-col items-center text-slate-500">
          <span className="text-[11px] uppercase tracking-widest text-slate-500 mb-1 font-mono">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 text-cyan-500 animate-bounce" />
        </div>

      </div>
    </section>
  );
};
