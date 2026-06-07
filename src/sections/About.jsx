import { motion } from 'framer-motion';
import { Download, TicketPlus, ArrowUpRight, Code2, Award, Globe } from 'lucide-react';

const fadeUpBlurVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(12px)'
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const fadeLeftBlurVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    filter: 'blur(12px)',
  },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const fadeRightsBlurVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    filter: 'blur(12px)',
  },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const fadeInRightBlurVariants = {
  hidden: {
    opacity: 0,
    x: 30,
    filter: 'blur(16px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delay: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden font-syne select-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.10) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }}
    >

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12 pb-12 z-10">
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 sm:gap-6 w-full">
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlurVariants}
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase font-mono"
          >
            // ABOUT ME
          </motion.div>
          
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlurVariants}
            className="block lg:hidden w-full justify-center my-2"
          >
            <div className="w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-2 border-[#262626] bg-[#111111] relative shadow-2xl">
              <img
                src="/pfp.jpg"
                alt="Azimas Perwata Saputra Profile Mobile"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/5 pointer-events-none" />
            </div>
          </motion.div>

          <div className="flex flex-col leading-[0.85] tracking-tighter uppercase font-dmmono font-[800] text-white text-[38px] xs:text-[46px] sm:text-[64px] md:text-[80px] w-full">
            <motion.span
              custom={0.8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpBlurVariants}
            >
              Azimas
            </motion.span>
            <motion.span
              custom={1.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeftBlurVariants}
              className="text-neutral-400"
            >
              Perwata
            </motion.span>
            <motion.span
              custom={1.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRightsBlurVariants}
            >
              Saputra
            </motion.span>
          </div>

          <motion.p
            custom={1.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlurVariants}
            className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26.6px] tracking-[0.14px] text-neutral-400 max-w-2xl font-sans"
          >
            Saya adalah seorang Pelajar di Sekolah Kejuruan Teknik Komputer & Jaringan dengan Stack Pengembangan Web Full-Stack. Saya memiliki pengalaman dalam mengembangkan berbagai project website dan game yang mengutamakan clean code, functionality, dan user experience yang terbaik. Tertarik dalam berbagai bahasa pemograman dan cara kerja sebuah komputer/software secara mendalam.
          </motion.p>

          <motion.div
            custom={1.8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlurVariants}
            className="w-full max-w-xl border border-[#262626] bg-[#111111]/60 backdrop-blur-sm rounded-[12px] p-4 font-sans italic text-[13px] text-neutral-300 border-l-4 border-l-white"
          >
            "Interested in many ways."
          </motion.div>

          {/* Action Buttons Group */}
          <motion.div
            custom={2.0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlurVariants}
            className="flex flex-wrap gap-4 pt-1"
          >
            <motion.a
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                alert("Create Ticket is Unavailable, Developer is occupied with other works.");
              }}
              whileHover={{ scale: 1.02, backgroundColor: "#d4d4d4" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-black font-mono font-bold text-xs px-6 py-3.5 rounded-[8px] transition-colors"
            >
              <TicketPlus size={14} strokeWidth={2.5} />
              <span>Create a Ticket</span>
            </motion.a>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">

            <motion.div
              custom={2.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpBlurVariants}
              whileHover={{ y: -4, borderColor: "#404040" }}
              className="border border-[#262626] bg-[#111111]/40 rounded-[12px] p-4 flex flex-col justify-between min-h-[105px] h-auto transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-[#1a1a1a] border border-[#262626] rounded-full text-neutral-400">
                  <Code2 size={14} />
                </div>
                <span className="font-mono text-2xl font-black text-white">16+</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[9px] tracking-wider text-neutral-400 uppercase pt-2">
                <span>Projects</span>
                <ArrowUpRight size={10} className="text-neutral-600" />
              </div>
            </motion.div>

            <motion.div
              custom={2.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpBlurVariants}
              whileHover={{ y: -4, borderColor: "#404040" }}
              className="border border-[#262626] bg-[#111111]/40 rounded-[12px] p-4 flex flex-col justify-between min-h-[105px] h-auto transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-[#1a1a1a] border border-[#262626] rounded-full text-neutral-400">
                  <Award size={14} />
                </div>
                <span className="font-mono text-2xl font-black text-white">2+</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[9px] tracking-wider text-neutral-400 uppercase pt-2">
                <span>Certificates</span>
                <ArrowUpRight size={10} className="text-neutral-600" />
              </div>
            </motion.div>

            <motion.div
              custom={2.6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpBlurVariants}
              whileHover={{ y: -4, borderColor: "#404040" }}
              className="border border-[#262626] bg-[#111111]/40 rounded-[12px] p-4 flex flex-col justify-between min-h-[105px] h-auto transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-[#1a1a1a] border border-[#262626] rounded-full text-neutral-400">
                  <Globe size={14} />
                </div>
                <span className="font-mono text-2xl font-black text-white">16+</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[9px] tracking-wider text-neutral-400 uppercase pt-2">
                <span>Completed Works</span>
                <ArrowUpRight size={10} className="text-neutral-600" />
              </div>
            </motion.div>

          </div>

        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInRightBlurVariants}
          className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end w-full relative group"
        >

          <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-2 border-[#262626] bg-[#111111] relative shadow-2xl transition-colors duration-500 group-hover:border-neutral-500">
            <img
              src="/pfp.jpg"
              alt="Azimas Perwata Saputra Profile Desktop"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/5 pointer-events-none" />
          </div>


          <div className="absolute w-[440px] h-[440px] border border-dashed border-neutral-800 rounded-full -z-10 pointer-events-none group-hover:border-neutral-700 transition-colors duration-500" />
        </motion.div>

      </div>
    </section>
  );
}
