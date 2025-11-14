import { FilterSettings } from './presets';

export function applyFiltersToCanvas(
  canvas: HTMLCanvasElement,
  filters: FilterSettings
): string {
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const filterString = buildFilterString(filters);
  ctx.filter = filterString;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL('image/jpeg', 0.95);
}

export function buildFilterString(filters: FilterSettings): string {
  const parts: string[] = [];

  if (filters.brightness !== 0) {
    parts.push(`brightness(${100 + filters.brightness}%)`);
  }

  if (filters.contrast !== 0) {
    parts.push(`contrast(${100 + filters.contrast}%)`);
  }

  if (filters.saturation !== 0) {
    parts.push(`saturate(${100 + filters.saturation}%)`);
  }

  if (filters.hue !== 0) {
    parts.push(`hue-rotate(${filters.hue}deg)`);
  }

  if (filters.blur !== 0) {
    parts.push(`blur(${filters.blur}px)`);
  }

  return parts.length > 0 ? parts.join(' ') : 'none';
}

export async function detectAndBlurLicensePlate(
  imageUrl: string
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageUrl);
        return;
      }

      ctx.drawImage(img, 0, 0);

      // Simulate license plate detection - blur bottom center area
      const blurRadius = Math.min(canvas.width, canvas.height) * 0.15;
      const centerX = canvas.width / 2;
      const bottomY = canvas.height * 0.85;

      ctx.filter = `blur(${blurRadius}px)`;
      ctx.fillRect(
        centerX - blurRadius * 1.5,
        bottomY - blurRadius * 0.5,
        blurRadius * 3,
        blurRadius
      );

      resolve(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.onerror = () => resolve(imageUrl);
    img.src = imageUrl;
  });
}

export async function removeReflections(imageUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageUrl);
        return;
      }

      ctx.drawImage(img, 0, 0);

      // Apply filters to reduce reflections
      ctx.filter = 'contrast(1.2) saturate(0.95)';
      ctx.drawImage(img, 0, 0);

      resolve(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.onerror = () => resolve(imageUrl);
    img.src = imageUrl;
  });
}

export function applyColorCorrection(
  imageUrl: string,
  brightness: number,
  contrast: number,
  saturation: number
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageUrl);
        return;
      }

      const filterString = `brightness(${100 + brightness}%) contrast(${100 + contrast}%) saturate(${100 + saturation}%)`;
      ctx.filter = filterString;
      ctx.drawImage(img, 0, 0);

      resolve(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.onerror = () => resolve(imageUrl);
    img.src = imageUrl;
  });
}
