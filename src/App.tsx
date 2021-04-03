import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import Routes from './routes';
import {store, persistor} from './store/index';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="#000"
      />
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
