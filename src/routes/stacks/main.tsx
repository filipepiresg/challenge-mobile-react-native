import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from '../../pages';
import TabStack from './tab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Main" component={TabStack} />
  </Stack.Navigator>
);
