import React from 'react';
import { Button, View, Text } from 'react-native';

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
                <Text>Welcome page</Text>
                <Button onPress={() => {navigate("Login")}} title="Countinue as agent"/>
            </View>
        )
    }
}