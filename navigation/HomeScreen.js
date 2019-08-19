import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'This is HomeScreen',
    };

    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Button
                    // normal
                    title="Frequently"  
                    onPress={()=> this.props.navigation.navigate('Frequent')}
                />
                <Button
                    type="solid"
                    title="By Location"
                    onPress={()=> this.props.navigation.navigate('Location')}
                />
                <Button
                    type="clear"
                    title="By Mapping"
                    onPress={()=> this.props.navigation.navigate('Mapping')}
                />
                <Button
                    type="outlined"
                    title="With Vehicles"
                    onPress={()=> this.props.navigation.navigate('Vehicles')}
                />
            </View>
        )
    }
}