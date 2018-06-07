import React from 'react'
import { Text, View } from 'react-native'
import  MyToolBar  from './Components/Header'
export default class AddActivity extends React.Component{

    render() {
        return(
            <View>
                <MyToolBar />
                <Text>
                    Add Activity.
                </Text>
            </View>
        )
    }


}