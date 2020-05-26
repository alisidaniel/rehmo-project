import React from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>Home</Text>
                   {/* <Button onPress={() => navigation.navigate('Detail page')} title="Go to TabA Details"/> */}
            </View>
        );
    }
}