import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.reset({
      routes: [{name: 'Main'}],
    });

    return () => {
      SplashScreen.hide();
    };
  }, [navigation]);

  return null;
};

export default Splash;
