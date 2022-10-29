import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, Touchable, View } from "react-native";
import { FlatList, ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import NavBar from "../../NavBar";
import { styles } from "./styles";

let favoritedResrouces = [];

//set up resource buttons
const HousingResourceButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    return(
        //a container for both the resource and the favorite button
        <View>
            {/* this is the button to favorite/unfavorite an item */}
            <TouchableOpacity
                style={ styles.resourceFavoriteButton }
                onPress={() => { 
                    if(isFavorited) {
                        //add to favorite section
                        

                        setIsFavorited(false);
                        console.log(isFavorited);
                    }
                    else {
                        //remove from favorite section


                        setIsFavorited(true);
                        console.log(isFavorited);
                    }
                }}
            ></TouchableOpacity>

            {/* this is the button to bring up the respective resource's page */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={()  => { }}
            >
                <Text>Housing Resources</Text>
            </TouchableOpacity>
        </View>
    )
}

const LGBTQResourceButton = () => {
    let favorited = false;

    return(
        <View>
            
            <TouchableOpacity
                style={ styles.resourceFavoriteButton }
                onPress={() => { }}
            ></TouchableOpacity>

            <TouchableOpacity
                style={styles.categoryButton}
                onPress={()  => { 
                    //display LGBTQ+ page
                }}
            >
                <Text>LGBTQ+</Text>
            </TouchableOpacity>
        </View>
    )
}

const ResourcesScreen = () => {
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

                        <FlatList data={favoritedResrouces} 
                        horizontal={ true }>

                        </FlatList>

                    </View>

                </View>

                {/* categories section */}
                <View style={ styles.categoriesContainer }>

                    <Text>All Categories</Text>

                    <ScrollView style={ styles.categoriesScrollView }>

                        <View style={ styles.categoriesColContainer }>

                            {/* col 1 */}
                            <View style={ styles.categoryButtonCol }>

                                <HousingResourceButton />

                                <LGBTQResourceButton />

                            </View>

                            {/* col 2 */}
                            <View style={ styles.categoryButtonCol }>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >   
                                    {/* the button to add a category to the favorites section */}
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>

                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>
                                </TouchableOpacity>

                            </View>

                            {/* col 3 */}
                            <View style={ styles.categoryButtonCol }>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >   
                                    {/* the button to add a category to the favorites section */}
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>

                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={ styles.categoryButton }
                                    onPres={() => { }}    
                                >
                                    <TouchableOpacity 
                                        style={ styles.favoriteButton }
                                        onPress={() => { }}
                                    ></TouchableOpacity>

                                    <Text>Housing Services</Text>
                                </TouchableOpacity>

                                

                            </View>

                        </View>

                    </ScrollView>

                </View>
                
                {/* nav bar container */}
                <View>
                    <NavBar />
                </View>

            </View>
            
        </KeyboardAvoidingView>
    )
}

export default ResourcesScreen;