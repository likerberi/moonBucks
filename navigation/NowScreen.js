import React from 'react';
import { View, Button, Text } from 'react-native';

export default class NowScreen extends React.Component {

    static navigationOptions = {
        title: "This is NowScreen"
    };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}