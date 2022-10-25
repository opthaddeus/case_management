import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 15,
    },
    resourcesHeader: {
      marginTop: 50,
      fontWeight: '700',
      color: '#00BFFF',
      borderColor: 'red',
      borderWidth: 1,
    },
    profileSearchBarDiv: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    profileButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',


        borderColor: 'red',
        borderWidth: 1,
    },
    profileButton: {
        backgroundColor: 'white',
        borderColor: 'black',
    },
    button: {
        backgroundColor: '#00BFFF',
        width: '75%',
        padding: 12,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    searchContainer: {
        width: '90%',
        flex: 1,
        justifyContent: 'flex-start',
        borderColor: 'green',
        borderWidth: 1,
    },
    input: {
        backgroundColor: '#00BFFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 20,
        color: 'white',
    },
    textInput: {
        color: 'white',
    },
    favoritesSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: 'red',
        borderWidth: 1,
    },
    categoriesContainer: {
        flex: 1,
        width: '100%',
        borderColor: 'red',
        borderWidth: 1,
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        width: '100%',
        borderColor: 'purple',
        borderWidth: 1,
    },
    categoryButton: {
        width: 30,
        height: 40,
        borderColor: 'green',
        borderWidth: 1,
    },
    navBarDiv: {
        width: '100%',
    }
} );

export { styles };