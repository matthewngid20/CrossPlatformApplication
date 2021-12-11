import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BlockCard } from './BlockCard'
import ViewMore from './ViewMore'
import newsApi from '../api/newsApi'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

const SmallCard = ({ item, onPress }) => {
    const navigation = useNavigation()
    const handleMore = async (category) => {
        const result = await newsApi.getByCategory(category)
        navigation.navigate('NewsList', result)
    }
    if (item.type === 'viewMore') {
        return <ViewMore style={styles.viewMore} onPress={() => handleMore(item.category)} />
    }

    return (
        <BlockCard
            onPress={onPress}
            item={item}
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
