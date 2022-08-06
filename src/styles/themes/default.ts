import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  title: 'default',

  colors: {
    primary: '#FFFFFF',
    secundary: '#434141',
    background: '#FBFAFF',
  },

  metrics: {
    baseMargin: 8,
    basePadding: 8,
    baseRadius: 16,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
  },
};
