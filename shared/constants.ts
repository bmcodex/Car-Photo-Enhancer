export const APP_NAME = 'Car Photo Enhancer';
export const APP_DESCRIPTION = 'Professional photo editing for car photography';
export const APP_VERSION = '1.0.0';

export const MAX_IMAGE_SIZE = 50 * 1024 * 1024; // 50MB
export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp'];

export const BLUR_PRESETS = {
  LIGHT: 5,
  MEDIUM: 15,
  HEAVY: 30,
  EXTREME: 50,
};

export const FILTER_RANGES = {
  BRIGHTNESS: { min: -50, max: 50 },
  CONTRAST: { min: -50, max: 50 },
  SATURATION: { min: -50, max: 100 },
  HUE: { min: -180, max: 180 },
  BLUR: { min: 0, max: 50 },
  SHARPEN: { min: 0, max: 50 },
  VIBRANCE: { min: -50, max: 100 },
};

export const PRESET_CATEGORIES = {
  SHINE: 'Shine & Reflection',
  EFFECT: 'Effects',
  COLOR: 'Color',
  DETAIL: 'Detail & Sharpness',
};

export const EDITOR_TABS = {
  EDITOR: 'editor',
  PLATE: 'plate',
  REFLECTION: 'reflection',
  COLOR: 'color',
  COMPARE: 'compare',
};

export const TOAST_MESSAGES = {
  UPLOAD_SUCCESS: 'Photo uploaded successfully',
  UPLOAD_ERROR: 'Failed to upload photo',
  EDIT_SUCCESS: 'Changes applied successfully',
  EDIT_ERROR: 'Failed to apply changes',
  DOWNLOAD_SUCCESS: 'Photo downloaded successfully',
  DOWNLOAD_ERROR: 'Failed to download photo',
};
