import { motion } from 'framer-motion';
import { Settings, Plus, MessageSquare, Compass, Link2, Users } from 'lucide-react';

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
  hidden: { opacity: 0, x: 50, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: -50, filter: 'blur(12px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: delay, ease: [0.25, 1, 0.5, 1] }
  })
};

export default function Contact() {
  
  const handleContactMe = () => {
    window.open("https://instagram.com/az.saputra_", "_blank");
  };

  const handleFollowMe = () => {
    window.open("https://instagram.com/az.saputra_", "_blank");
  };

  return (
    <section 
      id="contact"
      className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-6 overflow-hidden font-syne select-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      
      <div className="w-full max-w-7xl mx-auto text-center pt-12 pb-12 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeDownVariants}
          className="text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase font-mono mb-2"
        >
          // CONNECT WITH ME
        </motion.div>
        
        <motion.h2 
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeDownVariants}
          className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight text-white uppercase leading-none"
        >
          Get In Touch
        </motion.h2>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center z-10 pb-16">
        <motion.div
            custom={1.0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRightVariants}
          className="w-full max-w-[420px] mx-auto bg-black border border-[#262626] rounded-2xl p-5 flex flex-col gap-5 font-sans shadow-2xl relative group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">az.saputra_</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <Settings size={18} className="text-white cursor-pointer hover:rotate-45 transition-transform duration-300" />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                <div className="w-full h-full rounded-full bg-black p-[2px]">
                  <img 
                    src="src/assets/pfp.jpg" 
                    alt="Instagram Profile Pic" 
                    className="w-full h-full object-cover rounded-full filter grayscale"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -left-2 bg-[#121212] border border-[#262626] px-2 py-1 rounded-md text-[9px] max-w-[110px] truncate text-neutral-300 flex items-center gap-1 scale-90">
              </div>
            </div>

            <div className="flex gap-6 text-center flex-grow justify-around pr-2">
              <div>
                <div className="text-sm font-bold text-white">3</div>
                <div className="text-xs text-neutral-400">posts</div>
              </div>
              <div>
                <div className="text-sm font-bold text-white">123</div>
                <div className="text-xs text-neutral-400">followers</div>
              </div>
              <div>
                <div className="text-sm font-bold text-white">110</div>
                <div className="text-xs text-neutral-400">following</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-sm leading-tight">
            <span className="font-semibold text-white">Azimas Perwata Saputra</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 font-sans font-medium text-xs">
            <button 
              onClick={handleContactMe}
              className="w-full bg-[#262626] hover:bg-white hover:text-black text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 active:scale-95"
            >
              Contact Me!
            </button>
            <button 
              onClick={handleFollowMe}
              className="w-full bg-[#262626] hover:bg-neutral-800 text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 border border-transparent hover:border-[#404040] active:scale-95"
            >
              Follow Me
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#262626] my-1" />
        </motion.div>

        <motion.div
        custom={1.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeftVariants}
          className="w-full max-w-[420px] mx-auto bg-[#1e1f22] rounded-2xl overflow-hidden shadow-2xl border border-[#2b2d31] font-sans group text-left"
        >
          <div className="w-full h-[105px] bg-[#c29c53] relative transition-colors duration-500 group-hover:bg-[#b08b44]">
            <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-md px-1.5 py-1 flex gap-1.5 items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 filter drop-shadow" title="Nitro Booster" />
              <div className="w-4 h-4 rounded bg-blue-500" title="Active Developer" />
            </div>
          </div>

          <div className="px-4 pb-4 relative">
            <div className="absolute -top-[75px] left-4">
              <div className="w-[84px] h-[84px] rounded-full bg-[#1e1f22] p-1.5 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-black border border-neutral-800">
                  <img 
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300&auto=format&fit=crop" 
                    alt="Discord Avatar Skull Logo" 
                    className="w-full h-full object-cover filter brightness-90 contrast-125"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#1e1f22] p-1">
                  <div className="w-full h-full rounded-full bg-[#047c00]" title="Invis / Offline" />
                </div>
              </div>
            </div>

            <div className="mt-[50px] bg-[#111214] rounded-xl p-3.5 border border-[#2b2d31]">
              
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-tight">mith</span>
                <span className="text-neutral-400 text-xs font-medium font-mono">smithbondz#3638</span>
              </div>

              <div className="w-full h-[1px] bg-[#2b2d31] my-3" />

              <div className="flex flex-col gap-1 text-xs">
                <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase font-mono">GitHub</span>
                <a 
                  href="https://github.com/Lynxx02" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#00a8fc] hover:underline flex items-center gap-1 group/link"
                >
                  <Link2 size={12} className="text-neutral-400 group-hover/link:text-[#00a8fc]" />
                  <span>https://github.com/Lynxx02</span>
                </a>
              </div>

              <div className="flex flex-col gap-1 text-xs mt-3.5">
                <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase font-mono">About Me</span>
                <div className="text-neutral-300 flex items-center gap-1.5 leading-relaxed">
                  <span>📚</span>
                  <span className="italic font-medium">Interesting in many ways</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-[11px] text-neutral-400 font-medium">
                <Users size={12} className="text-neutral-500" />
                <span>Unavailable •</span>
              </div>

              <div className="w-full mt-4 bg-[#2b2d31] border border-transparent group-hover:border-neutral-700 transition-colors rounded-md p-2.5 flex items-center gap-3 text-neutral-500 font-sans text-xs">
                <MessageSquare size={14} className="text-neutral-500 shrink-0" />
                <span className="truncate">Message @mith</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        custom={0.4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        className="z-10 mt-6 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-600 uppercase"
      >
        © 2026 AZIMAS PERWATA SAPUTRA • ALL RIGHTS RESERVED.
      </motion.div>

    </section>
  );
}