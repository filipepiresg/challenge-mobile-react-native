import {FlatList} from 'react-native';

import styled from 'styled-components/native';

import {CharacterInterface} from '../store/modules/Interfaces';

export {default as Card} from './Card';
export {default as Header} from './Header';
export {default as ModalContent} from './ModalContent';

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'black',
})`
  margin: 10px 0;
`;

export const List = styled(
  FlatList as new () => FlatList<CharacterInterface>,
).attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 10,
  },
})`
  padding: 0 10px;
  background-color: whitesmoke;
`;

export const Separator = styled.View`
  height: 10px;
`;
