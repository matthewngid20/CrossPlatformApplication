import React from 'react'
import { View,Text } from 'react-native'
//React elements
import { Button } from 'react-native-elements';

export  function Feedback  (props) {
    return (
        <View>
            <Text>
                {props.message}
            </Text>
        </View>
    )
}
