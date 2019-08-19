import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SettingScreen extends Component {
    
    static navigationOptions = {
        title: "This is SettingScreen"
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
