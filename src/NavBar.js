import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NavBar = () => {
  return (
    <View  style={ styles.container }>
        <TouchableOpacity style={ styles.navBarButton }>
            <Text>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.navBarButton }>
            <Text>Questionnare</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.navBarButton }>
            <Text>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.navBarButton }>
            <Text>Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.navBarButton }>
            <Text>Goals</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({

    container: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    navBarButton: {
        borderWidth: 1,
        borderColor: 'black',
        height: '100%',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

})