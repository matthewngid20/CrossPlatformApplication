import React, { useState, useEffect } from 'react'
const { width, height } = Dimensions.get('screen');
import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native'
import { Feedback } from './Feedback';
import { useNavigation } from '@react-navigation/core'
//React elements
import { Button } from 'react-native-elements';
//colortheme
import { colortheme } from '../colors';



export function SignIn(props) {
    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (props.auth === true) { navigation.reset({ index: 0, routes: [{ name: "Home" }] }) }
    }, [props.auth])

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
            <Text style={styles.label}> Email</Text>
            <TextInput
                style={styles.textInput}
                placeholder="User name"
                autoCapitalize='none'
                onChangeText={(val) => setEmail(val)}
            />
            <Text style={styles.label}> Password</Text>
            <TextInput
                style={styles.textInput}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Password"
                autoCapitalize='none'
                onChangeText={(val) => setPassword(val)}
                secureTextEntry={true}
            />
            <Button
                title="Login"
                buttonStyle={{ backgroundColor: 'black' }}
                containerStyle={{ padding: 17 }}
                onPress={() => props.handler(email, password)}
            />
            <Button
                title="Register with us"
                buttonStyle={{ backgroundColor: 'green' }}
                containerStyle={{ padding: 17 }}
                onPress={() => { navigation.reset({ index: 0, routes: [{ name: "SignUp" }] }) }}
            />
            <Button
                title="Forgot password?"
                type="clear"
            />
            <Button
                title="Privacy"
                type="clear"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        margin: 2,
        marginRight: 17,
        marginLeft: 17,
        //color: 'white',
        //backgroundColor: colortheme.lightgrey,

    },
    container: {
        flex: 1,
        backgroundColor: colortheme.yellowbg,

    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 37,
    },
    label: {
        marginLeft: 12,
        fontSize: 17,
    }
})
