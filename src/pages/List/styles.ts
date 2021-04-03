import {StyleSheet} from 'react-native';

import {transparentize} from 'polished';
import styled from 'styled-components/native';

import {Metrics} from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Character name',
  underlineColorAndroid: 'transparent',
})`
  padding: 12px 10px;
  font-size: 14px;
  /* flex: 1; */
  width: ${Metrics.deviceWidth - 60}px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid white;
  background-color: white;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${(props) =>
    props.disabled ? transparentize(0.2, 'red') : 'red'};

  /* height: 100%; */
  align-items: center;
  justify-content: center;
  padding: 12px 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export default StyleSheet.create({
  fadingContainer: {
    backgroundColor: 'whitesmoke',
    // paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
