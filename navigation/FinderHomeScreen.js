import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-elements';

export default class FinderHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is FinderHomeScreen. Find/List/Confirm/Manage"
    }
    
    render() {
        return (
            <View>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Find')}> 공간 찾기 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('List')}> 리스트 보기 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Confirm')}> 입찰 내역 체크 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Manage')}> 내역 관리 하기 </Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
