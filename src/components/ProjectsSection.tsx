import { motion } from 'framer-motion';
import { Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

const projects = [
  {
    title: 'AI/Machine Learning',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['AI Learning', 'AI', 'AI Machine'],
    images: ['🤖', '👾', '⚙️'], 
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    youtube: '#',
  },
  {
    title: 'Literacy',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Literasi digital', 'Sosial Media', 'Book'],
    images: ['📖', '👩‍💻', '📚'],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    youtube: '#',
  },
  {
    title: 'Motivation',
    description: 'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['Kesehatan Mental', 'Pengembangan Diri', 'tips'],
    images: ['😌', '🕊️', '💡'],
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    youtube: '#',
  },
];

const ProjectImageCarousel = ({ images, color }: { images: string[], color: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group/carousel overflow-hidden rounded-xl mb-4">
      {/* Viewport Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
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

      {/* Navigasi Manual (Hanya muncul saat di-hover) */}
      <button 
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                
                {/* Carousel Gambar di dalam Card */}
                <ProjectImageCarousel images={project.images} color={project.color} />
                
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.github && project.github !== '#' && (
                      <Button variant="outline" size="sm" className="rounded-full mt-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.youtube && project.youtube !== '#' && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}