import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({ children, numberOfLines = 2, size = 17 }) => {
    return (

        <Text
            style={{
                fontWeight: 'bold',
                fontSize: size,
            }}
            numberOfLines={numberOfLines}>
            {children}
        </Text>

    )
}
export default Title
