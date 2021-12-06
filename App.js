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
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
  getDoc
} from 'firebase/firestore'

//colortheme 
import { colortheme } from './colors';
import { SignOut } from './components/SignOut';

const Stack = createNativeStackNavigator();

const FBapp = initializeApp(firebaseConfig)
const FSdb = initializeFirestore(FBapp, { useFetchStreams: false })
const FBauth = getAuth()
//const firestore = getFirestore();


export default function App(props) {
  //const navigation = useNavigation()
  const [auth, setAuth] = useState()
  const [user, setUser] = useState()
  const [signupError, setSignupError] = useState()
  const [signinError, setSigninError] = useState()
  const [data, setData] = useState()
  const FBauth = getAuth();


  // const usersRef = collection(firestore, "users");
  // const newsRef = collection(firestore, "news");

  useEffect(() => {
    setUser(user)
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        setAuth(true)
        setUser(user)
        if (!data) { getData() }
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  }, [data])
  //console.log(user);
  const SignupHandler = (email, password) => {
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        // Signed in 
        //const userCreated = userCredential.user;
        setUser(userCredential.user)
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
    //adding data to a collection with automatic id
    //const ref = await addDoc( collection(FSdb, FScollection ), data )
    //const ref = await setDoc( doc( FSdb, `users/${user.uid}/documents/${ new Date().getTime() }`), data )
    //console.log( ref.id )
    const newsRef = await setDoc(doc(FSdb, "News", `${user.uid}`), {
      Title: "Title 1",
      Content: "Content is",
      Author_name: `${user.email}`
    }, data)
    console.log(newsRef.id);
  }


  const getData = async () => {
    const docRef = doc(FSdb, "News", `${user.uid}`);
    const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   //console.log("Document data:", docSnap.data());
    //   let FSdata = []
    //   let item = {}
    //   item = docSnap.data()
    //   item.id = docSnap.id
    //   FSdata.push(item)
    //   setData(FSdata)
    // } else {
    //   console.log("No such document!");
    // }
    console.log('...getting data', user)
    const FSquery = query(collection(FSdb, News/`${user.uid}`))
    const unsubscribe = onSnapshot(FSquery, (querySnapshot) => {
      let FSdata = []
      querySnapshot.forEach((doc) => {
        let item = {}
        item = doc.data()
        item.id = doc.id
        FSdata.push(item)
      })
      setData(FSdata)
    })
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
          {(props) =>
            <Home {...props}
              auth={auth}
              data={data}
              user={user}
              addNews={addData}
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
