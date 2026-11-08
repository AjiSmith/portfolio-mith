import { motion } from 'framer-motion';
import { Link2, Check } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '6289687130200';
const WHATSAPP_MESSAGE = 'Hi Azimas, I found you through your portfolio!';

const CONTACTS = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: 'az.saputra_',
    name: 'Azimas Perwata Saputra',
    avatar: '/pfp.jpg',
    status: 'online',
    meta: [
      { value: '3', label: 'posts' },
      { value: '123', label: 'followers' },
      { value: '110', label: 'following' },
    ],
    link: { label: 'instagram.com/az.saputra_', href: 'https://instagram.com/az.saputra_' },
    primary: { label: 'Contact Me', href: 'https://instagram.com/az.saputra_' },
    secondary: { label: 'Follow', href: 'https://instagram.com/az.saputra_' },
    ring: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: `+${WHATSAPP_NUMBER}`,
    name: 'Azimas Perwata Saputra',
    avatar: '/pfp.jpg',
    status: 'online',
    meta: [
      { value: 'Chat', label: 'direct' },
      { value: '< 24h', label: 'reply' },
      { value: 'ID / EN', label: 'language' },
    ],
    link: { label: `wa.me/${WHATSAPP_NUMBER}`, href: `https://wa.me/${WHATSAPP_NUMBER}` },
    primary: {
      label: 'Message Me',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    },
    secondary: { label: 'Save Number', copy: WHATSAPP_NUMBER },
    ring: 'from-[#25d366] via-[#128c7e] to-[#075e54]',
  },
  {
    id: 'discord',
    platform: 'Discord',
    handle: 'smithbondz#3638',
    name: 'mith',
    avatar: '/pfp.jpg',
    status: 'offline',
    meta: [
      { value: 'Invis', label: 'Active' },
      { value: 'Dev', label: 'VRP' },
      { value: 'DM', label: 'available' },
    ],
    link: { label: 'github.com/Lynxx02', href: 'https://github.com/Lynxx02' },
    primary: { label: 'Copy Tag', copy: 'smithbondz#3638' },
    secondary: { label: 'GitHub', href: 'https://github.com/Lynxx02' },
    ring: 'from-[#5865f2] via-[#4752c4] to-[#2b2d6e]',
  },
];

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.3 4.4A17.6 17.6 0 0 0 15.9 3l-.2.4a16.3 16.3 0 0 1 4 1.9 14.8 14.8 0 0 0-15.4 0 16.3 16.3 0 0 1 4-1.9L8.1 3a17.6 17.6 0 0 0-4.4 1.4C.9 8.6.1 12.7.5 16.8a17.7 17.7 0 0 0 5.4 2.7l1.2-1.9a11.5 11.5 0 0 1-1.8-.9l.4-.3a12.6 12.6 0 0 0 10.7 0l.4.3c-.6.3-1.2.6-1.8.9l1.2 1.9a17.7 17.7 0 0 0 5.4-2.7c.5-4.7-.8-8.8-3.3-12.4ZM8.7 14.3c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9.9 1.9 2.1-.8 2.1-1.9 2.1Zm6.6 0c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9.9 1.9 2.1-.8 2.1-1.9 2.1Z" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Motion – one orchestrated entrance for the whole section           */
/* ------------------------------------------------------------------ */
const ease = [0.25, 1, 0.5, 1];

const headerVariants = {
  hidden: { opacity: 0, y: -24, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease } },
};

/* ------------------------------------------------------------------ */
/*  Shared card – every platform renders through this                  */
/* ------------------------------------------------------------------ */
function ActionButton({ action, variant }) {
  const [copied, setCopied] = useState(false);

  const base =
    'flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
  const styles =
    variant === 'primary'
      ? 'bg-[#262626] text-white hover:bg-white hover:text-black'
      : 'bg-[#262626] text-white border border-transparent hover:bg-neutral-800 hover:border-[#404040]';

  if (action.copy) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(action.copy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch {
        /* clipboard blocked – fail silently */
      }
    };
    return (
      <button type="button" onClick={handleCopy} className={`${base} ${styles}`}>
        {copied ? (
          <>
            <Check size={13} /> Copied
          </>
        ) : (
          action.label
        )}
      </button>
    );
  }

  return (
    <a href={action.href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {action.label}
    </a>
  );
}

function ContactCard({ c }) {
  return (
    <motion.article
      variants={cardVariants}
      className="w-full h-full bg-black border border-[#262626] rounded-2xl p-5 flex flex-col gap-4 font-sans shadow-2xl"
    >
      {/* Header: platform + status */}
      <header className="flex items-center justify-between text-neutral-300">
        <div className="flex items-center gap-2">
          {icons[c.id]}
          <span className="font-bold text-sm tracking-wide text-white">{c.platform}</span>
        </div>
        <span
          className={`w-2 h-2 rounded-full ${c.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-neutral-600'}`}
          title={c.status === 'online' ? 'Available' : 'Invisible / offline'}
        />
      </header>

      {/* Identity */}
      <div className="flex items-center gap-4">
        <div className={`shrink-0 w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr ${c.ring}`}>
          <div className="w-full h-full rounded-full bg-black p-[2px]">
            <img
              src={c.avatar}
              alt={`${c.platform} avatar`}
              className="w-full h-full object-cover rounded-full grayscale"
            />
          </div>
        </div>
        <div className="min-w-0 flex flex-col leading-tight">
          <span className="font-semibold text-white text-sm truncate">{c.name}</span>
          <span className="text-neutral-400 text-xs font-mono truncate">{c.handle}</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 text-center rounded-lg border border-[#262626] bg-[#0d0d0d] py-2.5">
        {c.meta.map((m) => (
          <div key={m.label}>
            <div className="text-sm font-bold text-white">{m.value}</div>
            <div className="text-[11px] text-neutral-400">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Link */}
      <a
        href={c.link.href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors min-w-0"
      >
        <Link2 size={12} className="shrink-0" />
        <span className="truncate">{c.link.label}</span>
      </a>

      {/* Actions – pinned to bottom so all cards line up */}
      <div className="flex gap-2.5 mt-auto">
        <ActionButton action={c.primary} variant="primary" />
        <ActionButton action={c.secondary} variant="secondary" />
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-6 overflow-hidden font-syne select-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(55, 65, 81, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(55, 65, 81, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="w-full max-w-7xl mx-auto text-center pt-12 pb-12 z-10"
      >
        <div className="text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase font-mono mb-2">
          // CONNECT WITH ME
        </div>
        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight text-white uppercase leading-none">
          Get In Touch
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={gridVariants}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch z-10 pb-16"
      >
        {CONTACTS.map((c) => (
          <div key={c.id} className="w-full max-w-[340px] mx-auto md:max-w-none flex">
            <ContactCard c={c} />
          </div>
        ))}
      </motion.div>

      <div className="z-10 mt-6 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
        © 2026 AZIMAS PERWATA SAPUTRA • ALL RIGHTS RESERVED.
      </div>
    </section>
  );
}