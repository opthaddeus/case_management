import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen/OnBoardingScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResourcesScreen from './src/screens/ResroucesScreen/ResourcesScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "OnBoarding"
          component = { OnBoardingScreen }
        />
        <Stack.Screen
          options = {{ headerShown: false }}
          name = "Login"
          component = { LoginScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "ForgotPassword"
          component = { ForgotPasswordScreen }
        />
        */}
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "Resrouces"
          component = { ResourcesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "Registration"
          component = { RegistrationScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
