import React from 'react';
import {Text, Button, View} from 'react-native';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
                <Text>Register </Text>
            </View>
        );
    }
}

export default Register;