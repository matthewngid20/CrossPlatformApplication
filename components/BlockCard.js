import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'
export const BlockCard = ({style}) => {
    //cconsole.log(props.data);
    return (
        <View  style = {[styles.container, style]}>
            <Image style = {styles.image}
                source={require("../assets/Education.jpeg")}
            />
            <View style = {styles.contentContainer}>
                <Title>Some title</Title>
                <Subtitle>Some subtitle </Subtitle>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,

    },
    contentContainer: {
        padding: 5, 
    }
})
