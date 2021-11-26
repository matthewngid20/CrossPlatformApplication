import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
//React elements
import { Button } from 'react-native-elements';


export function SignOut(props) {
    //const [auth, setAuth]= useState(props.auth)

    return (
        <View>
            <Button
                title="Sign out"
                onPress={() => { props.handler() }}
                buttonStyle={{ backgroundColor: 'red' }}
            //disabled={(validForm) ? false : true}
            />
        </View>

    )
}

