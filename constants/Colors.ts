/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};


export const COLORS = {
  primary: {
    uKnomiLogoGreen: "#00DF7E",
    uKnomiLogoGrey: "#333333",
  },
  secondary: {
    midGreen: "#5DC587",
    lightGreen: "#E6FCF3",
    burntRed: "#C84F2F",
    lightRed: "#FAEDEA",
  },
  gray: {
    black: "#000000",
    white: "#FFFFFF",
    midGray: "#C4C4C4",
    lightGray: "#EAEAEA",
    lightGrayBackground: "#F8F8F8",
  },
  darkMode: {
    background: "#181822",
    mid: "#272735",
    darkGreen: "#134034",
    redError: "#F38989",
    redErrorTextFields: "#311B1B",
  },
  semantic: {
    yellow: "#FFC90A",
    blue: "#00A2CC",
    red: "#FD4141",
    green: "#68BA2E",
  },
  loyalty: {
    bronze: "#A87C0C",
    gold: "#BEAB00",
    platinum: "#D5E4E5",
    silver: "#9A9A9A",
    noTier: "#616170",
  }
}