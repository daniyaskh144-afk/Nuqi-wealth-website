import React from 'react';
import { Check } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section className="py-40 relative bg-nuqi-dark overflow-hidden">
       {/* Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 animate-fade-in-up">
            <span className="text-nuqi-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Our Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-10 tracking-tight">A Shared Journey</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
                From first-time investors to experienced wealth-builders, our users aren't just clients — they are collaborators in financial empowerment.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* List */}
            <div className="order-2 md:order-1">
                <p className="font-light text-2xl text-white mb-8 italic border-b border-white/10 pb-4 inline-block">We bring together:</p>
                <div className="space-y-4">
                     {[
                        "Ethical investors who care about impact",
                        "Financially curious individuals seeking knowledge",
                        "Parents and guardians building legacies",
                        "Young changemakers investing early",
                        "Global citizens navigating finance"
                     ].map((item, idx) => (
                        <div key={idx} className="group flex items-center gap-6 p-5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-nuqi-gold/30 transition-all duration-300 transform hover:-translate-x-[-10px]">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nuqi-gold/10 flex items-center justify-center text-nuqi-gold group-hover:bg-nuqi-gold group-hover:text-black transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(13,211,255,0)] group-hover:shadow-[0_0_15px_rgba(13,211,255,0.4)]">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{item}</span>
                        </div>
                     ))}
                </div>
            </div>

            {/* Quote Card */}
            <div className="order-1 md:order-2 relative">
                <div className="relative z-10 bg-[#0A0A0A] border border-white/10 p-12 md:p-16 rounded-sm shadow-2xl shadow-black/50 overflow-hidden group hover:border-white/20 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-nuqi-gold/5 rounded-full blur-[80px] group-hover:bg-nuqi-gold/10 transition-colors duration-700"></div>
                    
                    <div className="absolute top-8 left-8 text-8xl text-white/5 font-serif leading-none opacity-50 group-hover:text-nuqi-gold/20 transition-colors duration-500">"</div>
                    <p className="text-2xl md:text-3xl font-light text-white leading-relaxed italic relative z-10">
                        Through education, access, and transparent technology, we've cultivated a safe space where financial growth is grounded in values — not just returns.
                    </p>
                    <div className="mt-10 flex items-center gap-5 relative z-10">
                        <img src="" alt="" />
                        <div>
                            <p className="text-white text-sm font-bold tracking-widest uppercase group-hover:text-nuqi-gold transition-colors">The Nuqi Team</p>
                            <p className="text-nuqi-gold text-xs uppercase tracking-wider mt-1 opacity-80 group-hover:opacity-100">Visionaries</p>
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-6 -right-6 w-full h-full border border-white/5 z-0 rounded-sm group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Community;