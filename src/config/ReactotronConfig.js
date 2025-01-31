/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron.configure({
  name: 'Challenge',
  host,
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: {veto: () => false},
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

tron.clear();

console.tron = tron;
