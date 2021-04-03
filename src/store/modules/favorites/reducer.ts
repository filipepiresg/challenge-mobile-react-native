import produce from 'immer';
import {findIndex, orderBy} from 'lodash';

import * as CharacterTypes from '../characters/types';
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
      case CharacterTypes.GET_ALL_CHARACTERS_SUCCESS: {
        draft.favorites = state.favorites.map((favorite) => {
          let newCharacter = favorite;

          const index = findIndex(action.payload.characters, [
            'id',
            favorite.id,
          ]);
          if (index >= 0) {
            newCharacter = action.payload.characters[index];
          }

          return newCharacter;
        });
        break;
      }
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
