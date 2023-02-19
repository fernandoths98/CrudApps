import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './auth/LoginScreen';
import RegisterScreen from './auth/RegisterScreen';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import DetailScreen from './screen/DetailScreen';
import LoginAdminScreen from './auth/LoginAdminScreen';
import HomeAdminScreen from './screen/HomeAdminScreen';

const Stack = createNativeStackNavigator();

const StartScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Admin" component={LoginAdminScreen} />
      <Stack.Screen name="HomeAdmin" component={HomeAdminScreen} />
    </Stack.Navigator>
  );
};

export default StartScreen;
