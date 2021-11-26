import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { SignOut } from './SignOut';
import { colortheme } from '../colors';



export function Home(props) {
    const navigation = useNavigation()

    useEffect(() => {
        if(props.auth ===false) {navigation.reset({index: 0, routes: [{name: "SignIn"}]})}
    }, [props.auth])
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colortheme.yellowbg,
        flex: 1,
    }
})
