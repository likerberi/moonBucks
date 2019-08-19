import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class VehiclesScreen extends Component {

    static navigationOptions = {
        title: 'This is Vehicles-Screen.'
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
