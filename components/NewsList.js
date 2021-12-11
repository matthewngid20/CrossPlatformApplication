import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'

const NewsList = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>Category</Text>
        </View>
    )
}

export default NewsList

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#4e4d4d'
    },
    categoryTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
    }
})
