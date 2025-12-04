// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Features from './components/Features';
// import Community from './components/Community';
// import Footer from './components/Footer';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-nuqi-dark text-white font-sans selection:bg-nuqi-gold selection:text-black">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Features />
//         <Community />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Src/Home";
import DigitalWealth from "./Src/DigitalWealth";
import InvestmentBanking from "./Src/InvestmentBanking";
import PriveWealth from "./Src/PriveWealth";
import FundBusinessAdvisor from "./Src/FundBusinessAdvisor";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-wealth" element={<DigitalWealth/>} />
        <Route path="/invest-banking" element={<InvestmentBanking />} />
        <Route path="/prive-wealth" element={<PriveWealth />} />
        <Route path="/fund-advisory" element={<FundBusinessAdvisor />} />
      </Routes>
    </Router>
  );
}

export default App;
