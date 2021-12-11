import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BlockCard } from './BlockCard'
import ViewMore from './ViewMore'

const { width } = Dimensions.get('window')
const SmallCard = ({ item }) => {
    if (item.type === 'viewMore') {
        return <ViewMore style={styles.viewMore} />
    }

    return (
        <BlockCard item={item}
            style={styles.container}
            imageStyle={styles.image} />
    )
}

export default SmallCard

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginLeft: 15,
        height: 200,

    },
    image: {
        height: 100,

    },
    viewMore: {
        width: width / 2,
        marginLeft: 15,
        height: 200,
    }
})
