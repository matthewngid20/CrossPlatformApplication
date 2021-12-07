import React from 'react'
import { StyleSheet,  } from 'react-native'
import VerticalList from './VerticalList'

const PoliticalNews = ({JSdata}) => {
    return (
        <VerticalList title ="Political News" JSdata = {JSdata} />
    )
}

export default PoliticalNews

const styles = StyleSheet.create({})
