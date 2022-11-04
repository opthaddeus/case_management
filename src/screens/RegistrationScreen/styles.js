import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    signUpPrompt: {
        color: '#00BFFF',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
    },
    inputContainer: {
        width: '90%'
    },
    input: {
        backgroundColor: '#00BFFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    textInputShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 20,
    },
    buttonShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 20,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#00BFFF',
        width: '100%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    returningUserContainer: {
        marginTop: 15,
        marginRight: 25,
        alignContent: 'center',
        alignSelf: 'flex-end',
        color: '#00BFFF',
        fontWeight: 'thin',
    },
    returningUserPrompt: {
        color: '#00BFFF',
    },
    loginTextClickable: {
        color: '#00BFFF',
        fontWeight: 'bold',
    },
    thaddeusTextContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
    },
    thaddeusText: {
        fontFamily: 'serif',
        textTransform: 'uppercase',
        color: '#00BFFF',
        fontSize: 22,
        bottom: 0,
        letterSpacing: 2,
        fontWeight: 'bold',
        marginLeft: 25,
        marginRight: 25,
    },
    resourceCenter: {
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        color: '#00BFFF',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: 0,
        letterSpacing: 3,
        marginLeft: 25,
        marginRight: 25,
    },
    flexBox: {
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
    },
    lineStyle: {
        flex: 1,
        borderWidth: 0.5,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#00BFFF',
    },
    year: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: '#00BFFF',
        fontSize: 8,
        alignSelf: 'center',
    },
});

export { styles };