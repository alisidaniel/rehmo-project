import React from 'react';
import { Button, View, Text } from 'react-native';

export default class Loading extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
                <Text>Loading</Text>
            </View>
        );
    }
}