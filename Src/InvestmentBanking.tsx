import {
  Landmark,
  ArrowRightCircle,
  LineChart,
  ShieldCheck,
  Building2,
  Briefcase,
} from "lucide-react";

export default function InvestmentBanking() {
  return (
    <div className="w-full min-h-screen bg-black text-zinc-200 px-6 md:px-20 pt-32 pb-32">

      {/* SECTION 1 — HERO STYLE (Same as About Nuqi) */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">
              INVESTMENT BANKING
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              NUQI <br /> Investment Banking
            </h1>
          </div>

          <div className="w-full border-t border-white/10"></div>

          <div className="flex items-center gap-4 text-zinc-500">
            <span className="text-sm">01</span>
            <div className="w-24 border-t border-white/10"></div>
            <span className="text-sm">Introduction</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
            Trusted Advisory for
            <br />
            <span className="block mt-2 text-nuqi-goldLight">Capital, Debt & Strategy</span>
          </h2>

          <div className="flex gap-6">
            <div className="w-1 bg-nuqi-goldLight/40 rounded-full"></div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              NUQI Investment Banking supports corporates, family businesses and
              high-growth enterprises across the GCC and India with ethical, structured 
              and globally compliant advisory solutions. Our capabilities span the full 
              spectrum of capital markets, debt solutions and strategic fundraising —
              backed by deep regional insight, ecosystem access and a regulated DIFC presence.
            </p>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed">
            From structured debt to private equity advisory, we help businesses raise 
            capital with integrity, intelligence and long-term alignment.
          </p>
        </div>
      </div>

      {/* SECTION SPACING */}
      <div className="h-24"></div>

      {/* SECTION 2 — OUR EXPERTISE (GRID LIKE WHY NUQI STYLE) */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">OUR EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            What We Deliver
          </h2>
        </div>

        <div className="border border-white/10 rounded-2xl overflow-hidden">

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {/* 1. Debt Advisory */}
            <div className="p-10 relative group">
              <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">01</span>

              <div className="mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 group-hover:border-nuqi-goldLight/80 transition">
                  <Landmark className="w-6 h-6 text-nuqi-goldLight" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Debt Advisory</h3>

              <ul className="list-disc ml-5 space-y-2 text-zinc-400">
                <li>Structured corporate debt</li>
                <li>Sukuk issuance structuring</li>
                <li>Private credit solutions for growth & working capital</li>
                <li>Offshore and cross-border financing structures</li>
                <li>Laddered sukuk income frameworks (stable USD yields)</li>
              </ul>
            </div>

            {/* 2. Equity Advisory */}
            <div className="p-10 relative group">
              <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">02</span>

              <div className="mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 group-hover:border-nuqi-goldLight/80 transition">
                  <LineChart className="w-6 h-6 text-nuqi-goldLight" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Equity Advisory</h3>

              <ul className="list-disc ml-5 space-y-2 text-zinc-400">
                <li>Private equity fundraising</li>
                <li>Strategic stake placements</li>
                <li>Growth-stage capital raise (mid-market companies)</li>
                <li>Access to regional & global institutional investors</li>
              </ul>
            </div>

            {/* 3. Capital Raise Advisory */}
            <div className="p-10 relative group">
              <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">03</span>

              <div className="mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 group-hover:border-nuqi-goldLight/80 transition">
                  <Briefcase className="w-6 h-6 text-nuqi-goldLight" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Capital Raise Advisory</h3>

              <ul className="list-disc ml-5 space-y-2 text-zinc-400">
                <li>Multi-stage financing (Seed to Series)</li>
                <li>Valuation support & deal positioning</li>
                <li>Investor outreach across GCC, India, Singapore & Europe</li>
              </ul>
            </div>

            {/* 4. Differentiators */}
            <div className="p-10 relative group">
              <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">04</span>

              <div className="mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 group-hover:border-nuqi-goldLight/80 transition">
                  <ShieldCheck className="w-6 h-6 text-nuqi-goldLight" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Our Differentiators</h3>

              <ul className="list-disc ml-5 space-y-2 text-zinc-400">
                <li>Ethical-first frameworks</li>
                <li>Regulated DIFC entity (DFSA Cat 3C)</li>
                <li>Access to NUQI ecosystem: Sukuk, Digital Wealth, Gold, NEA</li>
                <li>Multi-jurisdictional structuring experience</li>
                <li>Institutional-grade governance (ex-BlackRock CIO chaired IC)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* FINAL STATEMENT */}
      <div className="max-w-4xl mx-auto text-center mt-28">
        <h2 className="text-3xl md:text-4xl font-semibold text-nuqi-goldLight mb-6">
          Global Standards. Regional Insight.
        </h2>

        <p className="text-lg text-zinc-300 leading-relaxed">
          NUQI Investment Banking helps businesses across the GCC & India raise capital 
          with confidence, integrity and long-term alignment.
        </p>
      </div>
    </div>
  );
}
