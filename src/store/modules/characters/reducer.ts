import produce from 'immer';
import {orderBy} from 'lodash';

import {SIZE_OFFSET} from '../../../common/constants';
import * as FavoritesTypes from '../favorites/types';
import {ActionInterface, CharacterInterface} from '../Interfaces';
import * as Types from './types';

export interface CharacterStateInterface {
  characters: CharacterInterface[];
  loading: boolean;
  selected?: CharacterInterface;
  page: number;
  pageTotal: number;
}

const INITIAL_STATE: CharacterStateInterface = {
  characters: [],
  loading: false,
  selected: undefined,
  page: 0,
  pageTotal: 1,
};

function character(
  state = INITIAL_STATE,
  action: ActionInterface,
): CharacterStateInterface {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_ALL_CHARACTERS_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.GET_ALL_CHARACTERS_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.GET_ALL_CHARACTERS_SUCCESS: {
        draft.loading = false;
        let page = 0;
        const pageTotal = Math.ceil(action.payload.info.total / SIZE_OFFSET);
        let characters = [];

        if (action.payload.info.offset === 0) {
          page = 1;
          characters = orderBy(
            action.payload.characters,
            ['name', 'id'],
            ['asc', 'asc'],
          );
        } else {
          page = state.page + 1;
          characters = orderBy(
            [...state.characters, ...action.payload.characters],
            ['name', 'id'],
            ['asc', 'asc'],
          );
        }

        draft.page = page;
        draft.pageTotal = pageTotal;
        draft.characters = characters;
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
