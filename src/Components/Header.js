import React from 'react'
import { Header, Icon } from 'react-native-elements'
import { View } from 'react-native'
import firebase from "react-native-firebase";
import {withNavigation} from 'react-navigation'
import App from '../App'

class MyToolBar extends React.Component{
    constructor(props){
        super(props)
    }
    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('Loading');
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Header
                leftComponent={<Icon name = 'home' type = 'font-awesome' onPress = { () => this.props.navigation.navigate('Main') } />}
                centerComponent={{ text: 'Know My Habits', style: { color: '#fff' } }}
                rightComponent={<Icon name = 'sign-out' type = 'font-awesome' onPress={() => this.signOutUser()}  />}
            />
        )
    }
}
export default withNavigation (MyToolBar)
