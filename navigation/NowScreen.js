import React from 'react';
import { View, Button, Text } from 'react-native';
import { Card } from 'react-native-elements';
export default class NowScreen extends React.Component {

    static navigationOptions = {
        title: "현재 상황 보기"
    };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}