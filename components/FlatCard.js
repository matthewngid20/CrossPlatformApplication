import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'
export const FlatCard = ({ item }) => {
    //cconsole.log(props.data);
    const { thumbnail, title, desc } = item
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: thumbnail }}
                style={styles.image}
            />
            <View style = {styles.contentContainer} >
                <Title
                    numberOfLines={2}>{title}
                </Title>
                <Subtitle numberOfLines={2}>{desc}
                </Subtitle>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 80,
    },
    image: {
        flex: 0.35,
        height: "100%",
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5, 
    }
})
