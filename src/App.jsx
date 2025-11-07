import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold text-white">Backend Engineer</a>
          <div className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#projects" className="hover:text-white">Projek</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} — Dibangun dengan fokus pada keandalan & performa.
        </div>
      </footer>
    </div>
  );
}
