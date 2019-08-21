import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ListScreen extends Component {
    
    static navigationOptions = {
        title: 'This is ListScreen',
    };
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
