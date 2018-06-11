import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
    constructor(props){
        super(props)
        this.state = {activity: "", points: ""}
    }
    render() {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Activity</Label>
                    <Input onChangeText={(text) => this.setState({ activity: text})} />
                </Item>
                <Item floatingLabel last>
                    <Label>Point Value</Label>
                    <Input onChangeText={(text) => this.setState({ points: text})} />
                </Item>
            </Form>
        );
    }
}