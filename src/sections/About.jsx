import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';
import { TicketPlus, ArrowUpRight, Code2, Award, Globe } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const STATS = [
  { icon: Code2, value: 16, suffix: '+', label: 'Projects' },
  { icon: Award, value: 2, suffix: '+', label: 'Certificates' },
  { icon: Globe, value: 16, suffix: '+', label: 'Completed Works' },
];

/* ------------------------------------------------------------------ */
/*  Motion – one stagger for the whole section                         */
/* ------------------------------------------------------------------ */
const EASE = [0.25, 1, 0.5, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

const photoReveal = {
  hidden: { opacity: 0, scale: 0.88, filter: 'blur(16px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: EASE } },
};

/* ------------------------------------------------------------------ */
/*  Count-up number (plays once when the card scrolls into view)       */
/* ------------------------------------------------------------------ */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat card                                                          */
/* ------------------------------------------------------------------ */
function StatCard({ icon: Icon, value, suffix, label }) {
  const ref = useRef(null);

  // cursor-following spotlight
  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      onMouseMove={handleMove}
      className="group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-2xl border border-[#262626] bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-5 transition-colors duration-300 hover:border-neutral-500 sm:min-h-[210px] sm:p-6"
    >
      {/* top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), rgba(255,255,255,0.12), transparent 70%)',
        }}
      />

      {/* oversized watermark icon */}
      <Icon
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 -rotate-12 text-white/[0.05] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-white/[0.09] sm:h-40 sm:w-40"
      />

      {/* icon chip */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#2e2e2e] bg-[#1a1a1a] text-neutral-300 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
        <Icon size={16} />
      </div>

      {/* number + label */}
      <div className="relative">
        <div className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text font-dmmono text-[56px] font-extrabold leading-none tracking-tighter text-transparent sm:text-[72px]">
          <CountUp to={value} suffix={suffix} />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#262626] pt-3 font-mono text-[11px] tracking-wider text-neutral-400">
          <span>{label}</span>
          <ArrowUpRight
            size={14}
            className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0d0d0d] p-5 font-syne text-white select-none sm:p-8 md:p-12"
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.10) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 py-12 sm:gap-10"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 sm:text-[11px]"
        >
          // ABOUT ME
        </motion.div>

        {/* ---------- Header row: name + photo, side by side on every screen ---------- */}
        <div className="flex items-center justify-between gap-4 sm:gap-10">
          <h2 className="flex min-w-0 flex-col font-dmmono font-[800] uppercase leading-[0.85] tracking-tighter text-[clamp(1.7rem,8.2vw,5.5rem)]">
            <motion.span variants={item}>Azimas</motion.span>
            <motion.span variants={item} className="text-neutral-500">
              Perwata
            </motion.span>
            <motion.span variants={item}>Saputra</motion.span>
          </h2>

          <motion.div
            variants={photoReveal}
            className="group relative shrink-0 w-[clamp(92px,26vw,340px)] aspect-square"
          >
            <div className="h-full w-full overflow-hidden rounded-full border-2 border-[#262626] bg-[#111111] shadow-2xl transition-colors duration-500 group-hover:border-neutral-500">
              <img
                src="/pfp.jpg"
                alt="Azimas Perwata Saputra"
                className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-black/50 via-transparent to-white/5" />
            </div>
            {/* dashed orbit ring */}
            <div className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-neutral-800 transition-colors duration-500 group-hover:border-neutral-600 sm:-inset-3 lg:-inset-4" />
          </motion.div>
        </div>

        {/* ---------- Bio ---------- */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
          <motion.p
            variants={item}
            className="font-sans text-[13px] leading-[22px] tracking-[0.14px] text-neutral-400 sm:text-[14px] sm:leading-[26px] lg:col-span-7"
          >
            Hai! Saya adalah seorang pelajar jurusan Teknik Komputer dan Jaringan yang sudah 3 tahun
            mengulik dunia pemrograman. Selain mempelajari jaringan dan keamanan sistem, saya juga
            mendalami web & game development dan desain grafis. Sampai saat ini, saya sudah berhasil
            mengembangkan project game online dan website yang masih aktif berjalan dan terus
            berkembang.
          </motion.p>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <motion.div
              variants={item}
              className="rounded-xl border border-[#262626] border-l-4 border-l-white bg-[#111111]/60 p-4 font-sans text-[13px] italic text-neutral-300 backdrop-blur-sm"
            >
              "Interested in many ways."
            </motion.div>

            <motion.div variants={item}>
              <motion.a
                href="#cv"
                onClick={(e) => {
                  e.preventDefault();
                  alert("I'm Sorry, but the Ticket is currently unavailable. Please check back later.");
                }}
                whileHover={{ scale: 1.02, backgroundColor: '#d4d4d4' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-mono text-xs font-bold text-black transition-colors"
              >
                <TicketPlus size={14} strokeWidth={2.5} />
                <span>Create a Ticket</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* ---------- Stat cards ---------- */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}