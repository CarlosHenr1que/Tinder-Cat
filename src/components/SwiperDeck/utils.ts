const {Dimensions} = require('react-native');

const {width, height} = Dimensions.get('screen');

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.78,
  BORDER_RADIUS: 16,
  OUT_OF_SCREEN: width + 0.5 * width,
  PLACE_HOLDER:
    'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
};
