import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Alert, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from './styles';
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

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
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'>

            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordPrompt}>Forgot Password</Text>
                <Text style={styles.forgotPasswordInstructions}>
                    Please enter your email address. You will{"\n"}
                    receive a link to create a new password{"\n"}via email
                </Text>
            </View>

            <View style={[styles.inputContainer, styles.textInputOutline, styles.textInputShadow]}>
                <TextInput
                    placeholder="Email"
                    color='#00BFFF'
                    placeholderTextColor='#00BFFF'
                    fontWeight='bold'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleForgotPassword}
                    style={[styles.button, styles.buttonShadow]}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleBackButton}
                    style={[styles.button, styles.buttonShadow]}>
                    <Text style={styles.buttonText}>back</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ForgotPasswordScreen;