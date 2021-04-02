import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
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
import {Container} from './styles';

export default () => {
  const dispatch = useDispatch();
  const {characters, loading, page, pageTotal} = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters,
  );

  const [state, setState] = useState({
    page,
    pageTotal,
    loading,
  });

  const isMouted = useRef(false);

  const fetchCharacters = useCallback(
    async (_page: number = 0) => {
      if (page >= pageTotal) return;

      try {
        dispatch(getAllCharactersRequest());

        const {
          data: {
            data: {results, ...info},
          },
        } = await fetchAllCharacters(_page * SIZE_OFFSET);

        dispatch(getAllCharactersSuccess(results, info));
      } catch (error) {
        console.log('Error on fetch characters', error);

        dispatch(getAllCharactersFailure(error.message));
      }
    },
    [dispatch, page, pageTotal],
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
      <Header hasSearch />

      <List
        data={characters}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <Card data={item} />}
        ItemSeparatorComponent={() => <Separator />}
        onEndReached={() => {
          if (state.loading || !isMouted.current) {
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
