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
//import JSdata from '../data'
import TechNews from './TechNew';
import { FlatCard } from './FlatCard';
import PoliticalNews from './PoliticalNews';
import EntertainmentNews from './EntertainmentNews';
import newsApi from '../api/newsApi'
import NewsDetail from './NewsDetail';
import NewsList from './NewsList';


export function Home(props) {
    const navigation = useNavigation()
    const [data, setData] = useState()
    const [featuredNews, setFeaturedNews] = useState({})
    const [breakingNews, setBreakingNews] = useState([])
    const [politicalNews, setPoliticalNews] = useState([])
    const [techNews, setTechNews] = useState([])
    const [entertainmentNews, setEntertainmentNews] = useState([])

    const filterFeaturedNews = (NewsData) => {
        return [...NewsData].filter(item => item.featured === 'on').reverse()[0]
    }
    const filterMultipleNews = async () => {
        const allNews = await newsApi.getAll()
        setFeaturedNews(filterFeaturedNews(allNews))

        setBreakingNews(filterByAllCategory(allNews, 'breaking-news'))
        setPoliticalNews(filterByAllCategory(allNews, 'political'))
        setTechNews(filterByAllCategory(allNews, 'tech'))
        setEntertainmentNews(filterByAllCategory(allNews, 'entertainment'))

    }
    const qty = 3
    const filterByAllCategory = (NewsData, category) => {
        const result = [...NewsData].filter(item => item.category === category).reverse().splice(0, qty)
        if (result.length) {
            result.push({type:'viewMore', category: category, id:category})
            //console.log(result);
        }
        return result
    }
    useEffect(() => {
        if (props.auth === false) { navigation.reset({ index: 0, routes: [{ name: "SignIn" }] }) }
        setData(props.data)
        filterMultipleNews()
    }, [props.auth, props.data])

    useEffect(() => {
        setData(props.data)
    }, [props.data])


    return (
        <ScrollView style={styles.container}>
            <SearchBar />
            <FeatureNews item={featuredNews} />
            <BreakingNews JSdata={breakingNews} />
            <PoliticalNews JSdata={politicalNews} />
            <TechNews JSdata={techNews} />
            <EntertainmentNews JSdata={entertainmentNews} />
        </ScrollView>
        //<NewsList/>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colortheme.yellowbg,
        flex: 1,
    }
})
