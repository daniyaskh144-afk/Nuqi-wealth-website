import About from '@/components/About';
import Community from '@/components/Community';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nuqi-dark text-white font-sans selection:bg-nuqi-gold selection:text-black">
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <Services />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;