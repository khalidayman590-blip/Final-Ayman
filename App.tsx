import React, { useState } from 'react';
import FilmGrain from './components/FilmGrain';
import Preloader from './components/Preloader';
import HeroCanvas from './components/HeroCanvas';
import SelectedWork from './components/SelectedWork';
import Mandates from './components/Mandates';
import Story from './components/Story';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <FilmGrain />
      
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* 
        We render the main content but keep it hidden or underneath 
        until loading is complete to ensure smooth transition. 
        However, for the HeroCanvas to initialize properly, 
        it's often better to mount it.
      */}
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Navigation - Minimal Sticky */}
        <nav className="fixed top-0 left-0 w-full z-40 mix-blend-difference px-8 py-6 flex justify-between items-center">
            <div className="font-heading font-bold text-xl uppercase tracking-tighter">VS.</div>
            <div className="hidden md:flex gap-8 text-[10px] font-heading tracking-[0.2em]">
                <button className="hover:text-[#D4AF37] transition-colors">WORK</button>
                <button className="hover:text-[#D4AF37] transition-colors">MANDATES</button>
                <button className="hover:text-[#D4AF37] transition-colors">STORY</button>
            </div>
            <div className="font-heading text-[10px] tracking-[0.2em] border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">
                MENU
            </div>
        </nav>

        <HeroCanvas />
        <SelectedWork />
        <Mandates />
        <Story />
        <Footer />
      </main>
    </div>
  );
};

export default App;