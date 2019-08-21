import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { Badge } from 'react-native-elements';

export default class LocateHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is LocateHomeScreen. Share/Now/Detail"
    }
    
    render() {
        return (
            <View style={styles.munan}>
                <Badge
                    status="success" 
                    onPress={()=> this.props.navigation.navigate('Detail')}
                >
                    좌석 공유 하기
                </Badge>
                <Badge 
                    status="warning"
                >
                    입찰 현황 보기
                </Badge>
                <Badge status="error"/> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    munan: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
