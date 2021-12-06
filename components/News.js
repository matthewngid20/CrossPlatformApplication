import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
export const News = (props) => {
    //cconsole.log(props.data);
    return (
        <View style={styles.news} >
            <Text style={styles.title}>News title 1</Text>
            <Image style={styles.img}
                source={require("../assets/Education.jpeg")}
            />
            <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    news: {
        flex: 1, 

    },
    img: {
        width: '50%',
        height: 170,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    content: {
        margin: 15,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
