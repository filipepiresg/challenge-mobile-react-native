import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {Card, List, Separator, Header} from '../../components';
import {FavoritesStateInterface} from '../../store/modules/favorites/reducer';
import {Container} from './styles';

export default () => {
  const favoritesProps = useSelector(
    (state: {favorites: FavoritesStateInterface}) => state.favorites.favorites,
  );

  const [favorites, setFavorites] = useState(favoritesProps);

  useEffect(() => {
    setFavorites(favoritesProps);
  }, [favoritesProps]);

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
