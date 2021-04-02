import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  border-radius: 10px;
  width: 100%;
  /* height: 100px; */
`;

export const Background = styled.ImageBackground`
  padding: 10px;
  flex-direction: row;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const Content = styled.View`
  flex: 1;
  /* align-items: flex-end; */
  justify-content: space-between;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 20px;
  font-weight: 800;
  color: black;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  font-weight: 800;
  color: black;
`;

export default StyleSheet.create({
  imageBackground: {
    opacity: 0.35,
  },
});
