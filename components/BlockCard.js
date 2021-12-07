import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'
export const BlockCard = ({ style, imageStyle }) => {
    //cconsole.log(props.data);
    return (
        <View style={[styles.container, style]}>
            <Image style={[styles.image, imageStyle]}
                source={require("../assets/Education.jpeg")}
            />
            <View style={styles.contentContainer}>
                <Title
                    numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Title>
                <Subtitle numberOfLines={5}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Subtitle>
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
        backgroundColor: '#f3f3f7'
    },
    image: {
        width: '100%',
        height: 200,

    },
    contentContainer: {
        padding: 5,
    }
})
