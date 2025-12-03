import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nuqi-dark text-white font-sans selection:bg-nuqi-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;