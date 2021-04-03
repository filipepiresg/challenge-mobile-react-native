import * as React from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import {ModalContent} from '../../components';
import {hideCharacter} from '../../store/modules/characters/actions';
import {CharacterStateInterface} from '../../store/modules/characters/reducer';
import {Metrics} from '../../styles';
import TabStack from './tab';

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const {selected} = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters,
  );

  return (
    <>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={TabStack} />
      </Stack.Navigator>

      <Modal
        isVisible={!!selected}
        avoidKeyboard
        deviceWidth={Metrics.deviceWidth}
        deviceHeight={Metrics.deviceHeight}
        animationIn="zoomIn"
        animationOut="zoomOut"
        onBackButtonPress={() => {
          dispatch(hideCharacter());
        }}
        onBackdropPress={() => {
          dispatch(hideCharacter());
        }}>
        <ModalContent />
      </Modal>
    </>
  );
};
