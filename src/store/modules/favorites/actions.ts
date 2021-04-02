import {CharacterInterface} from '../Interfaces';
import * as Types from './types';

export function addCharacter(character: CharacterInterface) {
  return {
    type: Types.ADD_FAVORITE,
    payload: {
      character,
    },
  };
}

export function removeCharacter(characterId: number) {
  return {
    type: Types.ADD_FAVORITE,
    payload: {
      characterId,
    },
  };
}
