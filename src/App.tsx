import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false); // Biar Navbar gak error

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#b9ff66]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black mb-4"></div>
        <h1 className="text-2xl font-bold animate-pulse text-black">Loading Portofolio Falisha...</h1>
      </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Navbar sekarang dapet data isDark & toggleTheme biar gak error lagi */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;