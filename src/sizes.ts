import { Dimensions, Platform, StatusBar } from 'react-native';

let { width, height } = Dimensions.get('window');

// Listen for screen changes
Dimensions.addEventListener('change', ({ window }) => {
  width = window.width;
  height = window.height;
});

/**
 * Returns the width of the screen (always updated)
 */
export const getScreenWidth = () => width;

/**
 * Returns the height of the screen (always updated)
 */
export const getScreenHeight = () => height;

/**
 * Returns the height of the status bar
 */
export const getStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight || 0;
  }
  return 20;
};

/**
 * Calculates width as a percentage of screen width
 */
export const wp = (percentage: number) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100');
  }
  return (percentage / 100) * getScreenWidth();
};

/**
 * Calculates height as a percentage of screen height
 */
export const hp = (percentage: number) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100');
  }
  return (percentage / 100) * getScreenHeight();
};

/**
 * Responsive Size
 *
 * @param {number | null | undefined} s - Size value (optional)
 * @returns {number | null} - Scaled size or null
 */
export const rs = (s?: number | null | undefined): number => {
  if (s == null || !s) return (hp(15) / 100) * 12;
  return (((s / 100) * getScreenHeight()) / 100) * 12;
};

/**
 * Responsive Spacing Sizes
 * Using common naming conventions (Tailwind-like)
 */
export const spacing = {
  xs: rs(4),
  sm: rs(8),
  md: rs(16),
  lg: rs(24),
  xl: rs(32),
  xl2: rs(40),
  xl3: rs(48),
  xl4: rs(56),
  xl5: rs(64),
  xl6: rs(72),
  xl7: rs(80),
  xl8: rs(88),
  xl9: rs(96),
  xl10: rs(104),
};

/**
 * Generates gap styles for flex layouts
 *
 * @param {keyof typeof spacing} sizeKey - Spacing key (like 'md', 'lg')
 * @returns {{ gap: number }}
 */
export const gap = (sizeKey: keyof typeof spacing) => {
  return { gap: spacing[sizeKey] };
};

/**
 * Responsive Font Sizes
 * Using common naming conventions (Tailwind-like)
 */
export const fontSizes = {
  xs: rs(10),
  sm: rs(12),
  md: rs(14),
  lg: rs(16),
  xl: rs(18),
  xl2: rs(20),
  xl3: rs(24),
  xl4: rs(28),
  xl5: rs(32),
  xl6: rs(36),
  xl7: rs(40),
  xl8: rs(44),
  xl9: rs(48),
  xl10: rs(52),
  xl11: rs(56),
  xl12: rs(60),
  xl13: rs(64),
  xl14: rs(68),
  xl15: rs(72),
  xl16: rs(76),
};

/**
 * Sizes object
 * Responsive Sizes
 * Using common naming conventions (Tailwind-like)
 */
export const sizes = {
  get screenWidth() {
    return getScreenWidth();
  },
  get screenHeight() {
    return getScreenHeight();
  },
  get statusBarHeight() {
    return getStatusBarHeight();
  },
  fontSizes,
  spacing,
  gap,
  wp,
  hp,
  rs,
};
