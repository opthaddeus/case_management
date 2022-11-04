import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import UserIcon from "../../icons/user_icon.svg";
import { styles } from "./styles";

const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) navigation.navigate("Home");
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log("Registered with", user.email);
        }).catch(error => alert(error.message))
    }

    const handleLoginScreen = () => {
        navigation.navigate("Login");
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <View style={styles.iconContainer}>
                <UserIcon width={50} height={50}>
                </UserIcon>
            </View>

            <Text style={styles.signUpPrompt}>Sign up</Text>
            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Name"
                    placeholderTextColor='white'
                    value={name}
                    onChangeText={text => setName(text)}
                    style={[styles.input, styles.textInputShadow]}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={[styles.input, styles.textInputShadow]}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={[styles.input, styles.textInputShadow]}
                    secureTextEntry
                />
            </View>

            <Text style={styles.returningUserContainer}>
                <Text style={styles.returningUserPrompt}>Have an account? </Text>
                <Text style={styles.loginTextClickable} onPress={handleLoginScreen}>Log in</Text>
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonShadow]}
                    onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

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

export default RegistrationScreen;