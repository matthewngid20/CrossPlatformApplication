import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
import { SignOut } from './components/SignOut';

const Stack = createNativeStackNavigator();
if (!initializeApp(firebaseConfig)) {
  initializeApp(firebaseConfig)
}

export default function App() {

  const [auth, setAuth] = useState()
  const [user, setUser] = useState()
  const [signupError, setSignupError] = useState()
  const [signinError, setSigninError] = useState()
  const FBauth = getAuth();

  useEffect(() => {
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        setAuth(true)
        setUser(user)
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  })

  const SignupHandler = (email, password) => {
    console.log("test");
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {

        // Signed in 
        const userCreated = userCredential.user;
        setUser(userCreated)
        setAuth(true)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        setSignupError(errorMessage)
        // ..
      });
  }

  const SigninHandler = (email, password) => {
    signInWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setAuth(true)
      })
      .catch((e) => {
        { setSigninError(error.code) }
      })
  }

  console.log("auth state " + auth);
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" >
          {(props) => <SignUp {...props}
            handler={SignupHandler}
            auth={auth}
            error={signupError}
          />}
        </Stack.Screen>
        <Stack.Screen name="SignIn" >
          {(props) => <SignIn {...props}
            auth={auth}
            handler={SigninHandler}
            error={signinError} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="SignOut" component={SignOut} /> */}

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
