import React from 'react'
import { StyleSheet} from 'react-native'
import HorizontalList from './HorizontalList'

const BreakingNews = ({ JSdata }) => {

    return (
        <HorizontalList title="Breaking News" JSdata={JSdata}>

        </HorizontalList>
    )
}

export default BreakingNews

const styles = StyleSheet.create({})
