import React, { useState } from 'react'
import { View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { colortheme } from '../colors';

export function SignOut  (props)  {
    //const [auth, setAuth]= useState(props.auth)
    return (
            <Button
                title="Sign out"
                onPress={ () => props.handler() }
                buttonStyle={{ backgroundColor: colortheme.blackish }}
                //disabled={(validForm) ? false : true}
            />
        
    )
}
