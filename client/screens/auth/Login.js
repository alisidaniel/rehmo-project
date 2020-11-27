import React from 'react';
import {Text, Button, View} from 'react-native';
import {AuthContext} from  '../../context';

const Login = ({ navigation }) =>{
    
 const { siginIn, siginUp } = React.useContext(AuthContext);
 
    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <Text>Login page </Text>
            <Button onPress={() => siginIn()} title="Login"/>
            <Text>OR</Text>
            <Button onPress={() => siginUp()} title="Register"/>
        </View>
    )
}
export default Login;