import Footer from "@/components/Footer";
import {
    Landmark,
    Layers,
    Globe2,
    Handshake,
    ShieldCheck,
    BarChart3,
    Building2,
    FolderSearch,
} from "lucide-react";

export default function FundBusinessAdvisor() {
    return (
        <div className="w-full min-h-screen bg-black text-zinc-200 px-6 md:px-20 pt-32 pb-32">

            {/* SECTION 1 — HERO SECTION */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                {/* LEFT */}
                <div className="space-y-10">
                    <div className="space-y-2">
                        <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">
                            FUND BUSINESS ADVISORY
                        </p>

                        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                            NUQI <br /> Fund Advisory
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
                        Designing Ethical,
                        <span className="block mt-4 text-nuqi-goldLight">
                            Globally Compliant Funds
                        </span>
                    </h2>


                    <div className="flex gap-6">
                        <div className="w-1 bg-nuqi-goldLight/40 rounded-full"></div>

                        <p className="text-lg text-zinc-300 leading-relaxed">
                            NUQI’s Fund Business Advisory specialises in structuring, designing and
                            advising investment vehicles under globally compliant frameworks — with
                            deep expertise in the Mauritius VCC Fund regime, GCC cross-border capital
                            markets, and ethically aligned investment architectures.
                        </p>
                    </div>

                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Our approach ensures institutional governance, transparent reporting,
                        and value-aligned investment design for global allocators and fund managers.
                    </p>
                </div>
            </div>

            {/* SPACER */}
            <div className="h-24"></div>

            {/* SECTION 2 — WHAT WE DO */}
            <PageGridSection
                label="WHAT WE DO"
                title="Our Core Capabilities"
                items={[
                    {
                        id: "01",
                        title: "Structure & Manage Cross-Border Funds",
                        icon: <Globe2 className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Full-spectrum structuring support for GCC–India–Mauritius mandates.",
                    },
                    {
                        id: "02",
                        title: "Regulatory Setup & Fund Operations",
                        icon: <Landmark className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Advising on licensing, operational workflows and custodian arrangements.",
                    },
                    {
                        id: "03",
                        title: "Ethical, ESG & Impact Strategy Design",
                        icon: <Layers className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Fund strategies aligned with responsible, screened and impact-driven themes.",
                    },
                    {
                        id: "04",
                        title: "Institutional Fundraising Support",
                        icon: <Handshake className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Capital raising frameworks and investor reporting models for global LPs.",
                    },
                ]}
            />

            {/* SECTION 3 — CURRENT INITIATIVES */}
            <PageGridSection
                label="CURRENT INITIATIVES"
                title="Active Fund Vehicles"
                items={[
                    {
                        id: "01",
                        title: "NUQI Pure Impact India Equity Fund",
                        icon: <BarChart3 className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Long-term impact themes rooted in India’s structural growth. Ethically screened portfolio architecture.",
                    },
                    {
                        id: "02",
                        title: "Omnivest Private Equity Fund",
                        icon: <Building2 className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "High-quality PE opportunities backed by rigorous due diligence and institutional selection.",
                    },
                ]}
            />

            {/* SECTION 4 — OUR EDGE */}
            <PageGridSection
                label="OUR EDGE"
                title="Why NUQI Fund Advisory"
                items={[
                    {
                        id: "01",
                        title: "Strong DIFC Regulatory Backing",
                        icon: <ShieldCheck className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Operates under DFSA governance and institutional-grade risk frameworks.",
                    },
                    {
                        id: "02",
                        title: "NUQI Ecosystem Advantage",
                        icon: <FolderSearch className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Access to ethical screening, multi-custody, quant-risk models and cross-border structuring expertise.",
                    },
                    {
                        id: "03",
                        title: "Cross-Border Mandate Integration",
                        icon: <Globe2 className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Ability to design and operate GCC–India–Mauritius fund strategies seamlessly.",
                    },
                    {
                        id: "04",
                        title: "Institutional Governance",
                        icon: <ShieldCheck className="w-6 h-6 text-nuqi-goldLight" />,
                        desc: "Independent valuation mechanisms and conflict-free advisory oversight.",
                    },
                ]}
            />

            {/* FINAL STATEMENT */}
            <div className="max-w-4xl mx-auto text-center mt-28">
                <h2 className="text-3xl md:text-4xl font-semibold text-nuqi-goldLight mb-6">
                    Structured. Ethical. Globally Compliant.
                </h2>

                <p className="text-lg text-zinc-300 leading-relaxed">
                    NUQI Fund Advisory enables global investors to participate in innovation, impact
                    and ethical growth stories through transparent, well-governed and globally
                    compliant fund structures.
                </p>
            </div>
        </div>
    );
}

/* -----------------------------------------------------
Reusable Grid Section Component
----------------------------------------------------- */
function PageGridSection({ label, title, items }) {
    return (
        <div className="max-w-7xl mx-auto mt-28">
            <p className="text-sm tracking-[0.2em] text-nuqi-goldLight">{label}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-12">{title}</h2>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

                    {items.map((item, i) => (
                        <div key={i} className="p-10 relative group transition-all duration-300 hover:bg-white/[0.02]">
                            <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">
                                {item.id}
                            </span>

                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-nuqi-goldLight/40 transition group-hover:border-nuqi-goldLight/80">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-nuqi-goldLight/60 transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
