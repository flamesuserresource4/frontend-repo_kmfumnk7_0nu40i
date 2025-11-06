import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    title: 'Neural UI Toolkit',
    tag: 'AI',
    media: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'TypeScript', 'OpenAI'],
  },
  {
    title: 'Realtime Analytics',
    tag: 'Data',
    media: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    stack: ['Next.js', 'Edge', 'D3.js'],
  },
  {
    title: '3D Commerce',
    tag: '3D',
    media: 'https://images.unsplash.com/photo-1557825835-70d97c4aa315?q=80&w=1400&auto=format&fit=crop',
    stack: ['Three.js', 'WebGL', 'Node'],
  },
  {
    title: 'Design System',
    tag: 'UI',
    media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    stack: ['Figma', 'React', 'Storybook'],
  },
];

const filters = ['All', 'AI', 'Data', '3D', 'UI'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const projects = useMemo(
    () => (active === 'All' ? allProjects : allProjects.filter((p) => p.tag === active)),
    [active]
  );

  return (
    <section id="projects" className="relative bg-[#0a0a0f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === f
                    ? 'bg-white text-black shadow shadow-white/20'
                    : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.media}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-medium">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-sm text-white/80">Click to view</div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
