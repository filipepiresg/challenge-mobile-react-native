import {FlatList} from 'react-native';

import styled from 'styled-components/native';

import {CharacterInterface} from '../../store/modules/Interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const List = styled(
  FlatList as new () => FlatList<CharacterInterface>,
).attrs({
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
