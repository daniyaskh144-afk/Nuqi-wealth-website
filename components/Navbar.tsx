import React, { useState, useEffect, } from 'react';
import { Menu, X, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '#about' },
  { label: 'Why us', href: '#why-nuqi' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Socials', href: '#footer' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a className=" cursor-pointer" href="/">
         <img src="../logo.png" alt="Wealth Thumbnail" className="h-10 w-auto" />   
          </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 py-1 group overflow-hidden"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-nuqi-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 pr-6 border-r border-white/10">
            {[Instagram, Linkedin].map((Icon, i) => (
               <a key={i} href="#" className="text-gray-400 hover:text-nuqi-gold transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(13,211,255,0.5)]">
                 <Icon size={18} />
               </a>
            ))}
          </div>
          
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-nuqi-gold transition-colors transform active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-bold text-white hover:text-nuqi-gold hover:translate-x-4 transition-all duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-8"></div>
          <a href="#" className="flex items-center gap-2 text-nuqi-gold uppercase tracking-widest text-sm font-bold">
            Contact Us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;