import {
  ActionInterface,
  CharacterInterface,
  InfoInterface,
} from '../Interfaces';
import * as Types from './types';

export function getAllCharactersRequest(): ActionInterface {
  return {
    type: Types.GET_ALL_CHARACTERS_REQUEST,
  };
}

export function getAllCharactersSuccess(
  characters: CharacterInterface[],
  info: InfoInterface,
): ActionInterface {
  return {
    type: Types.GET_ALL_CHARACTERS_SUCCESS,
    payload: {
      characters,
      info,
    },
  };
}

export function getAllCharactersFailure(error: string): ActionInterface {
  return {
    type: Types.GET_ALL_CHARACTERS_FAILURE,
    payload: {
      error,
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
