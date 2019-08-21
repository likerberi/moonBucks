import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class DetailScreen extends React.Component {

    static navigationOptions = {
        title: 'This is DetailScreen',
    };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}