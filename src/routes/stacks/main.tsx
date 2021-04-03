import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Character} from '../../pages';
import {MainStackParam} from '../types';
import TabStack from './tab';

const Stack = createStackNavigator<MainStackParam>();

export default () => (
  <Stack.Navigator
    initialRouteName="Main"
    headerMode="screen"
    screenOptions={{
      headerBackTitleVisible: false,
      gestureEnabled: false,
      headerTintColor: 'black',
    }}>
    <Stack.Screen
      name="Main"
      component={TabStack}
      options={{
        header: () => null,
      }}
    />
    <Stack.Screen name="Character" component={Character} />
  </Stack.Navigator>
);
