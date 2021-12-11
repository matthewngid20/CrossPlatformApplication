import React from 'react'
import { View, Text } from 'react-native'
import { BlockCard } from './BlockCard'

const FeatureNews = ({ item }) => {
    return (
        <BlockCard item={item} style={{ marginVertical: 15, }} />
    )
}

export default FeatureNews
