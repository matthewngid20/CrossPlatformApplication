import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Home } from './components/Home';
//Firebase
import { firebaseConfig } from './Config';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
//colortheme 
import { colortheme } from './colors';

const Stack = createNativeStackNavigator();
if (!initializeApp(firebaseConfig)){
  initializeApp(firebaseConfig)
}

export default function App() {

  const [auth, setAuth] = useState()
  const [user, setUser] = useState()

  const SignupHandler = (email, password) => {
    console.log("test");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {``
        // Signed in 
        const userCreated = userCredential.user;
        setAuth(true)
        setUser(userCreated)
        console.log(userCreated);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        // ..
      });
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SignUp" >
          { (props) => <SignUp handler = { SignupHandler} {...props} auth = {auth}/>}
        </Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
