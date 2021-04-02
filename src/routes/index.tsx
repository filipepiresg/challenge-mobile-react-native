import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={() => null} />
      <Stack.Screen name="Character" component={() => null} />
    </Stack.Navigator>
  </NavigationContainer>
);
