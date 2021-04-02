import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './src/App';

if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
