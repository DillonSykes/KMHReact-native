import React from 'react'
import { Text, View } from 'react-native'
import MyToolBar from './Components/Header'
export default class Earn extends React.Component{

    render() {
        return(
            <View>
                <MyToolBar/>
                <Text>
                    Earn.
                </Text>
            </View>
        )
    }


}