import React from 'react'
import { View, StyleSheet, TextInput  } from 'react-native'
import  HeaderIcon  from './Components/HeaderIcon'
import { Button, Icon, Text, Container, Content, Form, Item, Input, Label, Toast, Root  } from 'native-base'
import InputForm from './Components/InputForm'
import firebase from 'react-native-firebase'
export default class AddActivity extends React.Component{
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyD6ZYL56aCJQvg9XBdwdJzcQIGsySe6EZc",
            authDomain: "efficiently-productive.firebaseapp.com",
            databaseURL: "https://efficiently-productive.firebaseio.com",
            projectId: "efficiently-productive",
            storageBucket: "efficiently-productive.appspot.com",
            messagingSenderId: "442621728619"
        };
        // firebase.initializeApp(config);
    }

    numCheck = (num) => {
        var numbers = /^[0-9]+$/;
        if(num.match(numbers))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    addActivity = (act, pts) => {
        console.log("act");
        var uid = firebase.auth().currentUser.uid;
        if( act === "" ) {
            Toast.show({
                text: 'Please enter an activity.',
                buttonText: 'Okay',
                type: 'danger'
            })
        } else if (pts === ""){
            Toast.show({
                text: 'Please enter a point value.',
                buttonText: 'Okay',
                type: 'danger'
            })
        } else if (!this.numCheck(pts)) {
            Toast.show({
                text: 'Point values can only be numbers.',
                buttonText: 'Okay',
                type: 'danger'
            })
        } else {
            firebase.database().ref('users/' + uid + '/myActs/' + act ).set(
                {
                    title: act,
                    points: pts
                }
            ).then(
                Toast.show({
                    text: act + ' added succesfully.',
                    buttonText: 'Okay',
                    type: 'success'
                })
            );
            this.state.points = "";
            this.state.activity = "";
            console.log(this.state.activity.valueOf());
        }
    };


    constructor(props){
        super(props)
        this.state = {activity: "", points: -1}
    }
    render() {
        return(
            <Root>
                <Container>
                    <HeaderIcon />
                    <Content>
                        <Text style={styles.title}>
                            Add Activity
                        </Text>
                        <Text style={styles.textStyle}>
                            Add Activity and assign a point value based on your preference
                        </Text>
                        <Form>
                            <Item stackedLabel>
                                <Label>Activity</Label>
                                <Input value={this.state.activity} onChangeText={(text) => this.setState({ activity: text})} />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Point Value</Label>
                                <Input onChangeText={(p) => this.setState({ points: p})} />
                            </Item>
                        </Form>
                        <View style={styles.container}>
                            <Button style={styles.addButton} rounded iconLeft onPress = {() => this.addActivity(this.state.activity,this.state.points) }>
                                <Icon name = 'plus' type = 'FontAwesome'/>
                            </Button>
                        </View>
                    </Content>
                </Container>
            </Root>
        )
    }


}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10,
        textAlign: 'center'
    },
    addButton: {
        flex: 1,
        width: 250,
        marginBottom: 50,
        marginTop: 50,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

