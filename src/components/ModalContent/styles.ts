import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {transparentize} from 'polished';
import styled from 'styled-components/native';

import {Metrics} from '../../styles';

export const Container = styled.View`
  background-color: white;
  /* margin-top: 20px; */
  width: ${Metrics.deviceWidth * 0.9}px;
  height: ${Metrics.deviceHeight * 0.7}px;
  align-self: center;
  border-radius: 10px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${Metrics.deviceWidth * 0.9}px;
  height: ${Metrics.deviceHeight * 0.2}px;
  opacity: 0.7;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 10,
  },
})`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  min-height: 40px;
`;

export const FieldTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const WrapperCount = styled.View`
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  /* padding:10px; */
  height: 25px;
  /* width: 25px; */
  padding: 0 10px;
  border-radius: 12.5px;
  background-color: lightgray;
`;

export const FieldCount = styled.Text`
  /* height: 20px; */
  font-size: 12px;
  /* background-color: grey; */
  /* border-radius: 10px; */
  /* padding: 10px; */
  font-weight: bold;
`;

export const Description = styled.TextInput.attrs({
  editable: false,
  multiline: true,
  underlineColorAndroid: 'transparent',
})`
  width: 100%;
  background-color: ${transparentize(0.2, 'lightgray')};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
`;

export const ButtonProfile = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  /* top: 10px; */
  right: 0;
  background-color: blueviolet;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const ProfileText = styled.Text`
  font-size: 12px;
  color: white;
`;

export const ListItem = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 10px;
`;

export const Item = styled.View`
  margin-right: 10px;
  height: 150px;
  width: 100px;
  align-items: center;
  justify-content: flex-end;
  background-color: lightgray;
  padding: 10px;
`;

export const ItemText = styled.Text.attrs({
  numberOfLines: 5,
})`
  flex-wrap: wrap;
  font-size: 13px;
  font-weight: 600;
  color: black;
  text-align: left;
`;

export const AndMoreItem = styled.Text`
  font-size: 16px;
  font-weight: 900;
  color: black;
`;

export default StyleSheet.create({
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  hasMore: {
    height: 150,
    justifyContent: 'center',
  },
});
