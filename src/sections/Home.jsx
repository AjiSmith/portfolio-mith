import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ShieldAlert } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const WORDS = ['Part-Time Developer', 'Senior High School Student.', 'Game&Web Developer.'];

const TECH = [
    'C++', 'C#', 'Laravel', 'Node.js', 'Python', 'React.js',
    'JavaScript', 'TypeScript', 'PHP', 'MySQL & PostgreSQL',
];

/* ------------------------------------------------------------------ */
/*  Motion                                                             */
/* ------------------------------------------------------------------ */
const EASE = [0.215, 0.61, 0.355, 1];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: EASE },
    }),
};

const fadeLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay, ease: EASE },
    }),
};

const dropInVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay, ease: EASE },
    }),
};

/* ------------------------------------------------------------------ */
/*  Typing effect                                                      */
/* ------------------------------------------------------------------ */
function TypingEffect() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const full = WORDS[wordIndex];
        let timer;

        if (!deleting && text === full) {
            timer = setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && text === '') {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % WORDS.length);
        } else {
            timer = setTimeout(
                () => setText(full.substring(0, text.length + (deleting ? -1 : 1))),
                deleting ? 50 : 120
            );
        }

        return () => clearTimeout(timer);
    }, [text, deleting, wordIndex]);

    return (
        <div className="font-mono text-[13px] sm:text-[14px] text-neutral-400 flex items-center gap-1 select-none">
            <span className="px-1 py-0.5 rounded">{text}</span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="w-[6px] h-[14px] sm:w-[8px] sm:h-[16px] bg-white inline-block"
            />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Hanging ID badge                                                   */
/*  Built once at 240 × 340 and scaled with --s, so the same design    */
/*  fits beside the headline on every screen size.                     */
/* ------------------------------------------------------------------ */
const CARD_W = 240;
const CARD_H = 340;
const LANYARD_H = 230; // lanyard + clip, hangs above the card

function IdBadge() {
    return (
        <motion.div
            custom={1.0}
            initial="hidden"
            animate="visible"
            variants={dropInVariants}
            className="relative shrink-0"
            style={{
                width: `calc(${CARD_W}px * var(--s))`,
                height: `calc(${CARD_H}px * var(--s))`,
            }}
        >
            {/* fixed-size design, scaled down from the top-left */}
            <div
                className="absolute left-0 top-0"
                style={{
                    width: CARD_W,
                    height: CARD_H,
                    transform: 'scale(var(--s))',
                    transformOrigin: 'top left',
                }}
            >
                {/* pendulum swing – pivots from the top of the lanyard */}
                <motion.div
                    animate={{ rotate: [-1.5, 1.5, -1.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top center', top: -LANYARD_H, width: CARD_W }}
                    className="absolute left-0 flex flex-col items-center"
                >
                    {/* lanyard */}
                    <div className="w-[14px] h-[220px] bg-[#141414] border-x border-[#374151] relative flex items-center justify-center">
                        <span className="text-[8px] text-neutral-400 font-bold tracking-[0.35em] uppercase rotate-90 whitespace-nowrap pointer-events-none font-mono">
                            --mith.dev mith.dev--
                        </span>
                    </div>

                    {/* clip */}
                    <div className="w-[16px] h-[16px] bg-[#262626] border border-[#404040] rounded-full -mt-1 z-10 flex items-center justify-center">
                        <div className="w-[6px] h-[6px] bg-[#0d0d0d] rounded-full" />
                    </div>

                    {/* flipping card */}
                    <motion.div
                        animate={{ rotateY: [0, 180, 180, 360, 360] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.4, 0.5, 0.9, 1],
                        }}
                        style={{ transformStyle: 'preserve-3d', transformPerspective: 900 }}
                        className="w-[240px] h-[340px] relative mt-[-2px]"
                    >
                        {/* front */}
                        <div
                            style={{ backfaceVisibility: 'hidden' }}
                            className="absolute inset-0 w-full h-full bg-[#e5e5e5] rounded-[16px] p-3 flex flex-col items-center justify-between border-4 border-white shadow-2xl"
                        >
                            <div className="w-10 h-2.5 bg-[#0d0d0d] rounded-full mt-1 opacity-90" />
                            <div className="w-full h-[260px] bg-black rounded-[8px] overflow-hidden border border-neutral-300 relative mt-3">
                                <img
                                    src="/pfp.jpg"
                                    alt="Developer Avatar"
                                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
                            </div>
                            <div className="w-full flex items-center justify-between px-1 py-1.5">
                                <div className="flex flex-col font-mono text-[13px] text-black font-bold leading-none uppercase">
                                    <span>19 Y/O Male</span>
                                    <span className="text-neutral-500 text-[10px] mt-0.5">Part-Time Developer</span>
                                </div>
                                <div className="flex gap-[1px] h-4 items-center bg-black p-0.5 rounded-[1px] text-white">
                                    <Code2 size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* back */}
                        <div
                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                            className="absolute inset-0 w-full h-full bg-[#0d0d0d] rounded-[16px] p-6 flex flex-col items-center justify-between border-4 border-white/10 shadow-2xl text-white font-syne"
                        >
                            <div className="w-full flex justify-between items-center border-b border-[#374151] pb-3 font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                                <span>Core Identity</span>
                                <ShieldAlert size={10} className="text-neutral-400" />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 my-auto">
                                <div className="border-2 border-white p-3 rounded-full bg-white text-black mb-1">
                                    <Code2 size={32} strokeWidth={2.5} />
                                </div>
                                <span className="text-[22px] font-black uppercase tracking-tight leading-none text-white">
                                    MITH<span className="text-neutral-500">.DEV</span>
                                </span>
                                <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 uppercase">
                                    [ EST. 2026 ]
                                </span>
                            </div>
                            <div className="w-full border-t border-[#374151] pt-3 flex items-center justify-between font-mono text-[6px] text-neutral-500 uppercase tracking-wider">
                                <div className="flex items-center gap-1">
                                    <Terminal size={8} />
                                    <span>Portofolio Website</span>
                                </div>
                                <span>V12.5.2</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  Home                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
    return (
        <section
            className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden font-syne select-none"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(55, 65, 81, 0.10) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(55, 65, 81, 0.10) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
            }}
        >
            <div className="w-full max-w-7xl mx-auto my-auto z-10 flex flex-col items-start gap-5 sm:gap-6 pt-20 lg:pt-12">

                {/* ---------- Header row: headline + badge, side by side on every screen ---------- */}
                {/* --s is the badge scale; it steps up with the screen size */}
                <div className="w-full flex flex-col gap-5 sm:gap-6 [--s:0.44] sm:[--s:0.6] md:[--s:0.75] lg:[--s:0.9] xl:[--s:1]">
                    <motion.div
                        custom={0.5}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        // keeps the text clear of the lanyard hanging down at the right
                        style={{ paddingRight: `calc(${CARD_W}px * var(--s))` }}
                        className="flex items-start gap-2 text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase break-words"
                    >
                        <span>*</span>
                        <span>currently hired as Head of Development Team</span>
                    </motion.div>

                    <div className="w-full flex items-center justify-between gap-3 sm:gap-8">
                        <div className="min-w-0 flex flex-col leading-[0.88] tracking-[-0.03em] font-[800] text-[clamp(1.9rem,8.2vw,6rem)]">
                            <motion.h1
                                custom={1.0}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUpVariants}
                                className="text-white"
                            >
                                <span className="block">WEB &</span>
                                <span className="block">GAME</span>
                            </motion.h1>
                            <motion.h2
                                custom={1.5}
                                initial="hidden"
                                animate="visible"
                                variants={fadeLeftVariants}
                                className="text-neutral-500 opacity-60"
                            >
                                Developer
                            </motion.h2>
                        </div>

                        <IdBadge />
                    </div>
                </div>

                {/* ---------- Details ---------- */}
                <motion.div custom={1.8} initial="hidden" animate="visible" variants={fadeLeftVariants}>
                    <TypingEffect />
                </motion.div>

                <motion.p
                    custom={2.3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                    className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26.6px] tracking-[0.14px] text-neutral-400 max-w-xl font-normal"
                >
                    Computer & Network Engineering student with 3+ years of programming experience,
                    combining expertise in software development, game development, and full-stack web
                    development. Proficient in React.js, TypeScript, and Tailwind CSS, focused on building
                    elegant, high-performance digital products with exceptional user experiences.
                </motion.p>

                <div className="flex flex-wrap gap-2 pt-2 max-w-full">
                    {TECH.map((tech, index) => (
                        <motion.span
                            key={tech}
                            custom={3.0 + index * 0.1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            whileHover={{ y: -4, borderColor: '#ffffff' }}
                            className="border border-[#374151] rounded-full px-3 py-1 text-[11px] sm:text-xs text-neutral-300 bg-[#0d0d0d] font-mono cursor-default transition-colors duration-200"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    custom={3.6}
                    initial="hidden"
                    animate="visible"
                    variants={fadeLeftVariants}
                    className="pt-2 sm:pt-4 font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider w-full break-words"
                >
                    ↗ Head of Development Team of Valrise Gaming Community
                </motion.div>
            </div>

            <footer className="w-full flex justify-center z-10 pb-2 pt-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase flex items-center gap-1">
                    <span>Scroll</span>
                    <motion.span
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ↓
                    </motion.span>
                </div>
            </footer>
        </section>
    );
}