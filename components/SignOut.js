import React from 'react'
import { View } from 'react-native'
//React elements
import { Button } from 'react-native-elements';
import { colortheme } from '../colors';

export function SignOut  ()  {
    return (
        
            <Button
                title="Sign out"
                //onPress
                buttonStyle={{ backgroundColor: colortheme.blackish }}
                containerStyle={{ padding: 17 }}
                //disabled={(validForm) ? false : true}
            />
        
    )
}
