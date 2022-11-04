import React, { useContext } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../Navigation/AuthProvider";

const image = '../icons/Images/thaddeus_logo_vertical.jpg';

export default function CustomDrawer(props) {
    const { logout } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <ImageBackground
                    source={require(image)}
                    style={{
                        paddingTop: 70,
                        padding: 70,
                        width: 125,
                        height: -125,
                        alignSelf: 'center'
                    }}
                >
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 2, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => logout()} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="log-out-outline" size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}