import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentsScreen from '../screens/AppointmentsScreen/AppointmentsScreen';
import EducationServicesScreen from "../screens/EducationServicesScreen/EducationServicesScreen";
import FormsServicesScreen from "../screens/FormsServicesScreen/FormsServicesScreen";
import HousingServicesScreen from "../screens/HousingServicesScreen/HousingServicesScreen";
import ParentingServicesScreen from "../screens/ParentingServicesScreen/ParentingServicesScreen";
import ChurchServicesScreen from "../screens/ChurchServicesScreen/ChurchServicesScreen";
import EmploymeentServicesSceen from "../screens/EmploymentServicesScreen/EmploymentServicesScreen";
import GovernmentServicesScreen from "../screens/GovernmentServicesScreen/GovernmentServicesScreen";
import LegalServicesScreen from "../screens/LegalServicesScreen/LegalServicesScreen";
import UtilitiesServicesScreen from "../screens/UtilitesServicesScreen/UtilitesServicesScreen";
import DonationScreen from "../screens/DonationScreen/DonationScreen";
import FoodServicesScreen from "../screens/FormsServicesScreen/FormsServicesScreen";
import HealthServicesScreen from "../screens/HealthServicesScreen/HealthServicesScreen";
import LGBTQServicesScreen from "../screens/LGBTQServicesScreen/LGBTQServicesScreen";

const Stack = createNativeStackNavigator();

export default function ResourcesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Appointment Services" component={AppointmentsScreen}></Stack.Screen>
            <Stack.Screen name="Education Services" component={EducationServicesScreen}></Stack.Screen>
            <Stack.Screen name="Forms" component={FormsServicesScreen}></Stack.Screen>
            <Stack.Screen name="Parenting Services" component={ParentingServicesScreen}></Stack.Screen>
            <Stack.Screen name="Church Services" component={ChurchServicesScreen}></Stack.Screen>
            <Stack.Screen name="Employment Services" component={EmploymeentServicesSceen}></Stack.Screen>
            <Stack.Screen name="Government Services" component={GovernmentServicesScreen}></Stack.Screen>
            <Stack.Screen name="Legal Services" component={LegalServicesScreen}></Stack.Screen>
            <Stack.Screen name="Utilities Services" component={UtilitiesServicesScreen}></Stack.Screen>
            <Stack.Screen name="Donation Center" component={DonationScreen}></Stack.Screen>
            <Stack.Screen name="Food Services" component={FoodServicesScreen}></Stack.Screen>
            <Stack.Screen name="Health Services" component={HealthServicesScreen}></Stack.Screen>
            <Stack.Screen name="LGBTQ+ Services" component={LGBTQServicesScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
