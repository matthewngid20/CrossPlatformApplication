import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ViewMore = ({style}) => {
    return (
        <View style = {[styles.container,style]}>
            <Text>View More</Text>
        </View>
    )
}

export default ViewMore

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 8,
        width: '100%',
        height: 50,
        backgroundColor:'white'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7a74e0'
    }
})
