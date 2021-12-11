import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'
import { TouchableWithoutFeedback } from 'react-native'
export const BlockCard = ({ style, imageStyle, item, onPress }) => {

    const { thumbnail, title, desc } = item
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image
                    source={{ uri: thumbnail }}
                    style={[styles.image, imageStyle]}
                />
                <View style={styles.contentContainer}>
                    <Title
                        numberOfLines={2}>{title}
                    </Title>
                    <Subtitle numberOfLines={2}>{desc}
                    </Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f3f3f7',

    },
    image: {
        width: '100%',
        height: 200,

    },
    contentContainer: {
        padding: 5,
    }
})
