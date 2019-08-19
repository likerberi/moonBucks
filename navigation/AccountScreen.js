import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AccountScreen extends Component {
    
    static navigationOptions = {
        title: "This is AccountScreen"
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
