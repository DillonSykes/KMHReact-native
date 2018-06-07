import React from 'react'
import { Text, View } from 'react-native'
import MyToolBar from './Components/Header'
export default class History extends React.Component{

    render() {
        return(
            <View>
                <MyToolBar/>
                <Text>
                    History.
                </Text>
            </View>
        )
    }


}