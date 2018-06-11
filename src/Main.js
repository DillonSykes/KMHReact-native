import React from 'react'
import { StyleSheet, Platform, Image, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
import MyToolBar from './Components/Header'
import HeaderIcon from './Components/HeaderIcon'
import { Button, Icon, Text, Container, Content } from 'native-base'


export default class Main extends React.Component {
    state = { currentUser: null };

    componentDidMount() {
        const { currentUser } = firebase.auth();

        this.setState({ currentUser })
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Container>
                <HeaderIcon/>
                <Content>
                    <View style={styles.container}>
                        <Text style={styles.textStyle}>
                            Hi {currentUser && currentUser.email}!
                        </Text>
                        <Text style={styles.textStyle}>
                            Welcome to KnowMyHabits here you build good habits and weed out the bad.
                        </Text>
                        <Button style={styles.buttonTop} rounded iconLeft onPress = {() => this.props.navigation.navigate('AddActivity')}>
                            <Icon name = "plus" type = "FontAwesome"/>
                            <Text>Add Activity</Text>
                        </Button>
                        <Button style={styles.button} rounded iconLeft onPress = {() => this.props.navigation.navigate('Earn')}>
                            <Icon name = "money" type = "FontAwesome"/>
                        <Text>Earn</Text>
                        </Button>
                        <Button style={styles.button} rounded iconLeft onPress = {() => this.props.navigation.navigate('History')}>
                            <Icon name = "history" type = "FontAwesome"/>
                            <Text>History</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        width: 250,
        marginBottom: 50,
        alignSelf: 'center'
    },
    buttonTop: {
        flex: 1,
        width: 250,
        marginBottom: 50,
        marginTop: 50,
        alignSelf: 'center'
    },
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10,
        textAlign: 'center'
    }
});