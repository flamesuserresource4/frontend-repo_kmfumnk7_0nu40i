import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavFooter from './components/NavFooter';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <NavFooter />
      <main className="space-y-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
