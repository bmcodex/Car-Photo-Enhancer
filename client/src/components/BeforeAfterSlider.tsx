import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title = 'Before & After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <Card className="overflow-hidden">
      <div className="space-y-2 p-4 bg-card">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground">
          Drag the slider to compare before and after
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full bg-black cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ aspectRatio: '16/9' }}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-xs font-medium">
            Before
          </div>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
            style={{ width: `${(100 / sliderPosition) * 100}%` }}
          />
          <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded text-xs font-medium">
            After
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/80 transition-all"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
            <svg
              className="w-4 h-4 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
}
