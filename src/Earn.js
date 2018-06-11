import React, { Component } from 'react';
import { ListView } from 'react-native';
import HeaderIcon  from './Components/HeaderIcon'
import firebase from 'react-native-firebase'
import { Container, Content, Button, Icon, List, ListItem, Text } from 'native-base';
let activities = [];
var dataToDisplay = ['x'];
export default class SwipeableListExample extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: dataToDisplay,
        };
    }
    componentWillMount(){
        var uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + uid + '/myActs').on('value', function(snapshot){
            snapshot.forEach(function(item){
                var t = item.val().title;
                var p = item.val().points;
                activities.push(t + " --- " + p);
            })

        })



    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }

    render() {
        console.log(this.state.listViewData);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container>
                <HeaderIcon />
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem>
                                <Text> {data} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="plus" type = "FontAwesome" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}