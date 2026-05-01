import { motion } from 'framer-motion';
import { BookOpenIcon, MapPin, MapIcon, Palette, Quote } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: BookOpenIcon, value: 'X-4', label: 'Kelas di MAN 1' },
    { icon: MapPin, value: 'Aceh', label: 'Tempat Tinggal' },
    { icon: MapIcon, value: 'Eksplor', label: 'Suka Jalan-Jalan' },
    { icon: Palette, value: 'Art', label: 'Hobi Menggambar' }, // Cita-cita diganti Hobi Menggambar
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FEF9C3]"> 
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EAB308] font-bold mb-2 block tracking-widest uppercase text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#EAB308] to-[#854D0E] bg-clip-text text-transparent">
            Semangat Dalam Belajar
          </h2>
          <div className="w-16 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden border-2 border-[#FEF08A] bg-white shadow-xl group-hover:rotate-2 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-[#FEF9C3] to-[#FDE047] flex items-center justify-center">
                  <span className="text-9xl">🌻</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-6 bg-white/90 backdrop-blur-md border border-[#FEF08A] rounded-3xl shadow-lg text-center">
                <p className="font-display font-bold text-3xl text-[#EAB308]">2010</p>
                <p className="text-xs font-bold text-[#422006]/60 uppercase tracking-tighter text-center">Tahun Lahir</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#422006]">
                Mimpi Besar & Semangat Belajar
              </h3>
              <p className="text-[#422006]/80 leading-relaxed">
                Haii, aku <strong>Falisha Shamim Izza</strong>. Lahir pada 17 Juli 2010 dan saat ini bersekolah di MAN 1 Banda Aceh, kelas 10. 
                Aku adalah tipe orang yang suka menjelajah—jalan-jalan bukan sekadar hobi, tapi caraku menemukan inspirasi dan pengalaman baru.
              </p>
            </div>

            <div className="p-6 bg-white border-l-4 border-[#EAB308] rounded-r-2xl shadow-sm italic text-[#422006] relative">
              <Quote className="absolute top-2 right-2 text-[#EAB308]/20 h-10 w-10" />
              "Dengan semangat belajar dan mimpi yang terus tumbuh, aku ingin menjadi seorang pengusaha sukses yang bisa menciptakan peluang dan membawa perubahan." 🌞
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white border border-[#FEF08A] rounded-2xl text-center hover:shadow-md transition-all duration-300 group"
                >
                  <stat.icon className="h-6 w-6 text-[#EAB308] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-xl font-bold text-[#422006]">{stat.value}</p>
                  <p className="text-[10px] uppercase font-bold text-[#422006]/60 tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}