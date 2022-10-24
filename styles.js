import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    resourcesHeader: {
      marginTop: 50,
      fontWeight: '700',
      color: '#00BFFF',
    },
    profileButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
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
        marginTop: 5,
        marginBottom: 5,
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
    },
} );

export { styles };