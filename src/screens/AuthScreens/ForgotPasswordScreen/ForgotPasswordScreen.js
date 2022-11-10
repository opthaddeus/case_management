import React, { useContext, useState, useEffect } from "react";
import { Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';
import ForgotPasswordSVG from '../../../assets/images/forgot_password_screen_cartoon.svg';

import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../../firebase/firebase";
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
    });

    if (!fontsLoaded) {
        return null
    };

    const handleBackButton = () => {
        navigation.navigate("Login");
    }

    const handleForgotPassword = () => {
        auth.sendPasswordResetEmail(email).then(() => {
            console.log("Reset email sent to " + email);
            Alert.alert("Password Reset", "Email sent to " + email,
                [
                    {
                        text: 'Continue',
                        onPress: () => navigation.replace("Login")
                    }
                ],);
        }).catch(error => alert(error.message))
    }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 25, }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'center', }}
                    onPress={handleBackButton}
                >
                    <Ionicons
                        name='arrow-back-outline'
                        size={22}
                        color='#FF1493'
                    />
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 20,
                        color: '#FF1493',
                        paddingLeft: 5
                    }}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                <ForgotPasswordSVG />
            </View> 

            <View style={{ paddingHorizontal: 25 }}>
                <Text
                    style={{
                        fontFamily: 'Montserrat-Black',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginTop: 10,
                    }}>
                    Forgot Password
                </Text>
                <Text
                    style={{
                        fontFamily: 'Montserrat-Black',
                        fontSize: 15,
                        fontWeight: '500',
                        color: '#333',
                        marginTop: 10,
                    }}>
                    Please enter your email address. You will
                    receive a link to create a new password via email
                </Text>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginTop: 25
                }}>
                    <Ionicons
                        name='mail-outline'
                        size={22}
                        color='#666'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder="Email"
                        style={{ flex: 1, paddingVertical: 0 }}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={{
                            backgroundColor: '#00BFFF',
                            padding: 20,
                            borderRadius: 10,
                            marginTop: 30,
                        }}>
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                            fontFamily: 'Montserrat-Black',
                        }}>
                            Send verification link
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginTop: 40, paddingHorizontal: 25 }}>
                    <ThaddeusHorizontalSVG
                        height={100}
                        width={'50%'}
                        fill='black'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

