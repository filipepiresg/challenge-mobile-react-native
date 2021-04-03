import {RouteProp} from '@react-navigation/native';

import {CharacterInterface} from '../store/modules/Interfaces';

export type MainStackParam = {
  Main: undefined;
  Character: {
    character: CharacterInterface;
  };
};

export type CharacterScreenRouteProp = RouteProp<MainStackParam, 'Character'>;
