import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import data from '../data'
import { FlatCard } from './FlatCard'
import Title from './Title'
import VerticalCard from './VerticalCard'

const VerticalList = ({ title, JSdata }) => {
    return (
        <View >
            <Title size={20}>
                {title}
            </Title>
            <View style={styles.container}>
                {JSdata.map(item => <VerticalCard item={item} key={item.id} />)}
            </View>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})
