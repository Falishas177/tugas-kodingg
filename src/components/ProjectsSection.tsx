import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Data Projects - Tetap dengan data Falisha
const projects = [
  {
    title: 'AI/Machine Learning',
    description: 'Eksplorasi teknologi masa depan melalui kecerdasan buatan untuk solusi cerdas.',
    tags: ['AI Learning', 'AI', 'AI Machine'],
    images: ['🤖', '👾', '⚙️'], 
    color: 'from-[#FDE047]/30 to-[#EAB308]/30', // Gradasi Kuning
    github: '#',
    youtube: '#',
  },
  {
    title: 'Literacy',
    description: 'Meningkatkan minat baca dan wawasan melalui platform digital yang interaktif.',
    tags: ['Literasi digital', 'Sosial Media', 'Book'],
    images: ['📖', '👩‍💻', '📚'],
    color: 'from-[#FEF08A]/40 to-[#FDE047]/40', // Gradasi Kuning
    github: '#',
    youtube: '#',
  },
  {
    title: 'Motivation',
    description: 'Berbagi inspirasi dan tips pengembangan diri untuk hidup yang lebih positif.',
    tags: ['Kesehatan Mental', 'Pengembangan Diri', 'tips'],
    images: ['😌', '🕊️', '💡'],
    color: 'from-[#EAB308]/20 to-[#FDE047]/20', // Gradasi Kuning
    github: '#',
    youtube: '#',
  },
];

const ProjectImageCarousel = ({ images, color }: { images: string[], color: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: 'trimSnaps' }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group/carousel overflow-hidden rounded-xl mb-4 touch-pan-y border border-[#FEF08A]">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`flex-[0_0_100%] aspect-video flex items-center justify-center bg-gradient-to-br ${color} text-6xl select-none`}
            >
              {img}
            </div>
          ))}
        </div>
      </div>

      <button onClick={(e) => { e.preventDefault(); scrollPrev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-[#FDE047] backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300">
        <ChevronLeft className="h-4 w-4 text-[#422006]" />
      </button>

      <button onClick={(e) => { e.preventDefault(); scrollNext(); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-[#FDE047] backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300">
        <ChevronRight className="h-4 w-4 text-[#422006]" />
      </button>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#FEF9C3]"> {/* BG Kuning Soft */}
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EAB308] font-bold mb-2 block tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#422006]">
            Projects & Karya
          </h2>
          <div className="w-20 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
        </motion.div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* EFEK SINAR KUNING (GLOW) DI BELAKANG KOTAK */}
              <div className="absolute -inset-1 bg-[#FDE047] rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full p-6 bg-white border border-[#FEF08A] rounded-3xl shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                
                <ProjectImageCarousel images={project.images} color={project.color} />
                
                <div className="space-y-3 flex-grow text-center lg:text-left">
                  <h3 className="font-display text-xl font-bold text-[#422006] group-hover:text-[#EAB308] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[#422006]/70 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-[#FEF9C3] text-[#854D0E] border border-[#FEF08A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Kuning Style */}
                <div className="flex gap-3 pt-6">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full border-[#FEF08A] hover:bg-[#FEF9C3] text-[#422006]" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-2 text-[#EAB308]" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 rounded-full bg-[#EAB308] hover:bg-[#FDE047] text-white shadow-md shadow-[#EAB308]/20" asChild>
                      <a href={project.youtube}>
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </a>
                    </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}