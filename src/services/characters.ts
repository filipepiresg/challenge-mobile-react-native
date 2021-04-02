import api from './api';

export function getAllCharacters(offset: number) {
  return api.get('v1/public/characters', {
    params: {
      orderBy: 'name',
      offset,
      limit: 20,
    },
    timeout: 20 * 1000,
  });
}

export function getCharacter(characterId: number) {
  return api.get(`v1/public/characters/${characterId}`, {
    timeout: 20 * 1000,
  });
}
