import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, X } from 'lucide-react';

interface PhotoUploaderProps {
  onUpload: (file: File, preview: string) => void;
}

export default function PhotoUploader({ onUpload }: PhotoUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreview(result);
      onUpload(file, result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const clearPreview = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (preview) {
    return (
      <Card className="p-4 space-y-4">
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img src={preview} alt="Preview" className="w-full h-auto" />
        </div>
        <Button
          variant="outline"
          onClick={clearPreview}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Choose Different Photo
        </Button>
      </Card>
    );
  }

  return (
    <Card
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`p-8 border-2 border-dashed transition-smooth cursor-pointer ${
        isDragging
          ? 'border-primary bg-primary/5'
          : 'border-border hover:border-primary/50'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        className="text-center space-y-3"
      >
        <div className="flex justify-center">
          <Upload className="w-12 h-12 text-muted-foreground" />
        </div>
        <div>
          <p className="font-semibold">Upload your car photo</p>
          <p className="text-sm text-muted-foreground">
            Drag and drop or click to select
          </p>
        </div>
        <Button variant="outline">Select Photo</Button>
      </div>
    </Card>
  );
}
