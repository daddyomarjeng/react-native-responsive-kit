import {
  fontSizes,
  gap,
  getScreenHeight,
  getScreenWidth,
  getStatusBarHeight,
  hp,
  rs,
  spacing,
  wp,
} from './sizes';

export const useSizes = () => {
  return {
    get screenWidth() {
      return getScreenWidth();
    },
    get screenHeight() {
      return getScreenHeight();
    },
    get statusBarHeight() {
      return getStatusBarHeight();
    },
    wp,
    hp,
    rs,
    fontSizes,
    spacing,
    gap,
  };
};
