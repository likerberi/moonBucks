import React from 'react';
import { View, Button, Text } from 'react-native';

export default class FrequentScreen extends React.Component {

    render() {
        return (
            <View style={{ felx: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>You moved from Home to Frequent</Text>
                {/* push the details route*/}
                <Button
                    title="Go to Frequent... again"
                    onPress={()=> this.props.navigation.push('Frequent')}
                />
            </View>
        )
    }
}