import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import PhotoEditor from './PhotoEditor';
import LicensePlateBurrer from './LicensePlateBurrer';
import ReflectionRemover from './ReflectionRemover';
import ColorCorrection from './ColorCorrection';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Wand2, Shield, Sparkles, Palette, Eye } from 'lucide-react';

interface AdvancedEditorProps {
  imageUrl: string;
  onSave?: (editedImageUrl: string, presetName?: string) => void;
}

export default function AdvancedEditor({ imageUrl, onSave }: AdvancedEditorProps) {
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [originalImage] = useState(imageUrl);
  const [editHistory, setEditHistory] = useState<string[]>([imageUrl]);

  const handleImageUpdate = (newImageUrl: string) => {
    setCurrentImage(newImageUrl);
    setEditHistory([...editHistory, newImageUrl]);
  };

  const undo = () => {
    if (editHistory.length > 1) {
      const newHistory = editHistory.slice(0, -1);
      setEditHistory(newHistory);
      setCurrentImage(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="editor" className="flex items-center gap-2">
            <Wand2 className="w-4 h-4" />
            <span className="hidden sm:inline">Editor</span>
          </TabsTrigger>
          <TabsTrigger value="plate" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Plate</span>
          </TabsTrigger>
          <TabsTrigger value="reflection" className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Glare</span>
          </TabsTrigger>
          <TabsTrigger value="color" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Color</span>
          </TabsTrigger>
          <TabsTrigger value="compare" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Compare</span>
          </TabsTrigger>
        </TabsList>

        {/* Editor Tab */}
        <TabsContent value="editor" className="space-y-4">
          <PhotoEditor
            imageUrl={currentImage}
            onSave={(editedUrl, presetName) => {
              handleImageUpdate(editedUrl);
              if (onSave) {
                onSave(editedUrl, presetName);
              }
            }}
          />
        </TabsContent>

        {/* License Plate Tab */}
        <TabsContent value="plate" className="space-y-4">
          <LicensePlateBurrer
            imageUrl={currentImage}
            onBlur={(blurredUrl) => handleImageUpdate(blurredUrl)}
          />
        </TabsContent>

        {/* Reflection Removal Tab */}
        <TabsContent value="reflection" className="space-y-4">
          <ReflectionRemover
            imageUrl={currentImage}
            onRemove={(processedUrl) => handleImageUpdate(processedUrl)}
          />
        </TabsContent>

        {/* Color Correction Tab */}
        <TabsContent value="color" className="space-y-4">
          <ColorCorrection
            imageUrl={currentImage}
            onApply={(correctedUrl) => handleImageUpdate(correctedUrl)}
          />
        </TabsContent>

        {/* Comparison Tab */}
        <TabsContent value="compare" className="space-y-4">
          <Card className="p-4">
            <BeforeAfterSlider
              beforeImage={originalImage}
              afterImage={currentImage}
              title="Full Editing Comparison"
            />
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit History Info */}
      <Card className="p-4 bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Edit History</p>
            <p className="text-xs text-muted-foreground">
              {editHistory.length} edits applied
            </p>
          </div>
          {editHistory.length > 1 && (
            <button
              onClick={undo}
              className="text-sm px-3 py-1 rounded bg-background hover:bg-background/80 transition-smooth"
            >
              Undo
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
