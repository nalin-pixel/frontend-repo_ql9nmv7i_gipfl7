import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Methodology from './components/Methodology';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1330] text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Methodology />
      <CTA />
      <footer className="border-t border-blue-400/10 bg-[#0B1330] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-blue-300/70">
          <p>© {new Date().getFullYear()} National Bureau of Statistics • Economic Census</p>
          <p className="mt-2">Data you can trust. Insights that matter.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
