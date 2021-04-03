import React, {useEffect, useMemo} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {CharacterScreenRouteProp} from '../../routes/types';
import {Container} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute<CharacterScreenRouteProp>();

  const character = useMemo(() => route.params?.character, [
    route.params?.character,
  ]);

  useEffect(() => {
    if (character.name)
      navigation.setOptions({
        headerTitle: character.name,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Container />;
};
