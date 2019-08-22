import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { seat, unknown, money } from '../icons';
import { Badge, ListItem } from 'react-native-elements';

const locateItem = [
    {
        title: 'Shala',
        icon: 'seat'
    },
    {
        title: 'BlaBla',
        icon: 'unknown'
    },
    {
        title: 'haha',
        icon: 'money'
    },
]

export default class LocateHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is LocateHomeScreen. Share/Now/Detail"
    }
    
    render() {
        return (
            <View>
            {
                locateItem.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
                  />
                ))
            }
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
    badgeFont: {
        fontSize: 12,
    }
})
