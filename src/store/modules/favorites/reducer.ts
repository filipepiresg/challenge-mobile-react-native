import produce from 'immer';
import {orderBy} from 'lodash';

import {ActionInterface, CharacterInterface} from '../Interfaces';
import * as Types from './types';

export interface FavoritesStateInterface {
  favorites: CharacterInterface[];
}

const INITIAL_STATE: FavoritesStateInterface = {
  favorites: [],
};

function favorites(
  state = INITIAL_STATE,
  action: ActionInterface,
): FavoritesStateInterface {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.ADD_FAVORITE: {
        draft.favorites = orderBy(
          [...state.favorites, action.payload.character],
          ['name', 'id'],
          ['asc', 'asc'],
        );
        break;
      }
      case Types.REMOVE_FAVORITE: {
        draft.favorites = state.favorites.filter(
          (char) => char.id !== action.payload.characterId,
        );
        break;
      }
      default:
    }
  });
}

export default favorites;
