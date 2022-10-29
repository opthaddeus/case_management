import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create( {
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',   //align items on the cross axis (left to right)
        justifyContent: 'flex-start',
    },
    topSpacer: {
        flex: 1.5,
        borderColor: 'red',
        borderWidth: 1,
    },
    elementContainer: {
        borderColor: 'red',
        borderWidth: 1,
        height: '100%',
        width: '90%',
        flex: 18,
    },
    resourceHeader: {
        borderColor: 'green',
        borderWidth: 1,
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profileAndSearchBarContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    profileButton: {
        borderColor: 'blue',
        borderWidth: 1,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        borderColor: 'purple',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
    },
    favoritesContainer: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 2,
    },
    favoriteCatgoriesContainer: {
        borderColor: 'blue',
        borderWidth: 1,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    categoriesContainer: {
        borderColor: 'green',
        borderWidth: 1,
        flex: 7,
    },
    categoriesScrollView: {
        
    },
    categoriesColContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },  
    resourceFavoriteButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    categoryButton: {
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
    },
    favoriteButton: {
        borderColor: 'red',
        borderWidth: 1,
        height: 15,
        width: 15,
        borderRadius: 7,
    }
} );

export { styles };