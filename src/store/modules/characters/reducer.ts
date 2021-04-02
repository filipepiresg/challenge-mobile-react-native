import produce from 'immer';
import {orderBy} from 'lodash';

import * as FavoritesTypes from '../favorites/types';
import {ActionInterface, CharacterInterface} from '../Interfaces';
import * as Types from './types';

export interface CharacterStateInterface {
  characters: CharacterInterface[];
  loading: boolean;
  selected: CharacterInterface | null;
  page: number;
  pageTotal: number;
}

const INITIAL_STATE: CharacterStateInterface = {
  characters: [],
  loading: false,
  selected: null,
  page: 0,
  pageTotal: 1,
};

function character(
  state = INITIAL_STATE,
  action: ActionInterface,
): CharacterStateInterface {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_ALL_CHARACTERS_REQUEST:
      case Types.GET_ALL_CHARACTERS_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.GET_ALL_CHARACTERS_SUCCESS: {
        draft.loading = false;
        draft.page = action.payload.data.offset;
        draft.pageTotal = action.payload.data.total;
        draft.characters = orderBy(
          [...state.characters, ...action.payload.data.results],
          ['name', 'id'],
          ['asc', 'asc'],
        );
        break;
      }
      case FavoritesTypes.SELECT_FAVORITE:
      case Types.SHOW_CHARACTER: {
        draft.selected = action.payload.character;
        break;
      }
      default:
    }
  });
}

export default character;
