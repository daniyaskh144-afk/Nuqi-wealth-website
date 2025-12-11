import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  // Current: Suit/Cufflinks (Wealth & Lifestyle)
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
  // Skyscrapers (Growth & Structure)
  "/Golden Towers.png",
  // Handshake/Meeting (Partnership & Trust)
  "/Pen.png",
  // Abstract Architecture (Innovation)
  "/stone.png"
];

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle Parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-nuqi-dark">
      {/* Background Carousel with Parallax */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect applied to all
            }}
          >
             {/* Dark overlay for text readability */}
             {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div> */}
          </div>
        ))}
      </div>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="flex h-px w-12 bg-nuqi-gold"></span>
            <span className="text-nuqi-gold uppercase tracking-[0.3em] text-xs font-bold">The Gold Collar Life</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.95] tracking-tight">
            Empowering <br />
            Wealth with <br></br><span className="italic font-normal bg-gradient-to-r from-nuqi-gold to-nuqi-goldDark bg-clip-text text-transparent">Integrity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl border-l border-white/10 pl-8 backdrop-blur-sm">
            Nuqi delivers sustainable growth, prosperity, and financial security through innovative strategies and expert guidance, tailored specifically to your aspirations.
          </p>
          
          <div className="flex flex-wrap gap-6 my-6 items-center">
            {/* Primary Button */}
            
            <a href="#solutions" className="group relative px-6 py-5 border-solid border-[#000000] border-[1px] bg-[#0dd3ff] text-black overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgb(13, 211, 255,0.5)] hover:scale-105 active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-nuqi-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
              <span className="relative z-10 font-bold tracking-widest text-xs uppercase flex items-center gap-2 group-hover:text-black transition-colors">
                Explore Solutions
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>

            {/* Secondary Button */}
             <button className="group relative px-5 py-4 border-solid border-[#0dd3ff] border-[1px] text-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgb(13, 211, 255,0.5)] hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-nuqi-gold/10 translate-y-full transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 font-medium tracking-widest text-xs uppercase group-hover:text-nuqi-gold transition-colors">
                Contact Our Team
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-500 hover:h-2 ${
              idx === currentSlide ? 'w-8 bg-nuqi-gold shadow-[0_0_10px_#0dd3ff]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 animate-float cursor-pointer hover:text-nuqi-gold transition-colors group">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-current to-transparent group-hover:via-nuqi-gold transition-colors"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] group-hover:tracking-[0.5em] transition-all duration-500">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;