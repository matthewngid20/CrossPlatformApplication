import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet,Image,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Feedback } from './Feedback';
//React elements
import { Button } from 'react-native-elements';
//colortheme
import { colortheme } from '../colors';

export function  SignUp (props) {
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()

    const validateEmail = (emailVal) => {
        if(emailVal.indexOf('@') > 0 ) {setValidEmail(true)}
        else{setValidEmail(false)}
        setEmail(emailVal)
    }

    const validatePassword = (passwordVal) => {
        if(passwordVal.length > 8){
            setValidPassword(true)
        }
        else{setValidPassword(false)}
        setPassword(passwordVal)
    }

    const submitHandler = () => {
        props.handler(email, password)
    }

    useEffect(() => {
        if(validEmail && validPassword)
        {setValidForm(true)}
        else {setValidForm(false)}
    }, [validPassword, validEmail])
    
    console.log(validForm);

    useEffect(() => {
        if(props.auth ===true) {navigation.reset({index: 0, routes: [{name: "Home"}]})}
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
        <Text> Email</Text>
        <TextInput
            style={styles.textInput}
            placeholder="User name"
            onChangeText={(val) => validateEmail(val)}
        />
        <Text> Password</Text>
        <TextInput
            style={styles.textInput}
            onChangeText={(val) => validatePassword(val)}
            //value={number}
            placeholder="Password"
            secureTextEntry={true} 
        />
        <Button
            title="Create your account"
            onPress = {() => submitHandler()}
            buttonStyle={{ backgroundColor: colortheme.blackish }}
            containerStyle = {{padding: 17}}
            disabled = {(validForm)? false : true}
        />
        <Feedback message = {props.error}/>

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
        backgroundColor: colortheme.yellowbg,

    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 37,
    }
})

