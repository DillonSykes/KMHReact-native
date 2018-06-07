import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
import MyToolBar from './Components/Header'
import { Button, Icon } from 'react-native-elements'


export default class Main extends React.Component {
    state = { currentUser: null };

    componentDidMount() {
        const { currentUser } = firebase.auth();

        this.setState({ currentUser })
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View>
                <MyToolBar/>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button
                    raised
                    icon={{name: 'cached'}}
                    title='RAISED WITH ICON' />
                <Button
                    icon={
                        {
                            name : 'plus',
                            size : 15,
                            color : 'black',
                            type :'font-awesome',
                        }

                    }
                    onPress = {() => this.props.navigation.navigate('AddActivity')}
                    title={"Add Activity"}
                />
                <TouchableOpacity style={styles.button}
                    onPress = {() => this.props.navigation.navigate('Earn')}>
                    <Text>Earn EP</Text>
                </TouchableOpacity>
                <Button
                    onPress = {() => this.props.navigation.navigate('History')}
                    title={"History"}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width : 300
    }
})