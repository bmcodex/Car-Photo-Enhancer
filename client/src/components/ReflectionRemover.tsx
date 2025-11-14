import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Sparkles } from 'lucide-react';

interface ReflectionRemoverProps {
  imageUrl: string;
  onRemove: (processedImageUrl: string) => void;
}

export default function ReflectionRemover({ imageUrl, onRemove }: ReflectionRemoverProps) {
  const [intensity, setIntensity] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeReflections = async () => {
    setIsProcessing(true);
    try {
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

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Apply reflection removal algorithm
        // This reduces bright spots and glare
        const factor = intensity / 100;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Calculate brightness
          const brightness = (r + g + b) / 3;

          // If pixel is very bright (likely a reflection), reduce it
          if (brightness > 200) {
            const reduction = (brightness - 150) * factor;
            data[i] = Math.max(0, r - reduction);
            data[i + 1] = Math.max(0, g - reduction);
            data[i + 2] = Math.max(0, b - reduction);
          }
        }

        ctx.putImageData(imageData, 0, 0);

        // Apply additional filters
        ctx.filter = `contrast(${100 + intensity * 0.3}%) saturate(${100 - intensity * 0.2}%)`;
        ctx.drawImage(canvas, 0, 0);

        const processedUrl = canvas.toDataURL('image/jpeg', 0.95);
        onRemove(processedUrl);
      };
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Reflection Remover
        </h3>
        <p className="text-sm text-muted-foreground">
          Reduce glare and reflections from your car photos
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Intensity: {intensity}%</label>
          <Slider
            value={[intensity]}
            onValueChange={(val) => setIntensity(val[0])}
            min={0}
            max={100}
            step={5}
            className="mt-2"
          />
        </div>

        <Button
          onClick={removeReflections}
          disabled={isProcessing}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {isProcessing ? 'Processing...' : 'Remove Reflections'}
        </Button>
      </div>
    </Card>
  );
}
