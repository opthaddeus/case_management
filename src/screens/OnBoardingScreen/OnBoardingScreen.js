import { useNavigation } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    const handleLoginScreen = () => {
        navigation.navigate("Login");
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding" >

            <View style={styles.footerContainer}>
                <Text style={styles.footer}>Welcome to _____</Text>
                <Text style={styles.footer}>All your information in one spot</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLoginScreen}
                    style={[styles.button, styles.buttonShadow]}>
                    <Text style={styles.buttonText}>Let's go!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lightBlueSquare} />
            <View style={[styles.darkBlueSquare, styles.squareShadow]} />

            <View style={[styles.thaddeusSquare, styles.shadow]}>
                <Text style={styles.thaddeusText}>Thaddeus</Text>
                <Text style={styles.resourceCenterText}>Resource Center</Text>
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

export default OnBoardingScreen;