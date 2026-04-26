import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player'; // Import player-nya
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Timer 3 detik biar animasinya sempet kelihatan keren
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // --- LOADING SCREEN DENGAN LOTTIE ---
  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-yellow-200 dark:bg-slate-900 transition-colors duration-300">
        <div className="w-64 h-64 md:w-80 md:h-80">
          <DotLottiePlayer
            src="https://lottie.host/6a8e51b1-4eaa-4bac-bd6d-7f22317b4e94/u5XLk74ox4.lottie"
            autoplay
            loop
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-2xl font-bold text-black dark:text-white mt-4 font-display tracking-widest"
        >
        </motion.h1>
      </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
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