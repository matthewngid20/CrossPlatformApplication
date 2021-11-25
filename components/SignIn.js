import React from 'react'
const { width, height } = Dimensions.get('screen');
import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native'
import { Feedback } from './Feedback';
//React elements
import { Button } from 'react-native-elements';
//colortheme
import { colortheme } from '../colors';



export function SignIn(props) {
    const navigation = useNavigation()

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
            />
            <Text> Password</Text>
            <TextInput
                style={styles.textInput}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Password"
            />
            <Button
                title="Login"
                buttonStyle={{ backgroundColor: 'black' }}
                containerStyle = {{padding: 17}}
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
