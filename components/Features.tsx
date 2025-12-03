import React from 'react';
import { ShieldCheck, TrendingUp, Globe, MapPin } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Secure & Regulated",
    description: "Operating under robust SEBI regulations ensures smooth, compliant product offerings tailored to your requirements.",
    icon: ShieldCheck
  },
  {
    title: "Tailored Equity",
    description: "Access 1,500+ carefully selected stocks screened through robust exclusion lists. Explore 18+ expertly Curated Equity Portfolios.",
    icon: TrendingUp
  },
  {
    title: "Global Access",
    description: "Unparalleled access to 9+ global markets, complemented by in-depth fundamental data at your fingertips.",
    icon: Globe
  },
  {
    title: "Local Insight",
    description: "Strategically located in Dubai and Singapore, our regional teams ensure cultural relevance wherever our clients are.",
    icon: MapPin
  }
];

const Features: React.FC = () => {
  return (
    <section id="why-nuqi" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20 items-end">
           <div className="md:col-span-5">
              <span className="text-nuqi-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Advantage</span>
              <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">Why Nuqi?</h2>
           </div>
           <div className="md:col-span-7">
              <p className="text-gray-400 font-light text-lg leading-relaxed border-l border-white/10 pl-8">
                We combine the agility of modern fintech with the security and wisdom of traditional banking to provide a platform that is secure, global, and personalized.
               </p>
           </div>
        </div>
        
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 border-t border-l border-white/10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="mb-8 flex justify-between items-start">
                 <div className="text-nuqi-gold/80 group-hover:text-nuqi-gold transition-colors transform group-hover:scale-110 duration-500">
                  <feature.icon size={36} strokeWidth={1} />
                </div>
                <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-4">{feature.title}</h3>
              
              <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base group-hover:text-gray-400 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;