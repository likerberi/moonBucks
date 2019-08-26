import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class ShareScreen extends Component {
    
    static navigationOptions = {
        title: "공유 페이지"
    }
    
    render() {
        return (
            <View>
                <Card>
                    <Text>매장 선택</Text>
                </Card>
                <Card>
                    <Text>사진 등록 / 좌석 현황</Text>
                </Card>
                <Card>
                    <Text>시간 설정</Text>
                </Card>
                <Card>
                    <Text>Bidding</Text>
                </Card>           
            </View>
        )
    };
}

const styles = StyleSheet.create({

});
