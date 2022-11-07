import React, { useState } from "react";
import { styles } from "./styles";
import { AppointmentsServicesButton, ChurchServicesButton, DonationCenterButton, 
    EducationServicesButton, EmploymentServicesButton, FoodServicesButton, FormsServicesButton,
    GovernmentServicesButton, HealthServicesButton, HousingServicesButton, LegalServicesButton, 
    LGBTQServicesButton, ParentingServicesButton, UtiliesServicesButton } from "../../components/ResourceButtons/ResourceButtons"; 
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FlatList, Keyboard, KeyboardAvoidingView, Text, Touchable, View } from "react-native";
import { color } from "react-native-reanimated";

export default function ResourcesScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    const resourceButtonRenderItem = ({item}) => {
        if (item.favorited) {
            <TouchableOpacity style={styles.categoryBytton}>
                <Text>{item.buttonName}</Text>
            </TouchableOpacity>
        }
        else {
            <></>
        }
    }

    const searchForUserQuery = () => {
        /** TO-DO
         * search for pages
         * search for resources/programs
         * search for employeers
         */
        console.log(searchQuery);
    }

    return (
        <KeyboardAvoidingView style = {styles.mainContainer}>
            <View style={styles.elementContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder='   Search...' >
                    </TextInput>
                </View>

                <View style={styles.favoritesContainer}>
                    <Text style={{
                        color: '#00BFFF',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                        }}>Favorites</Text>
                    <View style={styles.favoriteCatgoriesContainer}>
                        <FlatList 
                            horizontal={true}
                            //data={ }
                            //renderItem={( {item, index}) => {}}
                        >
                        </FlatList>
                    </View>
                </View>

                {/* categories section */}
                <View style={styles.categoriesContainer}>
                    <Text style={{
                        color: '#00BFFF',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>All Categories</Text>

                    <ScrollView style={styles.categoriesScrollView}>
                        <View style={styles.categoriesColContainer}>
                            {/* col 1 */}
                            <View style={styles.categoryButtonCol}>
                                <AppointmentsServicesButton />
                                <EducationServicesButton />
                                <FormsServicesButton />
                                <HousingServicesButton />
                                <ParentingServicesButton />
                            </View>
                            {/* col 2 */}
                            <View style={styles.categoryButtonCol}>
                                <ChurchServicesButton />
                                <EmploymentServicesButton />
                                <GovernmentServicesButton />
                                <LegalServicesButton />
                                <UtiliesServicesButton />
                            </View>
                            {/* col 3 */}
                            <View style={styles.categoryButtonCol}>
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
    );
}
