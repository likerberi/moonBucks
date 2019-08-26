import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
export default class LocateHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is LocateHomeScreen. Share/Now/Detail"
    }
    
    pleaseChange() {
        alert("change music");
    }

    render() {
        return (            
            <View>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Share')}> 좌석 공유 하기 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Now')}> 입찰 현황 보기 </Text>
                </Card>
                <Card>
                    <Text onPress={() => this.props.navigation.navigate('Detail')}> 정산 내역 보기 </Text>
                </Card>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    munan: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})