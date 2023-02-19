import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './src/StartScreen';
import LoginScreen from './src/auth/LoginScreen';
import {ContextApps} from './src/utils/ContextApps';

const App = () => {
  return (
    <ContextApps>
      <NavigationContainer>
        <StartScreen />
      </NavigationContainer>
    </ContextApps>
  );
};

export default App;
