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
import {
  initializeFirestore,
  setDoc,
  doc,
  collection,
  query,
  onSnapshot,
  getDoc
} from 'firebase/firestore'

//colortheme 
import { colortheme } from './colors';
import { SignOut } from './components/SignOut';
import AppNavigator from './components/AppNavigator';

const Stack = createNativeStackNavigator();

const FBapp = initializeApp(firebaseConfig)
const FSdb = initializeFirestore(FBapp, { useFetchStreams: false })
const FBauth = getAuth()


export default function App(props) {
  const [auth, setAuth] = useState()
  const [user, setUser] = useState()
  const [signupError, setSignupError] = useState()
  const [signinError, setSigninError] = useState()
  const [data, setData] = useState()
  const FBauth = getAuth();

  useEffect(() => {
    setUser(user)
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        setAuth(true)
        setUser(user)
        // if (!data) { getData() }
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  }, [data])
  const SignupHandler = (email, password) => {
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setAuth(true)
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

      }).catch((e) => {
        { setSigninError(e.code) }
      })
  }


  const SignoutHandler = () => {
    signOut(FBauth)
      .then(() => {
        setAuth(false)
        setUser(null)
      })
      .catch((e) => console.log(e))
  }
  let array = ["Business"]
  const addData = async (FScollection, data) => {
    const newsRef = await setDoc(doc(FSdb, "News", `${user.uid}`), {
      Title: "Title 1",
      Content: "Content is",
      Author_name: `${user.email}`
    }, data)
    console.log(newsRef.id);
  }


  // const getData = async () => {
  //   const docRef = doc(FSdb, "News", `${user.uid}`);
  //   const docSnap = await getDoc(docRef);

  //   console.log('...getting data', user)
  //   const FSquery = query(collection(FSdb, News / `${user.uid}`))
  //   const unsubscribe = onSnapshot(FSquery, (querySnapshot) => {
  //     let FSdata = []
  //     querySnapshot.forEach((doc) => {
  //       let item = {}
  //       item = doc.data()
  //       item.id = doc.id
  //       FSdata.push(item)
  //     })
  //     setData(FSdata)
  //   })
  // }

  return (
    <NavigationContainer>
     <AppNavigator/>
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
