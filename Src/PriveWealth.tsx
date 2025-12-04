import {
  ShieldCheck,
  FolderHeart,
  Users,
  PieChart,
  Landmark,
  FileText,
  Handshake,
} from "lucide-react";

export default function PriveWealth() {
  return (
    <div className="w-full min-h-screen bg-black text-zinc-200 px-6 md:px-20 pt-32 pb-32">

      {/* SECTION 1 — HERO STYLE */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">
              WEALTH MANAGEMENT
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              NUQI Privé <br /> Wealth Management
            </h1>
          </div>

          <div className="w-full border-t border-white/10"></div>

          <div className="flex items-center gap-4 text-zinc-500">
            <span className="text-sm">01</span>
            <div className="w-24 border-t border-white/10"></div>
            <span className="text-sm">Overview</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-10">

          <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
            Modern Private Banking,
            <br />
            <span className="text-nuqi-goldLight">Rebuilt for Transparency</span>
          </h2>

          <div className="flex gap-6">
            <div className="w-1 bg-nuqi-goldLight/40 rounded-full"></div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              NUQI Privé offers a modern alternative to traditional private banking—
              shaped by independence, transparency and values-aligned investing.  
              Our role is simple: help you make smarter, conflict-free decisions using
              deep research and disciplined portfolio frameworks.
            </p>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Clients choose NUQI Privé for clarity, long-term alignment and stewardship—over
            the noise and product-pushing models of legacy institutions.
          </p>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-24"></div>

      {/* SECTION 2 — VALUE GRID (Same Why-Nuqi format) */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">
            OUR PRINCIPLES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            What Defines NUQI Privé
          </h2>
        </div>

        <div className="border border-white/10 rounded-2xl overflow-hidden">

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {/* 01 Holistic Portfolio Management */}
            <FeatureBlock
              id="01"
              title="Holistic, Values-Aligned Portfolio Management"
              icon={<FolderHeart className="w-6 h-6 text-nuqi-goldLight" />}
              points={[
                "Ethical-first construction",
                "Global screened securities",
                "Quantitative risk models",
                "Avoidance of leverage-driven & speculative exposures",
              ]}
            />

            {/* 02 Multi-Custody Flexibility */}
            <FeatureBlock
              id="02"
              title="Multi-Custody Flexibility"
              icon={<Users className="w-6 h-6 text-nuqi-goldLight" />}
              points={[
                "Assets held under your name",
                "Access to multiple global custodians",
                "Ensuring independence & diversification",
                "Full transparency on holdings",
              ]}
            />

            {/* 03 Risk-First Design */}
            <FeatureBlock
              id="03"
              title="Risk-First Portfolio Design"
              icon={<PieChart className="w-6 h-6 text-nuqi-goldLight" />}
              points={[
                "Institutional-grade volatility controls",
                "Drawdown cushioning strategies",
                "Weekly Investment Committee oversight",
                "Governed by seasoned global leaders",
              ]}
            />

            {/* 04 Clear Pricing */}
            <FeatureBlock
              id="04"
              title="Clear Pricing. Zero Retrocessions."
              icon={<Landmark className="w-6 h-6 text-nuqi-goldLight" />}
              points={[
                "No commissions or hidden incentives",
                "Conflict-free advisory model",
                "Client-first representation only",
              ]}
            />

            {/* 05 Transparent Reporting */}
            <FeatureBlock
              id="05"
              title="A Relationship Built on Clarity & Consistency"
              icon={<FileText className="w-6 h-6 text-nuqi-goldLight" />}
              points={[
                "Structured reporting",
                "Quarterly reviews",
                "On-demand portfolio insights",
                "Founder-led engagement model",
              ]}
            />

          </div>
        </div>
      </div>

      {/* Final Statement */}
      <div className="max-w-4xl mx-auto text-center mt-28">
        <h2 className="text-3xl md:text-4xl font-semibold text-nuqi-goldLight mb-6">
          Clarity. Stewardship. Long-Term Partnership.
        </h2>

        <p className="text-lg text-zinc-300 leading-relaxed">
          NUQI Privé is designed for individuals who value thoughtful decision-making,
          transparent structures and long-term wealth stewardship over aggressive product selling.
        </p>
      </div>
    </div>
  );
}

/* ————————————————
Reusable Feature Component
——————————————— */
function FeatureBlock({ id, title, icon, points }) {
  return (
    <div className="p-10 relative group transition-all duration-300 hover:bg-white/[0.02]">
      <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">
        {id}
      </span>

      <div className="mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 transition group-hover:border-nuqi-goldLight/80">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="list-disc ml-5 space-y-2 text-zinc-400 leading-relaxed">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-nuqi-goldLight/60 transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
}
