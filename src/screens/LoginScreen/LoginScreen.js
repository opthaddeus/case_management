import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserIcon from "../../icons/user_icon.svg";
import { styles } from "./styles";
import { AuthContext } from "../../Navigation/AuthProvider";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword");
    }

    const handleRegistrationScreen = () => {
        navigation.navigate("Registration");
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <View style={styles.iconContainer}>
                <UserIcon width={50} height={50}>
                </UserIcon>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={[styles.input, styles.textInputShadow]}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={[styles.input, styles.textInputShadow]}
                    secureTextEntry={true}
                />
            </View>

            <Text style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword} onPress={handleForgotPasswordScreen}> Forgot password?</Text>
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => login(email, password)}
                    style={[styles.button, styles.buttonShadow]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.newUserContainer}>
                <Text style={styles.signUpText}>New user? </Text>
                <Text
                    style={styles.signUpTextClickable}
                    onPress={handleRegistrationScreen}>Sign up
                </Text>
            </Text>

            <View style={styles.thaddeusTextContainer}>
                <Text style={styles.thaddeusText}>Thaddeus</Text>
                <Text style={styles.resourceCenter}>Resource Center</Text>

                <View style={styles.flexBox}>
                    <View style={styles.lineStyle} />
                    <View>
                        <Text style={styles.year}>est. 1975</Text>
                    </View>
                    <View style={styles.lineStyle} />
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}