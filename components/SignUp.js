import React from 'react'
import { View, Text, StyleSheet,Image,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'

//React elements
import { Button } from 'react-native-elements';

export function  SignUp (props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", marginTop: 64, justifyContent: "center" }}>
            <Image
                source={require('../assets/icon.png')}
            />
            <Image
                source={require('../assets/brand.png')}
            />
        </View>
        <Text style={styles.welcomeText}> Welcome to EMET</Text>
        <Text> Email</Text>
        <TextInput
            style={styles.textInput}
            placeholder="User name"
        />
        <Text> Password</Text>
        <TextInput
            style={styles.textInput}
            //onChangeText={onChangeNumber}
            //value={number}
            placeholder="Password"
        />
        <Button
            title="Create your account"
            buttonStyle={{ backgroundColor: 'black' }}
            containerStyle = {{padding: 17}}
        />
        <Button
            title="Click here to login"
            onPress  = {() => navigation.navigate ("SignIn")}
            type="clear"
            containerStyle = {{paddingBottom: 10}}
        />
        <Button
            title="Privacy"    
            type="clear"            
        />
        <Button
            title="About"    
            type="clear"            
        />
    </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 15,
        textAlign: 'center',
        marginBottom: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#ffdf3a',

    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 37,
    }
})

