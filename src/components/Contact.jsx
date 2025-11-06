import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative bg-[#07070b] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something</h2>
          <p className="mt-2 max-w-xl text-white/70">
            Send a note and I’ll get back within 24 hours. For quick chats, reach me on socials.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 focus:border-cyan-300/40" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input type="email" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 focus:border-cyan-300/40" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea rows="5" required className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 focus:border-cyan-300/40" />
            </div>
            <button
              disabled={status !== 'idle'}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:shadow-lg hover:shadow-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : (<><Send className="h-4 w-4" />Send message</>)}
            </button>
          </motion.form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="text-sm text-white/60">Prefer a quick call?</div>
              <a href="#" className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black">Book a call</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
