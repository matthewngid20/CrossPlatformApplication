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
import { getFirestore, setDoc, doc } from 'firebase/firestore';

//colortheme 
import { colortheme } from './colors';
import { SignOut } from './components/SignOut';

const Stack = createNativeStackNavigator();
if (!initializeApp(firebaseConfig)) {
  initializeApp(firebaseConfig)
}

const firestore = getFirestore();


export default function App(props) {
  //const navigation = useNavigation()
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
        createUser('users', { id: userCredential.user.uid, email: userCredential.user.email, level: 1 })
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
        { setSigninError(e.code) }
      })
  }

  const SignoutHandler = () => {
    signOut(FBauth)
      .then(() => {
        setAuth(!auth)
        setUser(null)
      })
      .catch((e) => console.log(e))
  }

  const createUser = async (collection, data) => {
    console.log(data);
    await setDoc(doc(firestore, collection, data.id), data);
  }

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
        <Stack.Screen
          options={{
            headerRight: (props) => (
              <SignOut {...props}
                handler={SignoutHandler}
                user={user}
              />
            ),
          }}
          name="Home" >
          {(props) => <Home {...props}
            auth={auth}
          />}
        </Stack.Screen>
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
