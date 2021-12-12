import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Feedback } from './Feedback';
//React elements
import { Button } from 'react-native-elements';
//colortheme
import { colortheme } from '../colors';
import { initializeApp } from 'firebase/app'
import {firebaseConfig} from '../Config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

const FBapp = initializeApp(firebaseConfig)
const FBauth = getAuth()

export function SignUp(props) {
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)
    const [email, setEmail] = useState()
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()

    const validateEmail = (emailVal) => {
        if (emailVal.indexOf('@') > 0) { setValidEmail(true) }
        else { setValidEmail(false) }
        setEmail(emailVal)
    }

    const validatePassword = (passwordVal) => {
        if (passwordVal.length > 8) {
            setValidPassword(true)
        }
        else { setValidPassword(false) }
        setPassword(passwordVal)
    }

    const SignupHandler = (email, password) => {
        createUserWithEmailAndPassword(FBauth, email, password)
          .then((userCredential) => {
            setUser(userCredential.user)
            //setAuth(true)
            const message = "Registered Successfully"
            Alert.alert(message)
            navigation.reset({ index: 0, routes: [{ name: "home" }] })
          })
          .catch((error) => {
              console.log(error);
            const errorCode = error.code;
            const message = errorCode.split('/').pop()
            Alert.alert(message.split('-').join(' '))
          });
      }
    
    useEffect(() => {
        if (validEmail && validPassword) { setValidForm(true) }
        else { setValidForm(false) }
    }, [validPassword, validEmail])


    useEffect(() => {
        if (props.auth === true) { navigation.reset({ index: 0, routes: [{ name: "home" }] }) }
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
                onChangeText={(val) => validateEmail(val)}
            />
            <Text style={styles.label}> Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(val) => validatePassword(val)}
                placeholder="Password"
                autoCapitalize='none'
                secureTextEntry={true}
            />
            <Button
                title="Create your account"
                onPress={() => SignupHandler(email,password)}
                buttonStyle={{ backgroundColor: colortheme.blackish }}
                containerStyle={{ padding: 17 }}
                disabled={(validForm) ? false : true}
            />
            <Feedback message={props.error} />

            <Button
                title="Click here to login"
                onPress={() => navigation.navigate("SignIn")}
                buttonStyle={{ backgroundColor: 'green' }}
                containerStyle={{ padding: 17, paddingTop: 0, }}
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
        padding: 10,
        textAlign: 'center',
        marginBottom: 10,
        marginRight: 17,
        marginLeft: 17,

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

