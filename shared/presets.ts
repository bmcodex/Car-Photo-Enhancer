export interface FilterSettings {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  sharpen: number;
  vibrance: number;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  icon: string;
  filters: FilterSettings;
  category: 'shine' | 'effect' | 'color' | 'detail';
}

export const PRESETS: Record<string, Preset> = {
  gloss: {
    id: 'gloss',
    name: 'Gloss',
    description: 'High shine with bright highlights',
    icon: '✨',
    category: 'shine',
    filters: {
      brightness: 15,
      contrast: 25,
      saturation: 10,
      hue: 0,
      blur: 0,
      sharpen: 5,
      vibrance: 15,
    },
  },
  metallic: {
    id: 'metallic',
    name: 'Metallic Reflection',
    description: 'Reflective surface effect',
    icon: '🔷',
    category: 'shine',
    filters: {
      brightness: 10,
      contrast: 35,
      saturation: 5,
      hue: 0,
      blur: 0,
      sharpen: 10,
      vibrance: 5,
    },
  },
  deepPaint: {
    id: 'deepPaint',
    name: 'Deep Paint',
    description: 'Rich, saturated colors',
    icon: '🎨',
    category: 'color',
    filters: {
      brightness: 0,
      contrast: 20,
      saturation: 40,
      hue: 0,
      blur: 0,
      sharpen: 0,
      vibrance: 25,
    },
  },
  nightNeon: {
    id: 'nightNeon',
    name: 'Night Neon',
    description: 'Neon glow effect',
    icon: '🌃',
    category: 'effect',
    filters: {
      brightness: -20,
      contrast: 40,
      saturation: 50,
      hue: 0,
      blur: 2,
      sharpen: 8,
      vibrance: 35,
    },
  },
  wheelDetail: {
    id: 'wheelDetail',
    name: 'Wheel Detail',
    description: 'Sharpness and contrast boost',
    icon: '⚙️',
    category: 'detail',
    filters: {
      brightness: 5,
      contrast: 40,
      saturation: 15,
      hue: 0,
      blur: 0,
      sharpen: 25,
      vibrance: 10,
    },
  },
};

export const PRESET_CATEGORIES = {
  shine: 'Shine & Reflection',
  effect: 'Effects',
  color: 'Color',
  detail: 'Detail & Sharpness',
};
