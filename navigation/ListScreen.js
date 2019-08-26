import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class ListScreen extends Component {
    
    static navigationOptions = {
        title: 'This is ListScreen',
    };
    
    render() {
        return (
            <View>
                <Card>
                    <Text>입찰 리스트 조회</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
