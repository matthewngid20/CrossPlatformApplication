import { useNavigation } from '@react-navigation/core';
import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { SignOut } from './SignOut';
import { colortheme } from '../colors';
import { BlockCard } from './BlockCard';
import SearchBar from './SearchBar';
import FeatureNews from './FeatureNews';



export function Home(props) {
    const navigation = useNavigation()
    const [data, setData] =useState()

    useEffect(() => {
        if(props.auth ===false) {navigation.reset({index: 0, routes: [{name: "SignIn"}]})}
        setData(props.data)
    }, [props.auth, props.data])

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    console.log(data);

    return (
        <View style={styles.container}>
            <SearchBar/>
            
            {/* <Button 
            onPress = {() => props.addNews()}
            title = 'Add news'
            type = 'clear'
            /> */}
            <FeatureNews />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colortheme.yellowbg,
        flex: 1,
    }
})
