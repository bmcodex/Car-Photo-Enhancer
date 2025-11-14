import { useState, useCallback } from 'react';
import type { FilterSettings } from '@shared/presets';

type FilterState = FilterSettings;

export interface PhotoEditorState {
  originalUrl: string;
  currentUrl: string;
  filters: FilterState;
  editHistory: string[];
  presetName?: string;
}

export function usePhotoEditor(initialImageUrl: string) {
  const [state, setState] = useState<PhotoEditorState>({
    originalUrl: initialImageUrl,
    currentUrl: initialImageUrl,
    filters: {
      brightness: 0,
      contrast: 0,
      saturation: 0,
      hue: 0,
      blur: 0,
      sharpen: 0,
      vibrance: 0,
    },
    editHistory: [initialImageUrl],
    presetName: undefined,
  });

  const updateFilters = useCallback((newFilters: Partial<FilterState>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }));
  }, []);

  const setCurrentImage = useCallback((imageUrl: string, presetName?: string) => {
    setState((prev) => ({
      ...prev,
      currentUrl: imageUrl,
      editHistory: [...prev.editHistory, imageUrl],
      presetName,
    }));
  }, []);

  const undo = useCallback(() => {
    setState((prev) => {
      if (prev.editHistory.length <= 1) return prev;
      const newHistory = prev.editHistory.slice(0, -1);
      return {
        ...prev,
        currentUrl: newHistory[newHistory.length - 1],
        editHistory: newHistory,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentUrl: prev.originalUrl,
      filters: {
        brightness: 0,
        contrast: 0,
        saturation: 0,
        hue: 0,
        blur: 0,
        sharpen: 0,
        vibrance: 0,
      },
      editHistory: [prev.originalUrl],
      presetName: undefined,
    }));
  }, []);

  const canUndo = state.editHistory.length > 1;

  return {
    ...state,
    updateFilters,
    setCurrentImage,
    undo,
    reset,
    canUndo,
  };
}
