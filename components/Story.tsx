import React from 'react';
import { LAST_FRAME_URL } from '../utils/frameGenerator';

const Story: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-32 text-white">
      <div className="container mx-auto px-6">
        
        {/* Editorial Headline */}
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
           <div className="lg:col-span-8">
             <h2 className="font-heading text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
               Your Identity is<br/>
               <span className="text-zinc-500">Your Financial Asset</span>
             </h2>
           </div>
           <div className="flex flex-col justify-end lg:col-span-4">
             <p className="font-arabic text-3xl text-[#D4AF37] text-right">
               هويتك هي أصلك المالي
             </p>
           </div>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            
            {/* Left Image - Continuity from Hero */}
            <div className="relative aspect-[3/4] w-full overflow-hidden border-r border-white/10 lg:aspect-auto lg:h-[800px]">
                <img 
                    src={LAST_FRAME_URL} 
                    alt="Continuity Frame" 
                    className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
                <div className="absolute bottom-6 left-6 border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md">
                    <span className="font-heading text-xs tracking-widest">FIG. 001 — THE ORIGIN</span>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between border-white/10 p-12 lg:border-t-0">
                <div className="space-y-8">
                     <div className="h-[1px] w-24 bg-[#D4AF37]"></div>
                     <p className="font-serif text-2xl leading-relaxed text-zinc-300">
                        In an economy driven by attention, sovereignty is not given—it is designed. We construct visual narratives that act as moats around your personal and commercial equity.
                     </p>
                     <p className="text-sm leading-relaxed text-zinc-500">
                        We don't just create content; we engineer authority. By leveraging high-fidelity aesthetics and strategic storytelling, we position our partners not just as participants in their industry, but as the standard-bearers.
                     </p>
                </div>

                <div className="mt-12 lg:mt-0">
                    <img 
                        src="https://github.com/hashimn1980-ux/ANEEF/blob/feat-aneef-portfolio-website-1447752366322429904/Whisk_3599ed1ff2391ad856347b196381147adr.jpeg?raw=true" 
                        alt="Texture Detail" 
                        className="h-64 w-full object-cover opacity-60 grayscale hover:opacity-100"
                    />
                    <div className="mt-4 flex justify-between font-heading text-[10px] tracking-widest text-zinc-600">
                        <span>ARCHITECTURE OF INFLUENCE</span>
                        <span>04 — 23</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Story;