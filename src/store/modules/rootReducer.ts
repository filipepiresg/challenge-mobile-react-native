import {combineReducers} from 'redux';

import character from './characters/reducer';
import favorites from './favorites/reducer';

export default combineReducers({
  character,
  favorites,
});
