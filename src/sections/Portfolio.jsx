import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Award, Layers } from 'lucide-react';

import reactIcon from '../assets/logo/react.svg';
import typescriptIcon from '../assets/logo/typescript.svg';
import tailwindIcon from '../assets/logo/tailwindcss.svg';
import htmlIcon from '../assets/logo/html5.svg';
import cssIcon from '../assets/logo/css.svg';
import phpIcon from '../assets/logo/php.svg';
import laravelIcon from '../assets/logo/laravel.svg';
import nextjsIcon from '../assets/logo/nextjs_icon_dark.svg';
import javascriptIcon from '../assets/logo/javascript.svg';
import mysqlIcon from '../assets/logo/mysql.svg';

// =========================================================================
// VARIANT ANIMASI & GAUSSIAN MOTION BLUR EFFECT
// =========================================================================
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

const fadeDownVariants = {
  hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: 40, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

// =========================================================================
// MOCK DATA PROJECTS & CERTIFICATES
// =========================================================================
const projectsData = [
  {
    id: 1,
    title: 'Project Portofolio',
    desc: 'Portofolio adalah kumpulan dokumen, karya, proyek, atau pencapaian terbaik seseorang yang disusun secara...',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    link: null
  },
  {
    id: 2,
    title: 'Test',
    desc: 'y',
    img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop',
    link: null
  }
];

const certificatesData = [
  {
    id: 1,
    title: 'SERTIFIKAT PKL PT CAKRAWALA GLOBAL YAKSA',
    img: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'tes',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop'
  }
];

// =========================================================================
// DATA TECH STACK
// =========================================================================
const techStackData = [
  { name: 'React.js', icon: reactIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'MySQL', icon: mysqlIcon }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section 
      id="portfolio"
      className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col items-center justify-start p-6 overflow-hidden font-syne select-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      
      <div className="w-full max-w-7xl mx-auto text-center pt-20 pb-8 z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeDownVariants}
          className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight text-white uppercase"
        >
          Portfolio Showcase
        </motion.h2>
        
        <motion.p 
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeDownVariants}
          className="text-neutral-400 text-xs sm:text-sm font-mono mt-3 max-w-2xl mx-auto tracking-wide"
        >
          Explore my journey through projects, certifications, and technical expertise.
        </motion.p>
      </div>

      <motion.div 
        custom={1.0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        className="z-20 w-full max-w-2xl border border-[#262626] rounded-full p-1.5 bg-[#111111]/80 backdrop-blur-md flex items-center justify-between mb-12 font-mono text-xs font-bold"
      >
        {[
          { id: 'projects', label: 'Projects', icon: <Code2 size={12} /> },
          { id: 'certificates', label: 'Certificates', icon: <Award size={12} /> },
          { id: 'tech-stack', label: 'Tech Stack', icon: <Layers size={12} /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative flex-1 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 z-10 text-neutral-400 hover:text-white"
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#262626] rounded-full -z-10 border border-[#404040]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`${activeTab === tab.id ? 'text-white' : ''}`}>{tab.icon}</span>
            <span className={`${activeTab === tab.id ? 'text-white' : ''}`}>{tab.label}</span>
          </button>
        ))}
      </motion.div>

      <div className="w-full max-w-7xl mx-auto z-10 pb-20 flex-grow">
        <AnimatePresence mode="wait">
          
          {activeTab === 'projects' && (
            <motion.div 
              key="projects"
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.id}
                  custom={idx * 1.15}
                  variants={idx % 2 === 0 ? fadeLeftVariants : fadeRightVariants}
                  whileHover={{ y: -6, borderColor: '#404040' }}
                  className="border border-[#1f1f1f] bg-[#111111]/40 rounded-[16px] p-4 flex flex-col justify-between group transition-colors duration-300"
                >
                  <div className="w-full h-[180px] bg-neutral-900 rounded-[12px] overflow-hidden border border-[#262626] relative">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight mt-4 text-white">{project.title}</h3>
                  <p className="text-neutral-400 font-sans text-xs mt-1.5 leading-relaxed flex-grow">{project.desc}</p>
                  
                  <div className="w-full border-t border-[#1f1f1f] mt-4 pt-3 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-neutral-500 uppercase">{project.link ? 'Active Project' : 'No Link'}</span>
                    <button className="flex items-center gap-1 bg-[#1c1c1c] hover:bg-white hover:text-black border border-[#2d2d2d] text-neutral-300 px-3 py-1.5 rounded-full transition-colors duration-300">
                      <span>Details</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div 
              key="certificates"
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificatesData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  custom={idx * 0.15}
                  variants={fadeUpVariants}
                  whileHover={{ y: -6, borderColor: '#404040' }}
                  className="border border-[#1f1f1f] bg-[#111111]/40 rounded-[16px] p-4 flex flex-col transition-colors duration-300 group"
                >
                  <div className="w-full h-[200px] bg-white rounded-[12px] overflow-hidden border border-neutral-300 relative flex items-center justify-center">
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover filter contrast-125 brightness-95" />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <h3 className="text-xs font-bold font-mono tracking-wide uppercase mt-4 text-neutral-300 leading-tight group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tech-stack' && (
            <motion.div 
              key="tech-stack"
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {techStackData.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  custom={idx * 0.08}
                  variants={idx % 2 === 0 ? fadeLeftVariants : fadeUpVariants}
                  whileHover={{ y: -5, borderColor: '#404040', backgroundColor: '#141414' }}
                  className="border border-[#1f1f1f] bg-[#111111]/30 rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 text-center h-[140px] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center select-none">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} logo`} 
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <span className="font-mono text-xs font-bold tracking-wider text-neutral-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}