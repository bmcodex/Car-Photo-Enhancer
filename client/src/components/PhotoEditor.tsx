import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Download, RotateCcw, Copy } from 'lucide-react';
import { PRESETS, FilterSettings } from '@shared/presets';
import { buildFilterString } from '@shared/imageProcessing';

interface PhotoEditorProps {
  imageUrl: string;
  onSave?: (editedImageUrl: string, presetName?: string) => void;
}

export default function PhotoEditor({ imageUrl, onSave }: PhotoEditorProps) {
  const [filters, setFilters] = useState<FilterSettings>({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    hue: 0,
    blur: 0,
    sharpen: 0,
    vibrance: 0,
  });

  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = imageUrl;
      }
    };
  }, [imageUrl]);

  const applyPreset = (presetId: string) => {
    const preset = PRESETS[presetId];
    if (preset) {
      setFilters(preset.filters);
      setSelectedPreset(presetId);
    }
  };

  const resetFilters = () => {
    setFilters({
      brightness: 0,
      contrast: 0,
      saturation: 0,
      hue: 0,
      blur: 0,
      sharpen: 0,
      vibrance: 0,
    });
    setSelectedPreset(null);
  };

  const downloadImage = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const filterString = buildFilterString(filters);
      ctx.filter = filterString;
      ctx.drawImage(img, 0, 0);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.download = `edited-photo-${Date.now()}.jpg`;
      link.click();

      if (onSave) {
        onSave(link.href, selectedPreset || undefined);
      }
    };
  };

  const filterString = buildFilterString(filters);

  return (
    <div className="w-full space-y-6">
      {/* Preview Section */}
      <Card className="overflow-hidden smooth-shadow">
        <div className="relative bg-black">
          {showComparison ? (
            <div className="flex gap-0">
              <div className="flex-1 relative">
                <img
                  src={imageUrl}
                  alt="Original"
                  className="w-full h-auto block"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  Before
                </div>
              </div>
              <div className="flex-1 relative">
                <img
                  ref={imageRef}
                  src={imageUrl}
                  alt="Edited"
                  style={{ filter: filterString }}
                  className="w-full h-auto block"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  After
                </div>
              </div>
            </div>
          ) : (
            <img
              ref={imageRef}
              src={imageUrl}
              alt="Edited"
              style={{ filter: filterString }}
              className="w-full h-auto block"
            />
          )}
        </div>
      </Card>

      {/* Comparison Toggle */}
      <div className="flex gap-2">
        <Button
          variant={showComparison ? 'default' : 'outline'}
          onClick={() => setShowComparison(!showComparison)}
          className="flex-1"
        >
          <Copy className="w-4 h-4 mr-2" />
          {showComparison ? 'Hide Comparison' : 'Show Comparison'}
        </Button>
      </div>

      {/* Presets Grid */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Presets</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {Object.entries(PRESETS).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => applyPreset(key)}
              className={`p-3 rounded-lg text-center transition-smooth ${selectedPreset === key ? 'ring-2 ring-primary bg-primary/10' : 'bg-card hover:bg-card/80'}`}
            >
              <div className="text-2xl mb-1">{preset.icon}</div>
              <div className="text-xs font-medium">{preset.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Adjustments</h3>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium">Brightness: {filters.brightness}</label>
            <Slider
              value={[filters.brightness]}
              onValueChange={(val) =>
                setFilters({ ...filters, brightness: val[0] })
              }
              min={-50}
              max={50}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Contrast: {filters.contrast}</label>
            <Slider
              value={[filters.contrast]}
              onValueChange={(val) =>
                setFilters({ ...filters, contrast: val[0] })
              }
              min={-50}
              max={50}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Saturation: {filters.saturation}</label>
            <Slider
              value={[filters.saturation]}
              onValueChange={(val) =>
                setFilters({ ...filters, saturation: val[0] })
              }
              min={-50}
              max={100}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Vibrance: {filters.vibrance}</label>
            <Slider
              value={[filters.vibrance]}
              onValueChange={(val) =>
                setFilters({ ...filters, vibrance: val[0] })
              }
              min={-50}
              max={100}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Sharpen: {filters.sharpen}</label>
            <Slider
              value={[filters.sharpen]}
              onValueChange={(val) =>
                setFilters({ ...filters, sharpen: val[0] })
              }
              min={0}
              max={50}
              step={1}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={resetFilters}
          className="flex-1"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        <Button
          onClick={downloadImage}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
}
