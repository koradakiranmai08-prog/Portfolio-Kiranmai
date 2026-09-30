import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { MicrosoftBadges } from './components/MicrosoftBadges';
import { Achievements } from './components/Achievements';
import { Leadership } from './components/Leadership';
import { Tools } from './components/Tools';
import { Interests } from './components/Interests';
import { PersonalDetails } from './components/PersonalDetails';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoUploaderModal } from './components/PhotoUploaderModal';

export default function App() {
  const [photoUrl, setPhotoUrl] = useState<string>('/kiranmai-photo.svg');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('kiranmai_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        localStorage.setItem('kiranmai_photo', result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveCustomUrl = (newUrl: string) => {
    setPhotoUrl(newUrl);
    localStorage.setItem('kiranmai_photo', newUrl);
  };

  const handleResetPhoto = () => {
    setPhotoUrl('/kiranmai-photo.svg');
    localStorage.removeItem('kiranmai_photo');
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onUploadClick={() => setIsUploadModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          photoUrl={photoUrl}
          onPhotoUpload={handlePhotoUpload}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* About Me */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Technical Skills */}
        <Skills />

        {/* Project */}
        <Project />

        {/* Microsoft Learn Badges */}
        <MicrosoftBadges />

        {/* Achievements & Certifications */}
        <Achievements />

        {/* Leadership Experience */}
        <Leadership />

        {/* Tools & Technologies */}
        <Tools />

        {/* Interests */}
        <Interests />

        {/* Personal Details */}
        <PersonalDetails />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Photo Upload & Adjust Modal */}
      <PhotoUploaderModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        currentPhoto={photoUrl}
        onSavePhoto={handleSaveCustomUrl}
        onResetPhoto={handleResetPhoto}
      />
    </div>
  );
}
