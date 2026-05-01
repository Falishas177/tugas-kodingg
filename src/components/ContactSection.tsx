import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100, 'Nama terlalu panjang'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email terlalu panjang'),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200, 'Subjek terlalu panjang'),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000, 'Pesan terlalu panjang'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shamimfalisha1720@gmail.com',
    href: 'mailto:shamimfalisha1720@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 812 6901 5641',
    href: 'tel:+6281269015641',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih telah menghubungi saya. Saya akan membalas secepatnya.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FEF9C3]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EAB308] font-bold mb-2 block tracking-widest uppercase text-sm">Kontak</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#422006]">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-[#422006]">
                Mari Berkolaborasi!
              </h3>
              <p className="text-[#422006]/70 leading-relaxed">
                Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk 
                menghubungi saya. Saya selalu terbuka untuk diskusi tentang project 
                baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group block"
                >
                  {/* Efek Sinar di Kartu Info */}
                  <div className="absolute -inset-0.5 bg-[#FDE047] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  
                  <div className="relative flex items-center gap-4 p-4 bg-white border border-[#FEF08A] rounded-xl group-hover:shadow-md transition-all">
                    <div className="p-3 rounded-lg bg-[#FEF9C3] group-hover:bg-[#FDE047] transition-colors">
                      <info.icon className="h-5 w-5 text-[#EAB308]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#EAB308] uppercase tracking-wider">{info.label}</p>
                      <p className="font-medium text-[#422006]">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Efek Sinar Kuning di Belakang Form */}
            <div className="absolute -inset-1.5 bg-[#FDE047] rounded-[2rem] blur-lg opacity-0 group-hover:opacity-40 transition duration-500"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6 p-8 bg-white border border-[#FEF08A] rounded-3xl shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#422006]">Nama</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className={`rounded-xl border-[#FEF08A] focus:ring-[#EAB308] ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#422006]">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={`rounded-xl border-[#FEF08A] focus:ring-[#EAB308] ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-[#422006]">Subjek</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subjek pesan"
                  className={`rounded-xl border-[#FEF08A] focus:ring-[#EAB308] ${errors.subject ? 'border-destructive' : ''}`}
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#422006]">Pesan</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda..."
                  rows={5}
                  className={`rounded-2xl border-[#FEF08A] focus:ring-[#EAB308] ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-[#EAB308] hover:bg-[#FDE047] text-white shadow-lg shadow-[#EAB308]/20 transition-all active:scale-95"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}