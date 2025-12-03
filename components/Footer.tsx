import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute -top-20 -right-20 text-[25vw] font-bold text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter">
        nuqi
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 group">
              <img src="../logo.png" alt="Wealth Thumbnail" className="h-10 w-auto" />   
                </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Empowering wealth with integrity. Join us in shaping the future of ethical finance.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-nuqi-gold hover:scale-110 hover:shadow-[0_0_15px_rgba(13,211,255,0.4)] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase text-glow">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {['Nuqi Wealth', 'Nuqi Gold', 'Nuqi Sukuk'].map((link) => (
                <li key={link}><a href="#" className="hover:text-nuqi-gold hover:translate-x-1 transition-all duration-300 block">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase text-glow">Products</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {['Ethosphere', 'Iris'].map((link) => (
                <li key={link}><a href="#" className="hover:text-nuqi-gold hover:translate-x-1 transition-all duration-300 block">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase text-glow">Get Started</h4>
             <div className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-nuqi-gold/50 transition-colors duration-500 group relative overflow-hidden rounded-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-nuqi-gold/5 rounded-full blur-2xl group-hover:bg-nuqi-gold/20 transition-colors duration-500"></div>
                <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed group-hover:text-gray-300">Ready to start your ethical wealth journey today?</p>
                <button className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest relative overflow-hidden rounded-sm group/btn hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                     <div className="absolute inset-0 w-full h-full bg-nuqi-gold transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out origin-left"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-black transition-colors">
                        Contact Us <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                </button>
             </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-medium tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Nuqi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-nuqi-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-nuqi-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;