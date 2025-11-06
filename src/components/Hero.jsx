import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const socials = [
  { href: 'https://github.com/', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
];

export default function Hero() {
  const headline = useMemo(() => [
    "I build",
    "intelligent",
    "web experiences.",
  ], []);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient lighting overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(88,28,135,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_80%,rgba(6,182,212,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-sm text-white/80">Available for select engagements</span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mb-6 font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.25rem)' }}
          >
            {headline.map((word, i) => (
              <motion.span
                key={word + i}
                className={`inline-block ${i === 1 ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-400' : ''}`}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto max-w-2xl text-balance text-white/70"
          >
            Full‑stack engineer crafting performant, elegant, and human‑centered products. I merge
            systems thinking with refined UI to ship delightful experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium shadow-lg shadow-white/10 transition hover:shadow-white/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
