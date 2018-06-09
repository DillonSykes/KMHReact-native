import React from 'react'
import { Text, View, StyleSheet, TextInput  } from 'react-native'
import  MyToolBar  from './Components/Header'
export default class AddActivity extends React.Component{

    render() {
        return(
            <View>
                <MyToolBar />
                <Text style={styles.title}>
                    Add an Activity
                </Text>
                <TextInput style={styles.textInput}/>

            </View>
        )
    }


}
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        alignItems: 'center'
    }


})