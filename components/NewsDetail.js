import React,{useState, useEffect} from 'react'
import {  Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import newsApi from '../api/newsApi'
const { width, height } = Dimensions.get('window')
const NewsDetail = ({ route }) => {
    const [news, setNews] = useState({})
    const { id: postId, category: postCategory } = route.params.item
    console.log(route.params.item);

    const fetchPost = async (id) => {
        const result = await newsApi.getSingle(id)
        console.log(result);
        setNews(result)
    }
    useEffect(() => {
        fetchPost(postId)
    }, [])
    const { title, content, thumbnail } = news;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image}
                source={{uri: thumbnail}} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}> {content}</Text>
            </View>
        </ScrollView>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container: {},
    image: {
        width: width,
        height: height / 3
    },
    contentContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 16,
        color: '#4e4d4d'
    }
})
