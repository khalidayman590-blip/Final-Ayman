import React from 'react';
import { MandateItem } from '../types';

const MANDATES: MandateItem[] = [
  {
    title: "THE PARTNERSHIP",
    subtitle: "Retainer Model",
    description: "Ongoing visual governance for established personal brands requiring consistent, high-velocity output.",
    features: ["Strategic Art Direction", "Monthly Asset Packs", "Priority Access"]
  },
  {
    title: "THE EXCLUSIVE",
    subtitle: "One-Time Commission",
    description: "Singular, high-impact campaigns designed to shift market perception and establish immediate authority.",
    features: ["Brand Identity Overhaul", "Cinematic Production", "Launch Strategy"]
  },
  {
    title: "ASSET VALUATION",
    subtitle: "Real Estate & Equity",
    description: "Visual documentation and presentation layers for high-value physical assets and portfolios.",
    features: ["Property Cinematography", "Investor Decks", "Virtual Tours"]
  }
];

const Mandates: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-white">
        <div className="border-t border-b border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {MANDATES.map((item, index) => (
                    <div 
                        key={index} 
                        className={`group relative flex flex-col justify-between border-white/10 p-12 transition-colors hover:bg-white/5 ${
                            index !== MANDATES.length - 1 ? 'md:border-r border-b md:border-b-0' : ''
                        }`}
                    >
                        <div className="mb-24">
                            <h4 className="mb-4 font-heading text-xs tracking-[0.2em] text-[#D4AF37]">
                                0{index + 1}
                            </h4>
                            <h3 className="mb-2 font-heading text-4xl font-medium uppercase">
                                {item.title}
                            </h3>
                            <p className="font-serif text-lg italic text-zinc-400">
                                {item.subtitle}
                            </p>
                        </div>
                        
                        <div>
                            <p className="mb-8 text-sm leading-relaxed text-zinc-300">
                                {item.description}
                            </p>
                            <ul className="space-y-2 border-t border-white/10 pt-6 text-xs tracking-widest text-zinc-500">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="mr-2 h-1 w-1 bg-[#D4AF37]"></span>
                                        {feature.toUpperCase()}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Mandates;