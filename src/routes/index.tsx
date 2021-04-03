import * as React from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {ModalContent} from '../components';
import {hideCharacter} from '../store/modules/characters/actions';
import {CharacterStateInterface} from '../store/modules/characters/reducer';
import {Metrics} from '../styles';
import {navigationRef} from './rootNavigation';
import Main from './stacks/main';

export default () => {
  const dispatch = useDispatch();
  const {selected} = useSelector(
    (state: {characters: CharacterStateInterface}) => state.characters,
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Main />

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
    </NavigationContainer>
  );
};
