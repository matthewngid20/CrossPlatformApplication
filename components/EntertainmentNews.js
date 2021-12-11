import React from 'react'
import { StyleSheet, } from 'react-native'
import VerticalList from './VerticalList'

const EntertainmentNews = ({ JSdata }) => {
    return (
        <VerticalList title="Entertainment News" JSdata={JSdata} />
    )
}

export default EntertainmentNews

const styles = StyleSheet.create({})
