import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const NewsDetail = (props) => {
    console.log(props.route.params.item);
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image}
                source={require('../assets/youth.jpeg')} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>This is the title </Text>
                <Text style={styles.content}> "Brisbane, Australia (CNN Business)An Australian Senate committee on Thursday issued a scathing indictment of media mogul Rupert Murdoch's News Corp, calling it the country's \"clearest example of a troubling media monopoly.\"\r\n\r\nBut the committee stopped short of calling on News Corp to dilute or otherwise cede any of its Australian interests, and instead made a number of recommendations — including the creation of a judicial inquiry into media diversity, ownership and regulation.</Text>
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
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    },
    content:{
        fontSize: 16,
        color: '#4e4d4d'
    }
})
