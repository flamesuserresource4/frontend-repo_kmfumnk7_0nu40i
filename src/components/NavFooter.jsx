import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function NavFooter() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
            <a href="#home" className="font-semibold tracking-tight text-white">dev<span className="text-cyan-300">.studio</span></a>
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <footer className="relative bg-[#07070b] py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="text-sm">© {new Date().getFullYear()} Your Name</div>
          <motion.a
            href="#home"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
            whileHover={{ y: -2 }}
          >
            Back to top
          </motion.a>
        </div>
      </footer>
    </>
  );
}
