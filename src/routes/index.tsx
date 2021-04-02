import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Character, Favorites, List} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="List">
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="Character" component={Character} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Main"
      backBehavior="none"
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen name="Main" component={MainStack} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  </NavigationContainer>
);
