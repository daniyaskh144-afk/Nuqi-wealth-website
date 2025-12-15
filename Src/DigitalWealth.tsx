import Footer from "@/components/Footer";
import {
  ShieldCheck,
  LineChart,
  Globe2,
  BadgeCheck,
  BadgeDollarSign,
  Compass
} from "lucide-react";

export default function DigitalWealthAdvantages() {
  const features = [
    {
      id: "01",
      title: "DFSA Regulated",
      desc: "Operates under Category 3C standards ensuring strong governance, client safety and compliant investment processes.",
      icon: ShieldCheck,
    },
    {
      id: "02",
      title: "AI Research Engine",
      desc: "AI-powered investment intelligence built on IRIS — instant ratings, sentiment, technicals and smart comparisons.",
      icon: LineChart,
    },
    {
      id: "03",
      title: "Global Market Access",
      desc: "Invest seamlessly across global equities, ETFs, sukuk, gold and thematic global baskets.",
      icon: Globe2,
    },
    {
      id: "04",
      title: "Ethical-First Approach",
      desc: "All investment options screened for Ethical and ESG compliance, ensuring value-aligned portfolios.",
      icon: BadgeCheck,
    },
    {
      id: "05",
      title: "Transparent Pricing",
      desc: "No hidden spreads or noise. Clean, transparent pricing designed to empower investors.",
      icon: BadgeDollarSign,
    },
    {
      id: "06",
      title: "24/7 Monitoring",
      desc: "Mobile-first dashboards deliver real-time reporting, alerts and portfolio insights anytime.",
      icon: Compass,
    },
  ];

  return (
    <div className="w-full bg-black text-zinc-200 px-6 md:px-20 py-32">

      {/* Title Section */}
      <div className="max-w-7xl mx-auto mb-20 grid md:grid-cols-2 gap-10">

        <div className="space-y-4">
          <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">
            THE ADVANTAGE
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Why NUQI <br /> Digital Wealth?
          </h2>
        </div>

        <p className="text-lg text-zinc-400 mt-8 leading-relaxed">
          We combine the intelligence of modern fintech with institution-grade safety,
          transparency and global accessibility — giving investors a platform that is secure,
          informed and aligned with long-term growth.
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl overflow-hidden">

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="p-10 relative group transition-all duration-300 
                           hover:bg-white/[0.02] hover:-translate-y-[2px]"
              >
                {/* Background number */}
                <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">
                  {item.id}
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border 
                               border-nuqi-goldLight/40 transition-all duration-300
                               group-hover:border-nuqi-goldLight/80 group-hover:shadow-[0_0_15px_rgba(13,211,255,0.25)]
                               group-hover:scale-[1.07]"
                  >
                    <Icon className="w-6 h-6 text-nuqi-goldLight transition-all duration-300 
                                     group-hover:text-nuqi-goldLight/90" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                  {item.desc}
                </p>

                {/* Subtle bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-nuqi-goldLight/60 
                             transition-all duration-500 group-hover:w-full"
                />
              </div>
            );
          })}

        </div>
      </div>
      <Footer />
    </div>
  );
}
