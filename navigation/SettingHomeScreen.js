import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class SettingHomeScreen extends Component {

    static navigationOptions = {
        title: "Setting Home screen. Account // Alarm // etc"
    }

    render() {
        return (
            <View>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Account')}> 계정 관련 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Setting')}> 앱 설정 </Text>
                </Card>
            </View>
        )
    };
}

const styles = StyleSheet.create({

});
