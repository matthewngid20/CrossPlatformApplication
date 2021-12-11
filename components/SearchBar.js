import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const SearchBar = () => {
    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.searchText}
                placeholder="Search here...">
            </TextInput>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 15,
        //marginTop: 10
        borderRadius: 15
    },
    searchText: {
        width: "100%",
        height: "100%",
        fontSize: 17,

    }
})
