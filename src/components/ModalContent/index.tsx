import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
  memo,
} from 'react';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {get} from 'lodash';

import {CharacterStateInterface} from '../../store/modules/characters/reducer';
import {
  addCharacter,
  removeCharacter,
} from '../../store/modules/favorites/actions';
import {FavoritesStateInterface} from '../../store/modules/favorites/reducer';
import styles, {
  Container,
  Image,
  Description,
  Name,
  Content,
  FieldTitle,
  FieldCount,
  ButtonProfile,
  ProfileText,
  WrapperCount,
  WrapperTitle,
  ListItem,
  Item,
  ItemText,
  AndMoreItem,
} from './styles';

const CONTENTS = [
  {
    key: 'comics',
    value: 'Comics',
  },
  {
    key: 'series',
    value: 'Series',
  },
  {
    key: 'stories',
    value: 'Stories',
  },
  {
    key: 'events',
    value: 'Events',
  },
];

const ModalContent: React.FC = () => {
  const dispatch = useDispatch();
  const selectedChar = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters.selected,
  );

  const [isFavorited, setFavorited] = useState(false);
  const [selected, setSelected] = useState(selectedChar);

  const favorites = useSelector(
    (state: {favorites: FavoritesStateInterface}) => state.favorites.favorites,
  );

  const uri = useMemo(
    () =>
      `${get(selected, 'thumbnail.path', '')}/detail.${get(
        selected,
        'thumbnail.extension',
        '',
      )}`.replace(/(^\w+:|^)\/\//, 'https://'),
    [selected],
  );

  useEffect(() => {
    if (setSelected) setSelected(selectedChar);
  }, [selectedChar]);

  useEffect(() => {
    const isFavorite =
      favorites.findIndex(
        (favorite) => favorite.id === get(selected, 'id', ''),
      ) >= 0;

    setFavorited(isFavorite);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const toggleFavorite = useCallback(() => {
    if (selected) {
      dispatch(
        !isFavorited ? addCharacter(selected) : removeCharacter(selected.id),
      );
    }
  }, [dispatch, isFavorited, selected]);

  return (
    <Container>
      <View>
        <Image
          source={{
            uri,
          }}
        />
        <Name>{selected?.name}</Name>
        <Pressable onPress={toggleFavorite} style={styles.favoriteButton}>
          <Ionicons
            name={isFavorited ? 'heart' : 'heart-dislike-outline'}
            size={30}
            color="red"
          />
        </Pressable>
      </View>
      <Content>
        <WrapperTitle>
          {!!selected?.description && <FieldTitle>Description</FieldTitle>}

          <ButtonProfile>
            <ProfileText>Open profile</ProfileText>
          </ButtonProfile>
        </WrapperTitle>
        {!!selected?.description && (
          <Description value={get(selected, 'description', '')} />
        )}

        {CONTENTS.map(({value: title, key}, index) => (
          <Fragment key={String(index)}>
            <WrapperTitle>
              <FieldTitle>{title}</FieldTitle>

              <WrapperCount>
                <FieldCount>
                  {get(selected, `[${key}].available`, 0)}
                </FieldCount>
              </WrapperCount>
            </WrapperTitle>
            <View>
              <ListItem>
                {get(selected, `[${key}].items`, []).map(
                  (
                    item: {name: string},
                    index_key: number,
                    arr: Array<{name: string}>,
                  ) => {
                    const isLast = index_key + 1 === arr.length;
                    const hasMore =
                      get(selected, `[${key}].available`, 0) > arr.length;

                    return (
                      <Fragment key={String(`${key}-${index_key}`)}>
                        <Item>
                          <ItemText>{item.name}</ItemText>
                        </Item>
                        {isLast && hasMore && (
                          <View style={styles.hasMore}>
                            <AndMoreItem>...and more</AndMoreItem>
                          </View>
                        )}
                      </Fragment>
                    );
                  },
                )}
              </ListItem>
            </View>
          </Fragment>
        ))}
      </Content>
    </Container>
  );
};
export default memo(ModalContent);
