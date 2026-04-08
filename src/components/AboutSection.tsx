import { motion } from 'framer-motion';
import { BookCheck, BookOpenIcon, Code2, MedalIcon, PenLineIcon, Rocket,} from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: BookOpenIcon, value: '50+', label: 'Tugas Selesai' },
    { icon: MedalIcon, value: '7+', label: 'Prestasi Akademik' },
    { icon: PenLineIcon, value: '50+', label: 'Tinta Pulpen' },
    { icon: Rocket, value: '9+', label: 'Jejak Rekam Akademik' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👩‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">9+ Tahun</p>
                <p className="text-sm text-muted-foreground">Rekam jejak akademik</p>
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
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Profil singkat
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Perkenalkan nama saya Falisha Shamim Izza, saya lahir di Bireun pada tanggal 17 Juli 2010, 
              saat ini saya berdomisili di Lueng Bata tepatnya di Kota Banda Aceh, dan saya sedang 
              menempuh jenjang pendidikan di MAN 1 Model Banda Aceh.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Saya percaya bahwa berbagi ilmu adalah cara terbaik untuk terus belajar dan berkembang.
              Bagi saya, belajar koding itu menantang tapi seru, dan saya adalh pribadi yang santai 
              tapi tetap bertanggung jawab untuk menyelesaikan setiap tugas tetap waktu.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
