import React from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Button
                    title="Frequently Visit"
                    onPress={()=> this.props.navigation.navigate('Frequent')}
                />
            </View>
        )
    }
}