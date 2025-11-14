import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Eye, EyeOff } from 'lucide-react';

interface LicensePlateBurrerProps {
  imageUrl: string;
  onBlur: (blurredImageUrl: string) => void;
}

export default function LicensePlateBurrer({ imageUrl, onBlur }: LicensePlateBurrerProps) {
  const [blurRadius, setBlurRadius] = useState(15);
  const [showPreview, setShowPreview] = useState(true);
  const [plateArea, setPlateArea] = useState({
    x: 0.3,
    y: 0.8,
    width: 0.4,
    height: 0.1,
  });

  const applyBlur = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      // Calculate blur area in pixels
      const x = img.width * plateArea.x;
      const y = img.height * plateArea.y;
      const width = img.width * plateArea.width;
      const height = img.height * plateArea.height;

      // Apply blur filter to the license plate area
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.fillRect(x, y, width, height);

      // Redraw the image with blur applied
      ctx.filter = 'none';
      ctx.drawImage(img, 0, 0);

      // Apply blur effect to specific area
      const imageData = ctx.getImageData(x, y, width, height);
      ctx.filter = `blur(${blurRadius}px)`;
      ctx.putImageData(imageData, x, y);

      const blurredUrl = canvas.toDataURL('image/jpeg', 0.95);
      onBlur(blurredUrl);
    };
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">License Plate Blur</h3>
        <p className="text-sm text-muted-foreground">
          Automatically blur license plates for privacy
        </p>
      </div>

      <div className="relative rounded-lg overflow-hidden bg-black">
        <img
          src={imageUrl}
          alt="License plate preview"
          className="w-full h-auto"
        />
        {showPreview && (
          <div
            className="absolute border-2 border-red-500 opacity-50"
            style={{
              left: `${plateArea.x * 100}%`,
              top: `${plateArea.y * 100}%`,
              width: `${plateArea.width * 100}%`,
              height: `${plateArea.height * 100}%`,
            }}
          />
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Blur Radius: {blurRadius}px</label>
          <Slider
            value={[blurRadius]}
            onValueChange={(val) => setBlurRadius(val[0])}
            min={5}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm"
          >
            {showPreview ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Hide Area
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Show Area
              </>
            )}
          </Button>
          <Button onClick={applyBlur} className="bg-primary hover:bg-primary/90">
            Apply Blur
          </Button>
        </div>
      </div>
    </Card>
  );
}
