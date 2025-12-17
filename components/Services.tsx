import React from "react";
import { Coins, Landmark, Sliders, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "NUQI Digital Wealth",
    description:
      "An innovative digital platform designed to bridge the gap between ethical investments and cutting-edge technology. This platform empowers clients in the UAE and India to build sustainable wealth with impact.",
    icon: Coins,
    linkText: "Know More >>",
    link: "/digital-wealth",
    themeColor: "orange",
    bgimage: "/digital-wealth-bg.png",
  },
  {
    title: "NUQI Investment Banking",
    details: [
      "End-to-end capital advisory including structured corporate debt, Sukuk solutions, private credit, and equity advisory for PE fundraising and strategic stake placements.",
    ],
    icon: Landmark,
    linkText: "Know More >>",
    link: "/invest-banking",
    themeColor: "#45DFB1",
    bgimage: "/invest-banking-bg.png",
  },
  {
    title: "NUQI Privé – Wealth Management",
    details: [
      "Discretionary portfolio management, advisory on financial products, structured credit solutions, custody services, and global investment facilitation.",
    ],
    icon: Sliders,
    linkText: "Know More >>",
    link: "/prive-wealth",
    themeColor: "violet",
    bgimage: "/prive-wealth-bg.png",
  },
  {
    title: "Fund Business Advisory",
    description:
      "VCC Fund Advisory (Mauritius):\nNUQI structures and advises funds under the VCC regime, enabling efficient cross-border investments.",
    extraInfo: [
      "Current Initiatives:",
      "NUQI Pure Impact India Equity Fund",
      "Omnivest Private Equity Fund",
    ],
    icon: Bookmark,
    linkText: "Know More >>",
    link: "/fund-advisory",
    themeColor: "#0dd3ff",
    bgimage: "/fund-advisory-bg.png",
  },
];

const Services: React.FC = () => {
  const [activeBg, setActiveBg] = React.useState(
    "/services-default-bg.png"
  );

  return (
    <div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-nuqi-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
          Comprehensive Solutions
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-white">
          Our Expertise
        </h2>
      </div>

      <section
        className="py-12 relative overflow-hidden transition-all duration-700"
        style={{
          backgroundImage: `url(${activeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        <div className="relative z-10">


          {/* Cards */}
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <article
                  key={index}
                  onMouseEnter={() => setActiveBg(service.bgimage)}
                  onMouseLeave={() => setActiveBg("/services-default-bg.png")}
                  className="group flex flex-col justify-between bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] card-hover-glow cursor-default"
                  style={{
                    // Use CSS variable for hover effect
                    ['--card-theme' as any]: service.themeColor
                  }}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon */}
                      <div
                        className="mb-6 transition-transform duration-500 group-hover:scale-110 origin-left"
                        style={{ color: service.themeColor }}
                      >
                        <service.icon size={42} strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-normal mb-6 leading-tight"
                        style={{ color: service.themeColor }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      {service.description && (
                        <p className="text-sm text-[#CCCCCC] font-light leading-relaxed mb-6 whitespace-pre-line group-hover:text-white transition-colors duration-300">
                          {service.description}
                        </p>
                      )}

                      {/* Details */}
                      {service.details && (
                        <ul className="text-sm text-[#CCCCCC] font-light leading-relaxed space-y-2 mb-3 group-hover:text-white transition-colors duration-300">
                          {service.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}

                      {/* Extra Info */}
                      {service.extraInfo && (
                        <div className="text-sm text-[#CCCCCC] font-light leading-relaxed space-y-1">
                          {service.extraInfo.map((line, idx) => (
                            <p
                              key={idx}
                              className={idx === 0 ? "font-medium text-white mt-4" : ""}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Link */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-sm font-bold tracking-wide mt-6 transition-all group/link"
                      style={{ color: service.themeColor }}
                    >
                      <span className="relative">
                        {service.linkText.replace(">>", "")}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <ArrowRight
                        size={14}
                        className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <style>{`
         .card-hover-glow:hover {
            border-color: var(--card-theme);
            box-shadow: 0 10px 25px -12px var(--card-theme);
         }
       `}</style>
      </section>
    </div>
  );
};

export default Services;
