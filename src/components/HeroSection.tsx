import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FEF9C3]">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* FOTO PROFIL ESTETIK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl"
              >
                <img src="/foto.jpeg" alt="Falisha" className="w-full h-full object-cover" />
              </motion.div>

              {/* STIKER MELAYANG */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 bg-white/90 p-3 rounded-2xl shadow-lg"
              >
                <Sparkles className="h-6 w-6 text-yellow-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 text-4xl"
              >
                🌟🌞
              </motion.div>
            </div>
          </motion.div>

          {/* TEKS & TOMBOL */}
          <div className="text-center md:text-left">
            <motion.span className="inline-block px-4 py-2 rounded-full bg-white/50 text-sm font-medium text-yellow-700 mb-6">
              👋 Guten Tag!!
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-900">
              Falisha's <br /> <span className="text-yellow-500">Portofolio</span> 
            </h1>
            <p className="text-lg text-yellow-800/80 mb-8 max-w-lg">
              Fokus membangun pengalaman digital yang seru dan interaktif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
              <Button size="lg" className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-white px-8">
                Liat Projects
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-yellow-500 text-yellow-700 px-8 flex gap-2 group">
                Hubungi Saya <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* SOSIAL MEDIA */}
            <div className="flex gap-6 justify-center md:justify-start">
              {[Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3 }} className="p-3 rounded-full bg-white/80 shadow-sm hover:shadow-yellow-200 transition-all">
                  <Icon className="h-5 w-5 text-yellow-700" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/50 animate-bounce"
      >
        <ArrowDown className="h-5 w-5 text-yellow-600" />
      </motion.button>
    </section>
  );
}