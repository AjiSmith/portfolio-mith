import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, User, Globe } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Timeline (seconds) – every animation is placed on this one clock   */
/* ------------------------------------------------------------------ */
const TOTAL = 6; // seconds before onComplete fires (same as the original)

const T = {
  glow: 0,
  icons: 0.3,       // icon badges rise in, staggered
  lineOne: 1.2,     // "welcome to my"
  lineTwo: 1.9,     // "portfolio website"
  rule: 3.1,        // hairline draws out from the center
  domain: 3.6,      // mith.dev
  progress: 0.2,    // bottom progress hairline starts
  exit: 5.45,       // fade-out begins
};

const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_MASK = [0.76, 0, 0.24, 1];

/* ------------------------------------------------------------------ */
/*  A line of text revealed word-by-word from behind a mask            */
/* ------------------------------------------------------------------ */
function MaskedLine({ text, delay, className, reduce }) {
  const words = text.split(' ');

  return (
    <h1 className={`flex flex-wrap justify-center gap-x-[0.28em] ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          // padding + negative margin keeps descenders from being clipped by the mask
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { y: '115%', opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: '0%', opacity: 1 }}
            transition={{
              duration: reduce ? 0.6 : 1.1,
              delay: delay + i * 0.09,
              ease: EASE_MASK,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero({ onComplete }) {
  const reduce = useReducedMotion();

  // keep the latest callback without restarting the timer on re-render
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => onCompleteRef.current?.(), TOTAL * 1000);
    return () => clearTimeout(timer);
  }, []);

  const headlineSize = 'text-[clamp(2.1rem,7.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em]';

  return (
    <motion.section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 text-white font-syne select-none"
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: TOTAL - T.exit + T.exit,
        times: [0, T.exit / TOTAL, 1],
        ease: 'easeInOut',
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: T.glow, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(13,13,13,0) 60%), radial-gradient(ellipse 90% 80% at 50% 50%, rgba(13,13,13,0) 40%, #0d0d0d 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon badges */}
        <div className="mb-10 flex items-center justify-center gap-3 sm:mb-12">
          {[Code2, User, Globe].map((Icon, i) => (
            <motion.div
              key={i}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: T.icons + i * 0.15, ease: EASE_OUT }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#374151] bg-[#0d0d0d]/80 text-neutral-200 backdrop-blur-sm"
            >
              <Icon size={17} strokeWidth={1.8} />
            </motion.div>
          ))}
        </div>

        {/* Headline – two lines, one size, hierarchy through weight and tone */}
        <MaskedLine
          text="Welcome to my"
          delay={T.lineOne}
          reduce={reduce}
          className={`${headlineSize} font-medium text-neutral-400`}
        />
        <MaskedLine
          text="Portfolio Website"
          delay={T.lineTwo}
          reduce={reduce}
          className={`${headlineSize} mt-1 font-extrabold text-white sm:mt-2`}
        />

        {/* Hairline draws outward from the center */}
        <motion.div
          aria-hidden="true"
          className="mt-9 h-px w-40 origin-center bg-gradient-to-r from-transparent via-neutral-500 to-transparent sm:mt-11 sm:w-56"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: T.rule, ease: EASE_OUT }}
        />

        {/* Domain */}
        <motion.a
          href="https://mith.dev"
          tabIndex={-1}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: T.domain, ease: EASE_OUT }}
          className="mt-7 rounded-full border border-[#374151] px-5 py-2 font-mono text-[13px] tracking-[0.08em] text-neutral-400 transition-colors duration-300 hover:border-white hover:text-white"
        >
          mith.dev
        </motion.a>
      </div>

      {/* Progress hairline – fills over the exact time the intro stays up */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#1f2937]">
        <motion.div
          className="h-full origin-left bg-white/70"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: TOTAL - T.progress, delay: T.progress, ease: 'linear' }}
        />
      </div>
    </motion.section>
  );
}