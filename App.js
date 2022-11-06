import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen/OnBoardingScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';

// resource pages
import ResourcesScreen from './src/screens/ResroucesScreen/ResourcesScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import AppointmentsScreen from './src/screens/ResroucesScreen/ResourcePages/AppointmentsScreen/AppointmentsScreen';
import ChurchScreen from './src/screens/ResroucesScreen/ResourcePages/ChurchServicesScreen/ChurchServicesScreen';
import DonationScreen from './src/screens/ResroucesScreen/ResourcePages/DonationScreen/DonationScreen';
import EducationServicesScreen from './src/screens/ResroucesScreen/ResourcePages/EducationServicesScreen/EducationServicesScreen';
import EmploymentServicesScreen from './src/screens/ResroucesScreen/ResourcePages/EmploymentServicesScreen/EmploymentServicesScreen';
import FoodServicesScreen from './src/screens/ResroucesScreen/ResourcePages/FoodServicesScreen/FoodServicesScreen';
import FormsServicesScreen from './src/screens/ResroucesScreen/ResourcePages/FormsServicesScreen/FormsServicesScreen';
import GovernmentServicesScreen from './src/screens/ResroucesScreen/ResourcePages/GovernmentServicesScreen/GovernmentServicesScreen';
import HealthServicesScreen from './src/screens/ResroucesScreen/ResourcePages/HealthServicesScreen/HealthServicesScreen'; 
import HousingServicesScreen from './src/screens/ResroucesScreen/ResourcePages/HousingServicesScreen/HousingServicesScreen';
import LegalServicesScreen from './src/screens/ResroucesScreen/ResourcePages/LegalServicesScreen/LegalServicesScreen';
import LGBTQServicesScreen from './src/screens/ResroucesScreen/ResourcePages/LGBTQServicesScreen/LGBTQServicesScreen';
import ParentingServicesScreen from './src/screens/ResroucesScreen/ResourcePages/ParentingServicesScreen/ParentingServicesScreen';
import UtilitesServicesScreen from './src/screens/ResroucesScreen/ResourcePages/UtilitesServicesScreen/UtilitesServicesScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Resrouces'
      >
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

        {/* resource screens */}
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "AppointmentsScreen"
          component = { AppointmentsScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "ChurchScreen"
          component = { ChurchScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "DonationScreen"
          component = { DonationScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "EducationServicesScreen"
          component = { EducationServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "EmploymentServicesScreen"
          component = { EmploymentServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "FoodServicesScreen"
          component = { FoodServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "FormsServicesScreen"
          component = { FormsServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "GovernmentServicesScreen"
          component = { GovernmentServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "HealthServicesScreen"
          component = { HealthServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "HousingServicesScreen"
          component = { HousingServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "LegalServicesScreen"
          component = { LegalServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "LGBTQServicesScreen"
          component = { LGBTQServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "ParentingServicesScreen"
          component = { ParentingServicesScreen }
        />
        <Stack.Screen
          options= {{ headerShown: false }}
          name = "UtilitesServicesScreen"
          component = { UtilitesServicesScreen }
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
