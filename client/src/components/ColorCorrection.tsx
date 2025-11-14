import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { RotateCcw } from 'lucide-react';

interface ColorCorrectionProps {
  imageUrl: string;
  onApply: (correctedImageUrl: string) => void;
}

export default function ColorCorrection({ imageUrl, onApply }: ColorCorrectionProps) {
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const applyCorrection = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Build filter string
      const filters = [
        `brightness(${100 + brightness}%)`,
        `contrast(${100 + contrast}%)`,
        `saturate(${100 + saturation}%)`,
        `sepia(${Math.max(0, temperature * 0.5)}%)`,
      ].join(' ');

      ctx.filter = filters;
      ctx.drawImage(img, 0, 0);

      const correctedUrl = canvas.toDataURL('image/jpeg', 0.95);
      onApply(correctedUrl);
    };
  };

  const resetAll = () => {
    setBrightness(0);
    setContrast(0);
    setSaturation(0);
    setTemperature(0);
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Color Correction</h3>
        <p className="text-sm text-muted-foreground">
          Fine-tune the colors and lighting of your photo
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Brightness: {brightness}</label>
          <Slider
            value={[brightness]}
            onValueChange={(val) => setBrightness(val[0])}
            min={-50}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Contrast: {contrast}</label>
          <Slider
            value={[contrast]}
            onValueChange={(val) => setContrast(val[0])}
            min={-50}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Saturation: {saturation}</label>
          <Slider
            value={[saturation]}
            onValueChange={(val) => setSaturation(val[0])}
            min={-50}
            max={100}
            step={1}
            className="mt-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Temperature: {temperature > 0 ? 'Warm' : temperature < 0 ? 'Cool' : 'Neutral'}
          </label>
          <Slider
            value={[temperature]}
            onValueChange={(val) => setTemperature(val[0])}
            min={-50}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={resetAll}
          className="flex-1"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        <Button
          onClick={applyCorrection}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          Apply Correction
        </Button>
      </div>
    </Card>
  );
}
