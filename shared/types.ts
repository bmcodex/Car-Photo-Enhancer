/**
 * Unified type exports
 * Import shared types from this single entry point.
 */

export type * from "../drizzle/schema";
export * from "./_core/errors";


export interface PhotoEditState {
  originalUrl: string;
  currentUrl: string;
  presetName?: string;
  filters: FilterState;
  editHistory: EditHistoryItem[];
}

export interface FilterState {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  sharpen: number;
  vibrance: number;
}

export interface EditHistoryItem {
  timestamp: number;
  imageUrl: string;
  operation: 'preset' | 'filter' | 'blur' | 'reflection' | 'color';
  details?: Record<string, any>;
}

export interface PresetOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}
