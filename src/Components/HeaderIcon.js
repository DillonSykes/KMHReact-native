import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import firebase from "react-native-firebase";
import {withNavigation} from 'react-navigation'
class HeaderIcon extends Component {
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
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name = 'home' type = 'FontAwesome' onPress = { () => this.props.navigation.navigate('Main') } />
                    </Button>
                </Left>
                <Body>
                    <Title>Know My Habits</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name = 'sign-out' type = 'FontAwesome' onPress={() => this.signOutUser()}  />
                    </Button>
                </Right>
            </Header>
        );
    }
}
export default withNavigation (HeaderIcon)