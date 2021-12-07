import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { SignOut } from './SignOut';
import { colortheme } from '../colors';
import { BlockCard } from './BlockCard';
import SearchBar from './SearchBar';
import FeatureNews from './FeatureNews';
import SmallCard from './SmallCard';
import BreakingNews from './BreakingNews';
import JSdata from '../data'
import TechNews from './TechNew';
import { FlatCard } from './FlatCard';
import PoliticalNews from './PoliticalNews';
import EntertainmentNews from './EntertainmentNews';


export function Home(props) {
    const navigation = useNavigation()
    const [data, setData] = useState()

    const breakingNews = JSdata.filter(item => item.category === 'breaking-news')
    const techNews = JSdata.filter(item => item.category === 'tech')
    const politicalNews = JSdata.filter(item => item.category === 'political')
    const entertainmentNews = JSdata.filter(item => item.category === 'entertainment')
    useEffect(() => {
        if (props.auth === false) { navigation.reset({ index: 0, routes: [{ name: "SignIn" }] }) }
        setData(props.data)
    }, [props.auth, props.data])

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    console.log(data);

    return (
        <ScrollView style={styles.container}>
            <SearchBar />

            {/* <Button 
            onPress = {() => props.addNews()}
            title = 'Add news'
            type = 'clear'
            /> */}
            <FeatureNews item={{
                id: '1',
                title: 'Christmas in the new time',
                desc:
                    'Desc is the short form of description and this format is the actual same as our real database.',
                thumbnail: 'https://cdn.pixabay.com/photo/2019/12/19/10/56/christmas-market-4705885__340.jpg',
                category: 'breaking-news',
            }} />
            <BreakingNews JSdata={breakingNews} />
            <PoliticalNews JSdata={politicalNews} />
            <TechNews JSdata={techNews} />
            <EntertainmentNews JSdata={entertainmentNews}/>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colortheme.yellowbg,
        flex: 1,
    }
})
