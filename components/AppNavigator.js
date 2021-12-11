import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native'
import { Home } from './Home'
import NewsDetail from './NewsDetail'
import NewsList from './NewsList'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor:  'black',
            }}>
            <Stack.Screen name='home ' component={Home}>
            </Stack.Screen>
            <Stack.Screen name='NewsDetail' component={NewsDetail}>
            </Stack.Screen>
            <Stack.Screen name='NewsList' component={NewsList}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
