import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontalList from './HorizontalList'

const TechNews = ({ JSdata }) => {

    return (
        <HorizontalList title="Tech News" JSdata={JSdata}>

        </HorizontalList>
    )
}

export default TechNews

const styles = StyleSheet.create({})
