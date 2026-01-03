import React, { useEffect, useState } from 'react';
import { generateFrameUrl, FRAME_COUNT } from '../utils/frameGenerator';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const preloadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = generateFrameUrl(index);
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
          resolve();
        };
        img.onerror = () => {
          // Resolve anyway to prevent blocking if one frame fails
          loadedCount++; 
          resolve(); 
        };
        images.push(img);
      });
    };

    const loadAll = async () => {
      // Load in batches to avoid network congestion
      const batchSize = 10;
      for (let i = 0; i < FRAME_COUNT; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, FRAME_COUNT); j++) {
          batch.push(preloadImage(j));
        }
        await Promise.all(batch);
      }
      
      // Artificial delay for smooth UX transition
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    loadAll();
    
    // Cleanup not really needed as images are cached by browser, 
    // but good practice to avoid memory leaks if we stored them in state.
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white">
      <div className="w-64 space-y-4">
        <div className="flex justify-between text-xs font-heading tracking-widest text-zinc-400">
          <span>LOADING ASSETS</span>
          <span>{progress}%</span>
        </div>
        <div className="h-[1px] w-full bg-zinc-900">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center font-arabic text-sm text-[#D4AF37] opacity-80 mt-4">
            السيادة البصرية
        </div>
      </div>
    </div>
  );
};

export default Preloader;