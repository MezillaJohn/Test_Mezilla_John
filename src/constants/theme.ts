import {Platform} from 'react-native';

const COLORS = {
  primary: '#01BC8D',
  primaryLighter: '#C3DAD2',
  primaryLightOne: '#F0FFFA',
  primaryLightTwo: 'rgba(136, 234, 200, .1)',
  primaryLightThree: '#E1FFF7',
  primaryCurrency: '#e6f7f2',
  secondary: '#fafffe',
  tertiary: '#F39C12',
  whiteOne: '#f2f7f6',
  whitePrimary: '#fafffd',
  whiteTwo: '#f2f7f6',
  whiteThree: '#ebf0ef',
  grayOne: '#767676',
  grayTwo: '#ddd',
  grayThree: '#aaa',
  dark: '#101010',
  darkTwo: '#888',
  darkThree: '#222',
  darkFour: '#555',
  danger: '#FF7108',
  backdropOverlay: 'rgba(0,0,0,0.4)',
};

const SIZES = {
  xxSmall: 6,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: COLORS.grayThree,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  medium: {
    elevation: 6,
    shadowColor: '#666',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  large: {
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
};

export {COLORS, SIZES, SHADOWS};
