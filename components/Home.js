import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { SignOut } from './SignOut';


export function Home(props) {
    const navigation = useNavigation()

    useEffect(() => {
        
    }, [])
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}


const styles = StyleSheet.create({})
