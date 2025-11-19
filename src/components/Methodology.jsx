function Methodology() {
  return (
    <section id="methodology" className="relative py-20 bg-[#0B1330]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Methodology</h3>
            <p className="mt-3 text-blue-200/90">
              The census adopts internationally aligned statistical standards, leveraging administrative data, structured surveys, and modern validation to ensure accuracy and comparability.
            </p>
            <ul className="mt-6 space-y-3 text-blue-200/90 list-disc list-inside">
              <li>Business registry harmonization and stratified sampling</li>
              <li>Secure digital collection and geo-tagging</li>
              <li>Data triangulation and disclosure control</li>
              <li>Open dissemination through APIs and dashboards</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-400/10 bg-white/5 p-6">
            <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-blue-900/40 to-emerald-900/30 flex items-center justify-center text-blue-200/80">
              Abstract visuals of growth curves, network graphs, and city skylines to suggest economic development.
            </div>
            <p className="text-xs text-blue-300/70 mt-3">Representative abstract imagery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
