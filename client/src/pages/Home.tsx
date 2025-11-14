import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { APP_LOGO, APP_TITLE, getLoginUrl } from '@/const';
import PhotoUploader from '@/components/PhotoUploader';
import PhotoEditor from '@/components/PhotoEditor';

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleUpload = (file: File, preview: string) => {
    setUploadedImage(preview);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-5xl font-bold">🚗</div>
          <h1 className="text-4xl font-bold">Car Photo Enhancer</h1>
          <p className="text-lg text-gray-300">
            Professional photo editing for your car photos. Apply stunning presets and adjustments instantly.
          </p>
          <Button
            onClick={() => (window.location.href = getLoginUrl())}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            Sign In to Start
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚗</span>
            <h1 className="text-xl font-bold">{APP_TITLE}</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            Welcome, {user?.name || 'User'}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {!uploadedImage ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Enhance Your Car Photos</h2>
              <p className="text-muted-foreground">
                Upload a photo and choose from professional presets designed specifically for car photography
              </p>
            </div>
            <PhotoUploader onUpload={handleUpload} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setUploadedImage(null)}
              >
                Back to Upload
              </Button>
            </div>
            <PhotoEditor
              imageUrl={uploadedImage}
              onSave={(editedUrl, presetName) => {
                console.log('Photo saved:', { editedUrl, presetName });
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
