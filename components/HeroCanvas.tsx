import React, { useEffect, useRef, useState } from 'react';
import { generateFrameUrl, FRAME_COUNT } from '../utils/frameGenerator';

const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load images into memory for instant access
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = generateFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = images[index];

    if (canvas && ctx && img) {
      // "Object-cover" logic for canvas
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      // We want the animation to start when the container is at the top
      // and end when the bottom of the container meets the bottom of the viewport (or slightly earlier)
      const scrollHeight = rect.height - windowHeight;
      const scrollTop = -rect.top;
      
      let progress = scrollTop / scrollHeight;
      progress = Math.max(0, Math.min(1, progress));

      const frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
      
      requestAnimationFrame(() => drawFrame(frameIndex));
    };

    const handleResize = () => {
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            // Redraw current frame
            handleScroll();
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    handleResize();
    drawFrame(0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, images]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 z-10">
          <div className="text-center space-y-6 mix-blend-difference">
            <h2 className="font-arabic text-2xl md:text-4xl text-[#D4AF37] tracking-wider mb-4 animate-fade-in-up">
              السيادة البصرية
            </h2>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white leading-none">
              Visual<br/>Sovereignty
            </h1>
            <button className="mt-12 border border-white/30 bg-white/5 px-8 py-4 text-xs font-bold tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
              [ REQUEST ACCESS ]
            </button>
          </div>
          
          <div className="absolute bottom-12 left-0 w-full flex justify-between px-8 text-[10px] tracking-widest text-white/50 font-heading">
            <span>SCROLL TO EXPLORE</span>
            <span>EST. 2024</span>
            <span>DUBAI, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCanvas;