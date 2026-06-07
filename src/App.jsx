import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Hero from './sections/Hero';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const SECTIONS = ['home', 'about', 'portfolio', 'contact'];

const sectionVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(15px)',
    y: 40
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function App() {
  const [showHero, setShowHero] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Pelacak seksi aktif untuk Navigasi (Disesuaikan untuk scroll normal)
  useEffect(() => {
    if (showHero) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Memicu perubahan tepat saat garis tengah seksi melewati tengah layar
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [showHero]);

  return (
    // Mengizinkan main komponen untuk menangani min-h-screen secara global
    <main className="bg-[#0d0d0d] text-white min-h-screen w-full selection:bg-white selection:text-black font-syne">
      
      {/* 1. HERO SCREEN */}
      <AnimatePresence mode="wait">
        {showHero && (
          <motion.div
            key="hero-screen"
            exit={{ opacity: 0, filter: 'blur(15px)', y: -50 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <Hero onComplete={() => setShowHero(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT (Scroll biasa tanpa modifikasi script JS aneh-aneh) */}
      {!showHero && (
        <div className="w-full text-white">
          
          {/* SECTION: HOME */}
          <motion.section
            id="home"
            initial="initial"
            whileInView="visible"
            // once: false membuat animasi terulang kembali saat keluar-masuk viewport alami browser
            // amount: 0.15 animasi terpicu cukup dengan 15% bagian seksi muncul di layar
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionVariants}
            className="w-full min-h-screen flex items-center justify-center" 
          >
            <Home />
          </motion.section>

          {/* SECTION: ABOUT */}
          <motion.section
            id="about"
            initial="initial"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionVariants}
            className="w-full min-h-screen flex items-center justify-center"
          >
            <About />
          </motion.section>

          {/* SECTION: PORTFOLIO
          <motion.section
            id="portfolio"
            initial="initial"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionVariants}
            className="w-full min-h-screen flex items-center justify-center"
          >
            <Portfolio />
          </motion.section> */}

          {/* SECTION: CONTACT */}
          <motion.section
            id="contact"
            initial="initial"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionVariants}
            className="w-full min-h-screen flex items-center justify-center"
          >
            <Contact />
          </motion.section>

        </div>
      )}
    </main>
  );
}