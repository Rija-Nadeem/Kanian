import {Dimensions, Platform} from 'react-native';

export const colors = {
  primary: '#fff',
  secondary: '#101010',
  background: '#f2f6ff',
  button: '#ff5016',
  darkBackground: '#1d1d1d',
  lightBackground: '#f2f6ff',
  grey: '#a3a3a3',
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const metrics = {
  width: width,
  height: height,
  defaultMargin: Dimensions.get('window').width * 0.05,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
};

export const fonts = {
  primary: Platform.select({
    android:'',
    ios:'ArialMT'
  }),
  primaryBold: Platform.select({
    android:'',
    ios:'Arial-BoldMT'
  }),
  secondary: Platform.select({
    android:'',
    ios:'Futura-Medium'
  }),
  secondaryBold: Platform.select({
    android:'',
    ios:'Futura-Bold'
  }),
}
