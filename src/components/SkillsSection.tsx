import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'Indonesia', level: 85 },
    { name: 'Inggris', level: 90 },
    { name: 'Arab', level: 67 },
    { name: 'Jerman', level: 50 },
  ],
  backend: [
    { name: 'Biologi', level: 97 },
    { name: 'Kimia', level: 50 },
    { name: 'Fisika', level: 73 },
    { name: 'Matematika', level: 82 },
  ],
  tools: [
    { name: 'Sosiologi', level: 90 },
    { name: 'Sejarah', level: 80 },
    { name: 'Ekonomi', level: 72 },
    { name: 'Geografi', level: 91 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-[#422006]">{name}</span>
        <span className="text-sm font-bold text-[#EAB308]">{level}%</span>
      </div>
      <div className="h-2 bg-[#FEF08A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-[#EAB308]" // Warna bar jadi kuning solid
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#FEF9C3]"> {/* BG Kuning Soft */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EAB308] font-bold mb-2 block tracking-widest uppercase text-sm">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#422006]">
            Kemampuan Akademis
          </h2>
          <div className="w-20 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Bahasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/60 backdrop-blur-md border border-[#FEF08A] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FEF08A]">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#422006]">Bahasa</h3>
            </div>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-white/60 backdrop-blur-md border border-[#FEF08A] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FEF08A]">
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#422006]">IPA</h3>
            </div>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/60 backdrop-blur-md border border-[#FEF08A] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FEF08A]">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#422006]">IPS</h3>
            </div>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}