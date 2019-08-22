import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Box } from '@material-ui/core/Box'; 
import { palette } from '@material-ui/system';
import { Badge, ListItem, Button } from 'react-native-elements';

export default class LocateHomeScreen extends Component {
    
    static navigationOptions = {
        title: "This is LocateHomeScreen. Share/Now/Detail"
    }
    
    render() {
        return (
            <View>
                <Box bgcolor="text.secondary" color="primary.main">
                    <Button>Sample Message</Button>
                </Box>
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
