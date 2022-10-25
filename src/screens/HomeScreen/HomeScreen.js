import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, Touchable, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import NavBar from "../../NavBar";
import { styles } from "./styles";

const HomeScreen = () => {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    //sign the user out
    const handleSignOut = () => {
        auth.signOut().then( () => {
            navigation.replace("Login")
        }).catch(error => alert(error.message));
    }

    //search the database/services for the user's query
    const searchForUserQuery = () => {

        //for now, just log the query
        console.log(searchQuery);

        //search for pages

        //serach for resources/programs

        //search for employees

    }

    return (
        <KeyboardAvoidingView style = { styles.container }>

            {/* resources title section */}
            <View>
                <Text style={ styles.resourcesHeader }>RESOURCES</Text>
            </View>

            {/* profile button and search bar section */}
            <View style={ styles.profileSearchBarDiv }>

                {/* profile button section */}
                <View style={ styles.profileButtonContainer }>
                    <TouchableOpacity 
                        style={ styles.profileButton }
                        onPress={ () => { }}
                    >
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* search bar */}
                <View style = { styles.searchContainer }>
                    <TextInput
                        placeholder = "Search"
                        placeholderTextColor = 'white'
                        maxLength = { 100 }
                        value = { searchQuery }
                        onChangeText = { text => setSearchQuery(text) }
                        onSubmitEditing = { searchForUserQuery }
                        style = { styles.input }
                    />
                </View>

            </View>

            {/* sign out section
            <View style={ styles.container }>
                <Text>Email: { auth.currentUser?.email }</Text>

                <TouchableOpacity style = { styles.button }>
                    <Text
                        onPress = { handleSignOut }
                        style = { styles.buttonText }>Sign out
                    </Text>
                </TouchableOpacity>
            </View>
            */}

            {/* favorited categoires section */}
            <View style={ styles.favoritesSection }>
                <Text>Favorites section</Text>
            </View>

            {/* categories grid section */}
            <View style={ styles.categoriesContainer }>
                <Text>Categories Section</Text>
                <View style={ styles.categoriesGrid }>

                    <TouchableOpacity style={ styles.categoryButton }>
                        <Text>This is a button</Text>
                    </TouchableOpacity>
                    

                </View>
            </View>

            {/* navbar section */}
            <View style={ styles.navBarDiv}>
                <NavBar />
            </View>

        </KeyboardAvoidingView>
    )
}

export default HomeScreen;