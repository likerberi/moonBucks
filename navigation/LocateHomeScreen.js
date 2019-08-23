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
                    <Card
                        title="좌석 공유 하기"
                    />
                    <Card
                        title="입찰 현황 보기"
                    />
                    <Card
                        title="정산 관련 조회"
                    />
                </View>
        )
    };
};
