import React from 'react';
import {useSelector} from 'react-redux';

import {Card, List, Separator, Header} from '../../components';
import {FavoritesStateInterface} from '../../store/modules/favorites/reducer';
import {Container} from './styles';

export default () => {
  const {favorites} = useSelector(
    (state: {favorites: FavoritesStateInterface}) => state.favorites,
  );

  return (
    <Container>
      <Header />

      <List
        data={favorites}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <Card data={item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};
