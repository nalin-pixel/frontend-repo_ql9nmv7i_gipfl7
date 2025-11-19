import { TrendingUp, Building2, Briefcase, Globe } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "GDP Linkages",
    desc: "Understand sector contributions and inter-industry flows that power national growth.",
  },
  {
    icon: Building2,
    title: "Enterprise Coverage",
    desc: "Comprehensive enumeration across micro, small, medium, and large establishments.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Wages",
    desc: "Employment, compensation, and productivity indicators across regions.",
  },
  {
    icon: Globe,
    title: "Regional Insights",
    desc: "Granular, map-ready outputs for states, districts, and economic corridors.",
  },
];

function Highlights() {
  return (
    <section id="highlights" className="relative py-20 bg-[#0B1330]">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(34,197,94,0.12),transparent),radial-gradient(600px_200px_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Key Highlights</h3>
          <p className="mt-3 text-blue-200/90">
            A concise snapshot of what the census delivers to policymakers, businesses, and citizens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-blue-400/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-blue-300" />
              </div>
              <h4 className="text-white font-medium">{title}</h4>
              <p className="mt-2 text-sm text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
