import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      <div className="container mx-auto px-6 pt-24 pb-12">
        
        {/* Massive Call To Action */}
        <div className="mb-24 text-center">
            <h2 className="font-heading text-[12vw] leading-none font-bold uppercase tracking-tighter text-white mix-blend-difference hover:text-[#D4AF37] transition-colors duration-500 cursor-pointer">
                The Gate <br/> Is Narrow
            </h2>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 border-t border-white/10 pt-12">
            
            {/* Col 1: Location */}
            <div className="space-y-4">
                <h4 className="font-heading text-xs tracking-widest text-zinc-500 mb-6">[ LOCATION ]</h4>
                <p className="font-serif text-sm text-zinc-300">
                    Dubai Design District<br/>
                    Building 3, Office 204<br/>
                    United Arab Emirates
                </p>
            </div>

            {/* Col 2: Contact */}
            <div className="space-y-4">
                <h4 className="font-heading text-xs tracking-widest text-zinc-500 mb-6">[ INQUIRIES ]</h4>
                <a href="mailto:access@visualsovereignty.com" className="block font-serif text-sm text-zinc-300 hover:text-[#D4AF37]">
                    access@visualsovereignty.com
                </a>
                <p className="font-serif text-sm text-zinc-300">
                    +971 50 000 0000
                </p>
            </div>

             {/* Col 3: Social */}
             <div className="space-y-4">
                <h4 className="font-heading text-xs tracking-widest text-zinc-500 mb-6">[ STALK ]</h4>
                <div className="flex flex-col space-y-2">
                    {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map(social => (
                        <a key={social} href="#" className="font-heading text-sm uppercase tracking-wide text-zinc-300 hover:translate-x-2 hover:text-[#D4AF37] transition-all duration-300">
                            {social}
                        </a>
                    ))}
                </div>
            </div>

            {/* Col 4: Legal */}
            <div className="space-y-4">
                 <h4 className="font-heading text-xs tracking-widest text-zinc-500 mb-6">[ LEGAL ]</h4>
                 <div className="flex flex-col space-y-2">
                    <a href="#" className="text-xs text-zinc-600 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-xs text-zinc-600 hover:text-white">Terms of Engagement</a>
                    <span className="text-xs text-zinc-800 mt-4">© 2024 Visual Sovereignty</span>
                 </div>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;