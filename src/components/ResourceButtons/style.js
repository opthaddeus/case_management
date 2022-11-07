import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create( {
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
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 10,
    },
} );

export { styles };