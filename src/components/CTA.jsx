function CTA() {
  return (
    <section id="cta" className="relative py-16 bg-[#0B1330]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/10 bg-gradient-to-r from-blue-900/40 to-emerald-900/30 p-8 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Contribute to the Economic Census</h3>
              <p className="mt-3 text-blue-200/90">Businesses can verify records, submit information securely, and help improve national statistics.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors">
                Start Registration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
