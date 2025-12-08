import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-24 items-start">
        
        {/* Left Side: Title */}
        <div className="md:col-span-4 relative">
             <div className="md:sticky md:top-40">
                <span className="text-nuqi-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block opacity-80">Who we are</span>
                <h2 className="text-5xl md:text-6xl font-normal text-white tracking-tight leading-none">
                  About <br /> Nuqi
                </h2>
                {/* Decorative Line */}
                <div className="w-full h-px bg-white/10 mt-12 mb-8 hidden md:block"></div>
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span>01</span>
                    <span className="h-px w-8 bg-gray-700"></span>
                    <span>Introduction</span>
                </div>
             </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:col-span-8">
            <div className="prose prose-invert max-w-none">
                 <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.15] mb-10">
                  A Global Financial Ecosystem <span className="block mt-2 text-nuqi-gold inline-block">Built for Tomorrow</span>
                </h3>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    <p className="border-l-2 border-nuqi-gold/20 pl-6 border-opacity-50">
                    Nuqi is a forward-thinking group of companies working at the intersection of finance, technology, and asset intelligence. From institutional capital strategies to cutting-edge fintech solutions, we empower businesses, investors, and governments to manage, grow, and protect value — across borders and generations.
                    </p>
                    <p>
                    With a strong foundation rooted in trust and strategic innovation, we bring together the reliability of traditional finance with the agility of modern tools.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;