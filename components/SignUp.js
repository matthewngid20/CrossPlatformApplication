import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export function  SignUp (props) {
    const navigation = useNavigation()
    return (
        <View>
            <Text> Sign Up</Text>
            <Button title = "Click here to sign in" onPress = { () => navigation.navigate("SignIn")}/>
        </View>
    )
}

