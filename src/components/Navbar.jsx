import { Menu, BarChart3 } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-blue-300" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-blue-300/80">National Bureau</p>
            <h1 className="text-white font-semibold leading-tight">Economic Census</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-blue-200/90">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
          <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Involved</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-blue-400/20 text-blue-200/90">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
