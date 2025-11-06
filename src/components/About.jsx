import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';

const skills = [
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / API Design', level: 88 },
  { name: 'Python / FastAPI', level: 86 },
  { name: 'TypeScript', level: 84 },
  { name: 'Design Systems / UX', level: 80 },
];

const timeline = [
  { year: '2025', title: 'Senior Full‑stack Engineer', meta: 'Building AI‑powered interfaces' },
  { year: '2023', title: 'Product Engineer', meta: 'Scaled design systems across teams' },
  { year: '2021', title: 'Software Engineer', meta: 'Shipped data‑intensive dashboards' },
  { year: '2019', title: 'B.S. Computer Science', meta: 'Human‑Computer Interaction' },
];

export default function About() {
  return (
    <section id="about" className="relative isolate bg-gradient-to-b from-black to-[#0a0a0f] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid items-start gap-8 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight md:text-4xl"
            >
              About
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-xl text-white/70"
            >
              I design and engineer digital products with a focus on clarity, motion, and performance. My work
              spans web apps, design systems, and rich 3D interactions.
            </motion.p>

            <div className="mt-8 grid gap-4">
              {skills.map((s, idx) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-white/80">{s.name}</span>
                    <span className="text-white/50">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    {idx % 3 === 0 ? <Code2 className="h-4 w-4" /> : idx % 3 === 1 ? <Cpu className="h-4 w-4" /> : <Rocket className="h-4 w-4" />}
                  </span>
                  <span>{t.year}</span>
                </div>
                <div className="text-lg font-medium">{t.title}</div>
                <div className="text-white/60">{t.meta}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
