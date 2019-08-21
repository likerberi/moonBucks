import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FinderHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is FinderHomeScreen. Find/List/Confirm/Manage"
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
