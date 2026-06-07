import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Globe } from 'lucide-react';


export default function Hero({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] text-[#ffffff] p-sm font-syne overflow-hidden">

      <div className="flex items-center justify-center gap-xs z-10 mb-md">
        {[Code2, User, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
            className="border border-[#374151] rounded-full p-2.5 flex items-center justify-center bg-transparent text-white"
          >
            <Icon size={18} strokeWidth={2} />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 overflow-hidden text-[28px] xs:text-[34px] sm:text-[52px] md:text-[64px] font-extrabold tracking-tight leading-none lowercase">
        <motion.span
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
          className="text-white capitalize"
        >
          Welcome
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 3.0, ease: "easeOut" }}
          className="text-white"
        >
          to my
        </motion.span>
      </div>

      <div className="overflow-hidden w-full flex justify-center mt-1 sm:mt-3 text-[28px] xs:text-[34px] sm:text-[52px] md:text-[64px] font-extrabold tracking-tight leading-none lowercase">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 4.0, ease: "easeOut" }}
          className="font-[700] text-white capitalize"
        >
          Portfolio Website
        </motion.h1>
      </div>

      <div className="mt-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 5.0, ease: "easeOut" }}
          className="border border-[#374151] rounded-full px-5 py-5.5 bg-[#0d0d0d] transition-colors duration-300 hover:border-white"
        >
          <span className="text-[13px] font-normal tracking-[1.14px] text-neutral-400 font-mono">
            mith.dev
          </span>
        </motion.div>
      </div>

    </section>
  );
}