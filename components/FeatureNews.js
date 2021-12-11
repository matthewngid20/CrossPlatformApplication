import React from 'react'
import { View, Text } from 'react-native'
import { BlockCard } from './BlockCard'
import { useNavigation } from '@react-navigation/native'

const FeatureNews = ({ item }) => {
    const navigation = useNavigation()
    return (
        <BlockCard onPress={() => navigation.navigate('NewsDetail',
            { item })}
            item={item}
            style={{ marginVertical: 15, }} />
    )
}

export default FeatureNews
