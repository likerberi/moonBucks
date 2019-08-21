import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SettingHomeScreen extends Component {

    static navigationOptions = {
        title: "Setting Home screen. Account // Alarm // etc"
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
