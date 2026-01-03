import React, { useState, useRef, useEffect } from 'react';
import { WorkItem } from '../types';

const CATEGORIES = ["SOVEREIGNTY", "LEGACY", "ESTATES", "AUTHORITY"];

const WORKS: WorkItem[] = [
  { id: '1', title: "The Royal Mirage", category: "ESTATES", year: "2024", image: "https://picsum.photos/600/900?random=1" },
  { id: '2', title: "Desert Lineage", category: "LEGACY", year: "2023", image: "https://picsum.photos/600/900?random=2" },
  { id: '3', title: "Apex Ventures", category: "AUTHORITY", year: "2024", image: "https://picsum.photos/600/900?random=3" },
  { id: '4', title: "Crown Identity", category: "SOVEREIGNTY", year: "2023", image: "https://picsum.photos/600/900?random=4" },
  { id: '5', title: "Urban Silence", category: "ESTATES", year: "2022", image: "https://picsum.photos/600/900?random=5" },
];

const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("SOVEREIGNTY");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Wheel horizontal scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY + e.deltaX,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <section className="relative border-t border-white/10 bg-zinc-950 py-24">
      {/* Header & Tabs */}
      <div className="container mx-auto mb-16 px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
             <h3 className="mb-2 font-heading text-xs tracking-widest text-zinc-500">[ ARCHIVE ]</h3>
            <h2 className="font-heading text-5xl text-white uppercase">Selected Work</h2>
          </div>
          <div className="flex flex-wrap gap-6 text-xs tracking-widest">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border-b pb-1 transition-colors duration-300 ${
                  activeCategory === cat ? 'border-[#D4AF37] text-white' : 'border-transparent text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="hide-scrollbar flex w-full gap-8 overflow-x-auto px-6 pb-12"
      >
        {WORKS.map((work, idx) => (
          <div 
            key={work.id} 
            className="group relative h-[60vh] min-w-[300px] flex-shrink-0 cursor-pointer overflow-hidden md:min-w-[400px]"
          >
            <div className="absolute inset-0 bg-zinc-900 transition-transform duration-700 ease-out group-hover:scale-105">
              <img 
                src={work.image} 
                alt={work.title} 
                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
              <div className="flex items-baseline justify-between border-b border-white/20 pb-4">
                 <span className="font-heading text-2xl uppercase text-white">{work.title}</span>
                 <span className="font-mono text-xs text-[#D4AF37]">{work.year}</span>
              </div>
              <div className="mt-2 flex justify-between text-[10px] tracking-widest text-zinc-400">
                <span>{work.category}</span>
                <span className="translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">VIEW PROJECT &rarr;</span>
              </div>
            </div>
          </div>
        ))}
         {/* Spacer for right padding */}
         <div className="w-1 flex-shrink-0" />
      </div>
    </section>
  );
};

export default SelectedWork;