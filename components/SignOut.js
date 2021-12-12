import React from 'react'
import { View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'
//React elements
import { Button, } from 'react-native-elements';


export function SignOut(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Button
                title="Sign out"
                onPress={() => { navigation.reset({ index: 0, routes: [{ name: "SignIn" }] }) }}
                buttonStyle={{ backgroundColor: 'red' }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 77,
        width: 100,      
        flexDirection: 'row',
        marginLeft: 'auto'
    }
})
