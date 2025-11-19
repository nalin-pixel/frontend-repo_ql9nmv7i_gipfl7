import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 h-full bg-gradient-to-b from-[#0B1330]/40 via-[#0B1330]/60 to-[#0B1330] pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-200/90 text-sm tracking-[0.2em] uppercase mb-4">Government Economic Census</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Measuring Growth. Guiding Policy.
            </h2>
            <p className="mt-6 text-lg text-blue-200/90">
              A nationwide enumeration of businesses and industries to map economic activity, inform decisions, and shape a resilient future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#highlights" className="pointer-events-auto inline-flex items-center px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors">
                Explore Highlights
              </a>
              <a href="#cta" className="pointer-events-auto inline-flex items-center px-5 py-3 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors">
                Participate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
