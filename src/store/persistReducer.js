import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: '@ChallengeMobile',
      storage: AsyncStorage,
      whitelist: ['favorites'],
    },
    reducers,
  );

  return persistedReducer;
};
