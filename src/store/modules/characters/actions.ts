import {ActionInterface, CharacterInterface} from '../Interfaces';
import * as Types from './types';

export function getAllCharacters(page = 1): ActionInterface {
  return {
    type: Types.GET_ALL_CHARACTERS_REQUEST,
    payload: {
      page,
    },
  };
}

export function getCharacter(id: number): ActionInterface {
  return {
    type: Types.GET_ALL_CHARACTERS_REQUEST,
    payload: {
      id,
    },
  };
}

export function showCharacter(character: CharacterInterface) {
  return {
    type: Types.SHOW_CHARACTER,
    payload: {
      character,
    },
  };
}
