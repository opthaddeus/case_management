import * as React from 'react';
import { View, Text } from "react-native";

const UserProfileScreen = () => {

    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style = {{ fontSize: 16, fontWeight: 'bold'}}>User Profile Screen</Text>
        </View>
    )
}

export default UserProfileScreen;