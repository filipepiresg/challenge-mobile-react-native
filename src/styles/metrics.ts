import {Dimensions} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('screen');

export default {
  deviceHeight,
  deviceWidth,
};