import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ManageScreen extends Component {
    
    static navigationOptions = {
        title: "This is ManageScreen"
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
