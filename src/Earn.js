import React, { Component } from 'react';
import { ListView } from 'react-native';
import HeaderIcon  from './Components/HeaderIcon'
import firebase from 'react-native-firebase'
import { Container, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import { activities } from './Main'
const dataToDisplay = activities;
export default class SwipeableListExample extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: dataToDisplay,
        };
    }
    addPoints(data){
        var regex = /[+-]?\d+(?:\.\d+)?/g;
        var match;
        while (match = regex.exec(str)) {
            console.log(match[0]);
        }
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        console.log(this.state.listViewData);
        console.log(activities);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const  l = ds.cloneWithRows(this.state.listViewData);
        return (
            <Container>
                <HeaderIcon />
                <Content>
                    <List
                        dataSource={l}
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