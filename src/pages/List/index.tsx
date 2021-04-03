import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Keyboard, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE_OFFSET} from '../../common/constants';
import {Spinner, List, Separator, Header} from '../../components';
import Card from '../../components/Card';
import {getAllCharacters as fetchAllCharacters} from '../../services/characters';
import {
  getAllCharactersRequest,
  getAllCharactersSuccess,
  getAllCharactersFailure,
} from '../../store/modules/characters/actions';
import {CharacterStateInterface} from '../../store/modules/characters/reducer';
import styles, {Container, Input, Button} from './styles';

export default () => {
  const dispatch = useDispatch();
  const {characters, loading, page, pageTotal} = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters,
  );

  const [search, setSearch] = useState('');
  const [isShowFilter, setShowFilter] = useState(false);
  const [state, setState] = useState({
    page,
    pageTotal,
    loading,
  });

  const isMouted = useRef(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fetchCharacters = useCallback(
    async (_page: number = 0, _name?: string) => {
      try {
        Keyboard.dismiss();

        if (_page > 0 && _page >= pageTotal) return;

        dispatch(getAllCharactersRequest());

        const name = !_name ? undefined : _name;

        const {
          data: {
            data: {results, ...info},
          },
        } = await fetchAllCharacters(_page * SIZE_OFFSET, name);

        dispatch(getAllCharactersSuccess(results, info));
      } catch (error) {
        console.log('Error on fetch characters', error);

        dispatch(getAllCharactersFailure(error.message));
      }
    },
    [dispatch, pageTotal],
  );

  useEffect(() => {
    fetchCharacters().finally(() => {
      isMouted.current = true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setState({
      page,
      pageTotal,
      loading,
    });
  }, [page, pageTotal, loading]);

  return (
    <Container>
      <Header
        hasSearch
        onPress={() => {
          if (!isShowFilter) {
            Animated.timing(fadeAnim, {
              toValue: 60,
              duration: 300,
              useNativeDriver: false,
            }).start(() => {
              setShowFilter(true);
            });
          } else {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }).start(() => {
              setShowFilter(false);
            });
          }
        }}
      />

      <Animated.View
        style={[
          styles.fadingContainer,
          {
            height: fadeAnim,
            opacity: fadeAnim.interpolate({
              inputRange: [30, 60],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Input
          value={search}
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={setSearch}
          onSubmitEditing={() => {
            fetchCharacters(0, search);
          }}
          returnKeyType="send"
        />

        <Button
          onPress={() => {
            fetchCharacters(0, search);
          }}>
          <Ionicons name="search" size={18} color="white" />
        </Button>
      </Animated.View>

      <List
        data={characters}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <Card data={item} />}
        ItemSeparatorComponent={() => <Separator />}
        onEndReached={() => {
          if (state.loading || !isMouted.current || characters.length < 20) {
            return;
          }

          fetchCharacters(state.page);
        }}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => {
          if (!state.loading) {
            return null;
          }

          return (
            <View>
              <Spinner />
            </View>
          );
        }}
      />
    </Container>
  );
};
