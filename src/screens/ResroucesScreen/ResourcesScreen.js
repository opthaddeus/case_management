import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Text, Touchable, View } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import { styles } from "./styles";
import { AppointmentsServicesButton, ChurchServicesButton, DonationCenterButton, 
    EducationServicesButton, EmploymentServicesButton, FoodServicesButton, FormsServicesButton,
    GovernmentServicesButton, HealthServicesButton, HousingServicesButton, LegalServicesButton, 
    LGBTQServicesButton, ParentingServicesButton, UtiliesServicesButton } from "./ResourceButtons/ResourceButtons"; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ResourcesScreen = () => {

    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    // render item for favorites FlatList
    const resourceButtonRenderItem = ( {item} ) => {

        if(item.favorited) {
            <TouchableOpacity 
                style={ styles.categoryButton }
            >
                <Text>{item.buttonName}</Text>
            </TouchableOpacity>
        }
        else {
            <></>
        }

    }

    // sign the user out
    const handleSignOut = () => {
        auth.signOut().then( () => {
            navigation.replace("Login")
        }).catch(error => alert(error.message));
    }


    // search the database/services for the user's query
    const searchForUserQuery = () => {

        //for now, just log the query
        console.log(searchQuery);

        //search for pages

        //serach for resources/programs

        //search for employees

    }

    return (
        <KeyboardAvoidingView style = { styles.mainContainer }>

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


            {/* a spacer to conform to multiple phone screen sizes */}
            <View style={ styles.topSpacer }></View>

            {/* element contianer 
                This will contain all the elements within the 
                main screen contianer
            */}
            <View style={ styles.elementContainer }>
                
                {/* resources header section */}
                <View style={ styles.resourceHeader }>
                    <Text style={ styles.resourceHeaderText }>RESOURCES</Text>
                </View>

                {/* profile search bar section */}
                <View style={ styles.profileAndSearchBarContainer }>

                    <TouchableOpacity
                        style={ styles.profileButton }
                        onPress={() => { }}
                    >
                        <Text>Profile</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={ styles.searchBar }
                        placeholder='Search...'
                    ></TextInput>

                </View>



                {/* favorites section */}
                <View style={ styles.favoritesContainer }>

                    <Text>Favorites</Text>
                    
                    {/* the grid that holds the buttons */}
                    <View style={ styles.favoriteCatgoriesContainer }>

                        <FlatList 
                            horizontal={ true }
                            //data={ }
                            //renderItem={( {item, index}) => {}}
                        />

                    </View>
                </View>



                {/* categories section */}
                <View style={ styles.categoriesContainer }>

                    <Text>All Categories</Text>

                    <ScrollView style={ styles.categoriesScrollView }>

                        <View style={ styles.categoriesColContainer }>

                            {/* col 1 */}
                            <View style={ styles.categoryButtonCol }>

                                <AppointmentsServicesButton />

                                <EducationServicesButton />

                                <FormsServicesButton />

                                <HousingServicesButton />

                                <ParentingServicesButton />

                            </View>

                            {/* col 2 */}
                            <View style={ styles.categoryButtonCol }>

                                <ChurchServicesButton />

                                <EmploymentServicesButton />

                                <GovernmentServicesButton />

                                <LegalServicesButton />

                                <UtiliesServicesButton />

                            </View>

                            {/* col 3 */}
                            <View style={ styles.categoryButtonCol }>

                                
                                <DonationCenterButton />

                                <FoodServicesButton />

                                <HealthServicesButton />

                                <LGBTQServicesButton />
                                

                            </View>

                        </View>

                    </ScrollView>

                </View>
                

            </View>
            
        </KeyboardAvoidingView>
    )
}

export default ResourcesScreen;