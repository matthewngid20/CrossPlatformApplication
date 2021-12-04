import { useNavigation } from '@react-navigation/core';
import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { SignOut } from './SignOut';
import { colortheme } from '../colors';
import { News } from './News';



export function Home(props) {
    const navigation = useNavigation()
    const [data, setData] =useState()

    useEffect(() => {
        if(props.auth ===false) {navigation.reset({index: 0, routes: [{name: "SignIn"}]})}
        setData(props.data)
    }, [props.auth, props.data])


    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
            onPress = {() => props.addNews()}
            title = 'Add news'
            type = 'clear'
            />
            <News/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colortheme.yellowbg,
        flex: 1,
    }
})
