import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ShieldAlert } from 'lucide-react';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.215, 0.610, 0.355, 1.000],
        },
    }),
};

const fadeLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.215, 0.610, 0.355, 1.000],
        },
    }),
};

function TypingEffect() {
    const words = ["Part-Time Developer", "Senior High School Student.", "Game&Web Developer."];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const fullWord = words[currentWordIndex];

        const handleType = () => {
            if (!isDeleting) {
                setCurrentText(fullWord.substring(0, currentText.length + 1));
                if (currentText === fullWord) {
                    timer = setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setCurrentText(fullWord.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        if (!timer) {
            timer = setTimeout(handleType, isDeleting ? 50 : 120);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    return (
        <div className="font-mono text-[13px] sm:text-[14px] text-neutral-400 flex items-center gap-1 select-none">
            <span className="px-1 py-0.5 rounded">
                {currentText}
            </span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="w-[6px] h-[14px] sm:w-[8px] sm:h-[16px] bg-white inline-block"
            />
        </div>
    );
}

export default function Home() {
    return (
        <section
            className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden font-syne select-none"
            style={{
                backgroundImage: `
                  linear-gradient(rgba(55, 65, 81, 0.10) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(55, 65, 81, 0.10) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
            }}
        >

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto z-10 pt-16 lg:pt-8">
                <div className="w-full col-span-1 lg:col-span-7 flex flex-col items-start text-left gap-5 sm:gap-6">
                    
                    <motion.div
                        custom={0.50}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="flex items-center gap-2 text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase break-words w-full"
                    >
                        <span>=</span>
                        <span>Head of Development Team of Valrise Gaming Community</span>
                    </motion.div>

                    <div className="flex flex-col leading-[0.85] tracking-[-0.03em] font-syne font-[800] w-full">
                        <motion.h1
                            custom={1.0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            className="text-[44px] xs:text-[56px] sm:text-[80px] md:text-[96px] text-white"
                        >
                            Fullstack
                        </motion.h1>
                        <motion.h2
                            custom={1.50}
                            initial="hidden"
                            animate="visible"
                            variants={fadeLeftVariants}
                            className="text-[44px] xs:text-[56px] sm:text-[80px] md:text-[96px] text-neutral-500 opacity-60"
                        >
                            Developer
                        </motion.h2>
                    </div>

                    <motion.div
                        custom={1.80}
                        initial="hidden"
                        animate="visible"
                        variants={fadeLeftVariants}
                    >
                        <TypingEffect />
                    </motion.div>

                    <motion.p
                        custom={2.30}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26.6px] tracking-[0.14px] text-neutral-400 max-w-xl font-normal"
                    >
                        I am a passionate fullstack developer with experience in building dynamic web applications and engaging games. I specialize in creating seamless user experiences and efficient code, utilizing technologies like React.js, Typescript, and Tailwind CSS.
                    </motion.p>

                    <div className="flex flex-wrap gap-2 pt-2 max-w-full">
                        {["C++", "C#", "Laravel", "Node.js", "Python", "React.js"].map((tech, index) => (
                            <motion.span
                                key={tech}
                                custom={3.0 + index * 0.15}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUpVariants}
                                whileHover={{ y: -4, borderColor: "#ffffff" }}
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
                        className="flex flex-col gap-1.5 pt-4 sm:pt-6 font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider w-full"
                    >
                        <span className="flex items-center gap-1 text-neutral-400 break-words">
                            ↗ current: Head of Development Team at Valrise Gaming Community
                        </span>
                    </motion.div>
                </div>
                <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end relative h-[600px] w-full">
                    <motion.div
                        animate={{ rotate: [-1.5, 1.5, -1.5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "top center" }}
                        className="absolute top-[-40px] flex flex-col items-center z-20"
                    >
                        <div className="w-[14px] h-[220px] bg-[#141414] border-x border-[#374151] relative flex items-center justify-center">
                            <span className="text-[8px] text-neutral-400 font-bold tracking-[0.35em] uppercase rotate-90 whitespace-nowrap pointer-events-none font-mono">
                                --mith.dev mith.dev--
                            </span>
                        </div>

                        <div className="w-[16px] h-[16px] bg-[#262626] border border-[#404040] rounded-full -mt-1 z-10 flex items-center justify-center">
                            <div className="w-[6px] h-[6px] bg-[#0d0d0d] rounded-full" />
                        </div>

                        <motion.div
                            animate={{ rotateY: [0, 180, 180, 360, 360] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.4, 0.5, 0.9, 1]
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="w-[240px] h-[340px] relative mt-[-2px]"
                        >
                            <div
                                style={{ backfaceVisibility: "hidden" }}
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

                            <div
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)"
                                }}
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

            </div>

            <footer className="w-full flex justify-center z-10 pb-2 pt-6 lg:pt-0">
                <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase flex items-center gap-1">
                    <span>Scroll</span>
                    <motion.span
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        ↓
                    </motion.span>
                </div>
            </footer>
        </section>
    );
}
