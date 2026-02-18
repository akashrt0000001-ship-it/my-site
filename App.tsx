
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="bio" className="py-20 bg-slate-50/50">
          <Bio />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
};

export default App;
