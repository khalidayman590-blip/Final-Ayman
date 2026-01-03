export const FRAME_COUNT = 160;

export const generateFrameUrl = (index: number): string => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `https://fhshakiacgnsnsvbrsdz.supabase.co/storage/v1/object/public/Ayman/webp-frames/frame_${paddedIndex}_delay-0.04s.jpg`;
};

// Specifically for the seamless transition
export const LAST_FRAME_URL = generateFrameUrl(159);
