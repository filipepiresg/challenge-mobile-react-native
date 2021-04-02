import * as React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {transparentize} from 'polished';

import {Character, Favorites, List} from '../pages';
import {hideCharacter} from '../store/modules/characters/actions';
import {CharacterStateInterface} from '../store/modules/characters/reducer';
import {Metrics} from '../styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    initialRouteName="List"
    backBehavior="none"
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        if (route.name === 'List') {
          return <Ionicons name="list-outline" size={size} color={color} />;
        }
        if (route.name === 'Favorites') {
          return <MaterialIcons name="favorite" size={size} color={color} />;
        }
        return null;
      },

      unmountOnBlur: true,
    })}
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: 'black',
      inactiveTintColor: transparentize(0.6, 'black'),
    }}>
    <Tab.Screen
      name="List"
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

const MainStack = () => {
  const dispatch = useDispatch();
  const {selected} = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={TabStack} />
        <Stack.Screen name="Character" component={Character} />
      </Stack.Navigator>

      <Modal
        isVisible={!!selected}
        deviceWidth={Metrics.deviceWidth}
        deviceHeight={Metrics.deviceHeight}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackButtonPress={() => {
          dispatch(hideCharacter());
        }}
        onBackdropPress={() => {
          dispatch(hideCharacter());
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '70%',
            height: 100,
            alignSelf: 'center',
          }}
        />
      </Modal>
    </NavigationContainer>
  );
};

export default MainStack;
