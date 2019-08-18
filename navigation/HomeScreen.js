import React from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'This is HomeScreen',
    };

    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Button
                    title="Frequently"  
                    onPress={()=> this.props.navigation.navigate('Frequent')}
                />
                <Button
                    title="By Location"
                    onPress={()=> this.props.navigation.navigate('Location')}
                />
                <Button
                    title="By Mapping"
                    onPress={()=> this.props.navigation.navigate('Mapping')}
                />
            </View>
        )
    }
}