import React from 'react';
import { Coins, Landmark, Sliders, Bookmark, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const services: ServiceItem[] = [
  {
    title: "NUQI Digital Wealth",
    description: "An innovative digital platform designed to bridge the gap between ethical investments and cutting-edge technology. This platform empowers clients in the UAE and India to not only create sustainable wealth but also to make a positive impact on society and the environment.",
    icon: Coins,
    linkText: "Know More >>",
    link: "/digital-wealth",
    themeColor: "#0AD1C8" // Pastel Orange
  },
  {
    title: "NUQI Investment Banking",
    details: [
  "We provide end-to-end capital advisory services, including structured corporate debt and Sukuk solutions, private credit, equity advisory for PE fundraising and strategic stake placements, as well as multi-stage growth capital raising for corporates and startups."
    ],
    icon: Landmark,
    linkText: "Know More >>",
    link: "/invest-banking",
    themeColor: "#45DFB1" // Pastel Green
  },
  {
    title: "NUQI Privé – Wealth Management",
    details: [
        "We manage investment portfolios and discretionary mandates, advise on a range of financial products, arrange and structure credit solutions, facilitate investment deals, and provide custody services through global custodian partnerships."
    ],
    icon: Sliders,
    linkText: "Know More >>",
    link: "/prive-wealth",
    themeColor: "#81D4FA" // Pastel Blue
  },
  {
    title: "Fund Business Advisory",
    description: "VCC Fund Advisory (Mauritius):\nNUQI structures and advises funds under the VCC regime, enabling cross-border investments.",
    extraInfo: [
        "Current Initiatives:",
        "NUQI Pure Impact India Equity Fund",
        "Omnivest Private Equity Fund"
    ],
    icon: Bookmark,
    linkText: "Know More >>",
    link: "/fund-advisory",
    themeColor: "#80ED99" // Pastel Gold
  }
];

const Services: React.FC = () => {
  return (
    <div>
     <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10 animate-fade-in-up">
          <span className="text-nuqi-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Comprehensive Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            Our Expertise
          </h2>
       </div>
    <section id="solutions" className="py-12 relative overflow-hidden flex flex-col items-center justify-center"
    style={{ backgroundImage: "url('../image.png')" , backgroundSize: 'cover', backgroundPosition: 'center' }}>
       {/* Background gradient hint */}
       {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-[#080808] to-black opacity-80 pointer-events-none"></div> */}

       {/* Section Header */}
      

       <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 "
        
        >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex flex-col justify-between bg-[#0B0A0A] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] card-hover-glow cursor-default"
                style={{
                    // Use CSS variable for hover effect
                    ['--card-theme' as any]: service.themeColor
                }}
              >
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
                  
                  {/* Content - Paragraph */}
                  {service.description && (
                    <div className="text-sm text-[#CCCCCC] font-light leading-relaxed mb-6 whitespace-pre-line group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </div>
                  )}

                  {/* Content - Lists */}
                  {service.details && (
                    <ul className={`text-sm text-[#CCCCCC] font-light leading-relaxed space-y-2 mb-3 ${service.listType === 'decimal' ? 'list-decimal pl-4' : 'list-none'} group-hover:text-white transition-colors duration-300`}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} className={service.listType === 'disc' ? 'flex items-start gap-2' : ''}>
                           {service.listType === 'disc' && (
                               <span 
                                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-white" 
                               />
                           )}
                           <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Extra Info (Fund Advisory) */}
                  {service.extraInfo && (
                      <div className="text-sm text-[#CCCCCC] font-light leading-relaxed space-y-1">
                          {service.extraInfo.map((line, idx) => (
                              <p key={idx} className={idx === 0 ? "font-medium text-white mt-4" : ""}>{line}</p>
                          ))}
                      </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="">
                  <Link 
                    to={service.link || '#'} 
                    className="inline-flex items-center text-sm font-bold tracking-wide transition-all group/link"
                    style={{ color: service.themeColor }}
                  >
                    <span className="relative">
                        {service.linkText.replace('>>', '')}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <ArrowRight size={14} className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
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