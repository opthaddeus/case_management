import { StyleSheet } from "react-native";
import { ceil } from "react-native-reanimated";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create( {
    mainContainer: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        backgroundColor: 'white',
        paddingBottom: 50,
        alignItems: 'center',   //align items on the cross axis (left to right)
        justifyContent: 'flex-start',
    },
    topSpacer: {
        flex: 1.5,
    },
    elementContainer: {
        height: '100%',
        width: '90%',
        flex: 18,
    },
    searchBarContainer: {
        flexDirection: 'row',
        flex: .5,
        paddingBottom: 20,
    },
    searchBar: {
        borderWidth: 1.5,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
    },
    favoritesContainer: {
        flex: 2,
        paddingBottom: 30,
    },
    favoriteCatgoriesContainer: {
        borderWidth: 1.5,
        flexGrow: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    categoriesContainer: {
        flex: 5,
    },
    categoriesScrollView: {
        borderWidth: 1.5,
        paddingTop: 20,
        borderRadius: 10,
    },
    categoriesColContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
    },  
    resourceFavoriteButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    favoriteButton: {
        borderWidth: 1,
        height: 15,
        width: 15,
        borderRadius: 7,
    }
} );

export { styles };