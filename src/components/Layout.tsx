import React, { ReactNode, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Users, 
  Code, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

// --- Components ---

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Cara Kerja', path: '/methodology' },
    { name: 'Karir', path: '/services' }, // Pointing to services for now as it includes E-learning
    { name: 'Hubungi Kami', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-emerald-custom font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-navy">RAMUWANI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-emerald-custom ${
                  isActive ? 'text-emerald-custom' : 'text-navy/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-navy/90 transition-all"
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-navy/70"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-navy text-white px-6 py-3 rounded-xl text-center font-semibold"
          >
            Konsultasi Gratis
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-emerald-custom rounded-lg flex items-center justify-center">
              <span className="text-navy font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">RAMUWANI</span>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Menjadi mitra transformasi digital terdepan di Indonesia yang menginspirasi kesejahteraan kolektif melalui inovasi teknologi.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Layanan H.O.P.E</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Headhunter</li>
            <li>Outsource</li>
            <li>Project</li>
            <li>E-learning</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Kontak</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-emerald-custom" />
              <span>info@ramuwani.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-emerald-custom" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PT Ramuwani. Sejahtera Bersama.
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1.5 bg-emerald-custom mt-6 rounded-full" />
  </div>
);

// --- Pages ---

export const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-custom/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-mint text-emerald-custom rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Transformasi Digital Terdepan
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-8">
              Meramu Teknologi, <br />
              <span className="text-emerald-custom">Sejahtera Bersama.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Menjadi mitra transformasi digital terdepan di Indonesia yang menginspirasi kesejahteraan kolektif melalui inovasi teknologi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center group">
                Jadwalkan Konsultasi Gratis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-navy hover:text-white transition-all">
                Dapatkan Proposal
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-navy">30%</div>
                <div className="text-sm text-gray-500">Efisiensi Operasional</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-navy">100+</div>
                <div className="text-sm text-gray-500">Talenta IT Terbaik</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tech-team/800/1000" 
                alt="Tech Team Collaboration" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl z-20 max-w-xs">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-custom rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div className="font-bold text-navy">Hasil Terukur</div>
              </div>
              <p className="text-sm text-gray-600">
                "Pengurangan waktu peluncuran produk hingga 30% untuk klien B2B kami."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (H.O.P.E) */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Pilar Layanan H.O.P.E" 
            subtitle="Solusi terintegrasi untuk kebutuhan teknologi dan sumber daya manusia perusahaan Anda."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Search className="text-emerald-custom" size={32} />, 
                title: 'Headhunter', 
                desc: 'Rekrutmen talenta IT berkualitas yang cocok secara teknis dan budaya.',
                letter: 'H'
              },
              { 
                icon: <Users className="text-emerald-custom" size={32} />, 
                title: 'Outsource', 
                desc: 'Alih daya tenaga ahli IT yang fleksibel dan terintegrasi penuh.',
                letter: 'O'
              },
              { 
                icon: <Code className="text-emerald-custom" size={32} />, 
                title: 'Project', 
                desc: 'Pengembangan perangkat lunak end-to-end dengan fokus hasil terukur.',
                letter: 'P'
              },
              { 
                icon: <GraduationCap className="text-emerald-custom" size={32} />, 
                title: 'E-learning', 
                desc: 'Platform digital untuk upskilling berkelanjutan bagi tim Anda.',
                letter: 'E'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-6xl font-black text-gray-50 group-hover:text-emerald-custom/10 transition-colors">
                  {item.letter}
                </div>
                <div className="mb-6 relative z-10">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-navy relative z-10">{item.title}</h3>
                <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">{item.desc}</p>
                <Link to="/services" className="text-emerald-custom font-bold flex items-center group-hover:translate-x-2 transition-transform relative z-10">
                  Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/philosophy/800/600" 
              alt="Philosophy" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="Filosofi Ramuwani" 
              subtitle="Keberanian berinovasi dan menjaga integritas untuk kesejahteraan bersama."
            />
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-navy mb-3">Ramu (Meramu)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Meracik talenta terbaik, teknologi terkini, dan strategi bisnis yang tepat untuk menciptakan solusi yang berdampak nyata.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-3">Wani (Keberanian)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Memiliki keberanian untuk berinovasi, menghadapi tantangan, dan selalu menjaga integritas dalam setiap langkah profesional kami.
                </p>
              </div>
              <Link to="/about" className="inline-block bg-navy text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all">
                Selengkapnya Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-custom/5 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Siap Bertransformasi Bersama Kami?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Unduh Company Profile kami untuk mempelajari bagaimana kami membantu bisnis Anda tumbuh lebih cepat dan efisien.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-custom text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-custom/90 transition-all shadow-lg">
              Unduh Company Profile (PDF)
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-navy transition-all">
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Tentang Kami" 
            subtitle="Membangun masa depan digital dengan integritas dan sinergi."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { title: 'Prosperity', desc: 'Menciptakan kesejahteraan bagi klien, talenta, dan masyarakat.' },
              { title: 'Synergy', desc: 'Berkolaborasi secara harmonis untuk hasil yang luar biasa.' },
              { title: 'Integrity', desc: 'Menjaga kejujuran dan standar etika tertinggi dalam bisnis.' }
            ].map((val) => (
              <div key={val.title} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-emerald-custom mb-4">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-bold text-navy mb-8">Visi Kami</h3>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "Menjadi mitra transformasi digital terdepan di Indonesia yang menginspirasi kesejahteraan kolektif melalui inovasi teknologi."
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-navy mb-8">Misi Kami</h3>
              <ul className="space-y-6">
                {[
                  'Menyediakan solusi teknologi inovatif yang mendorong efisiensi.',
                  'Menghubungkan talenta IT terbaik dengan peluang yang tepat.',
                  'Membangun ekosistem digital yang berkelanjutan.',
                  'Memberikan nilai tambah yang konsisten bagi seluruh pemangku kepentingan.'
                ].map((misi, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-emerald-custom rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-gray-600 text-lg">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ServicesPage = () => {
  const services = [
    {
      id: 'headhunter',
      title: 'Headhunter',
      desc: 'Kami membantu perusahaan menemukan talenta IT kelas dunia yang tidak hanya memiliki keahlian teknis yang mumpuni, tetapi juga memiliki kecocokan budaya dengan organisasi Anda.',
      features: ['Technical Assessment', 'Cultural Fit Screening', 'Executive Search', 'Talent Mapping']
    },
    {
      id: 'outsource',
      title: 'Outsource',
      desc: 'Solusi tenaga kerja IT yang fleksibel untuk membantu Anda menskalakan tim dengan cepat tanpa beban administratif rekrutmen permanen.',
      features: ['Flexible Scaling', 'Managed Services', 'On-site/Remote Options', 'Admin & Payroll Management']
    },
    {
      id: 'project',
      title: 'Project',
      desc: 'Pengembangan perangkat lunak kustom mulai dari aplikasi mobile, web, hingga sistem enterprise yang kompleks dengan metodologi agile.',
      features: ['End-to-end Development', 'UI/UX Design', 'Quality Assurance', 'Post-launch Support']
    },
    {
      id: 'elearning',
      title: 'E-learning',
      desc: 'Platform pembelajaran digital yang dirancang untuk meningkatkan kompetensi tim IT Anda secara berkelanjutan.',
      features: ['Custom Curriculum', 'Interactive Platform', 'Progress Tracking', 'Certification']
    }
  ];

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Layanan Utama H.O.P.E" 
            subtitle="Solusi komprehensif untuk setiap tahap perjalanan digital bisnis Anda."
          />
          
          <div className="space-y-32 mt-20">
            {services.map((s, idx) => (
              <div key={s.id} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="text-emerald-custom font-black text-8xl opacity-10 mb-[-40px]">{s.title[0]}</div>
                  <h3 className="text-4xl font-bold text-navy mb-6">{s.title}</h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center space-x-3 text-navy font-medium">
                        <CheckCircle2 className="text-emerald-custom" size={20} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img 
                    src={`https://picsum.photos/seed/${s.id}/800/500`} 
                    alt={s.title} 
                    className="rounded-3xl shadow-xl w-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const MethodologyPage = () => {
  const steps = [
    { title: 'Discover', desc: 'Gathering requirements & audit mendalam terhadap kebutuhan bisnis Anda.' },
    { title: 'Design', desc: 'Architecture & prototyping untuk memvisualisasikan solusi sebelum pengembangan.' },
    { title: 'Develop', desc: 'Iterative sprints & builds menggunakan teknologi terkini dan standar kualitas tinggi.' },
    { title: 'Deploy & Support', desc: 'Operations & knowledge transfer untuk memastikan sistem berjalan lancar.' }
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Cara Kami Bekerja" 
            subtitle="Proses terstruktur untuk mengurangi risiko dan memastikan hasil yang maksimal."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-emerald-custom/30 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-emerald-custom rounded-2xl flex items-center justify-center text-navy text-3xl font-bold mb-8 shadow-lg shadow-emerald-custom/20">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title="Hubungi Kami" 
              subtitle="Mari diskusikan bagaimana kami dapat membantu transformasi digital perusahaan Anda."
            />
            
            <div className="space-y-10 mt-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center text-emerald-custom flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Email</h4>
                  <p className="text-gray-600">info@ramuwani.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center text-emerald-custom flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Telepon / WA</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center text-emerald-custom flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Kantor</h4>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h4 className="text-lg font-bold text-navy mb-2">Garansi Respons</h4>
              <p className="text-gray-600">
                Kami akan menyiapkan pertemuan awal dalam <span className="text-emerald-custom font-bold">3-5 hari kerja</span>.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Nama Lengkap</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Email Perusahaan</label>
                  <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom/20 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Nomor WhatsApp</label>
                <input type="tel" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom/20 transition-all" placeholder="+62 812..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Kebutuhan Layanan</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom/20 transition-all appearance-none">
                  <option>Pilih Layanan H.O.P.E</option>
                  <option>Headhunter</option>
                  <option>Outsource</option>
                  <option>Project</option>
                  <option>E-learning</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Pesan</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom/20 transition-all" placeholder="Ceritakan kebutuhan Anda..." />
              </div>

              <button type="submit" className="w-full bg-navy text-white py-5 rounded-xl font-bold text-lg hover:bg-navy/90 transition-all shadow-lg">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
