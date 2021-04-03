import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {transparentize} from 'polished';

import {Favorites, List} from '../../pages';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="Characters"
    backBehavior="none"
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        if (route.name === 'Characters') {
          return <Ionicons name="list-outline" size={size} color={color} />;
        }
        if (route.name === 'Favorites') {
          return <MaterialIcons name="favorite" size={size} color={color} />;
        }
        return null;
      },
    })}
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: 'black',
      inactiveTintColor: transparentize(0.6, 'black'),
    }}>
    <Tab.Screen
      name="Characters"
      component={List}
      options={{
        title: 'Characters',
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        title: 'My Favorites',
      }}
    />
  </Tab.Navigator>
);
