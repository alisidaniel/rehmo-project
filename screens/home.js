import React from 'react';
import { Button, View, Text } from 'react-native';
import {AuthContext} from '../context';

const Home = ({navigation}) => {

 const {signOut} = React.useContext(AuthContext);
    
    return(
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <Text>Home</Text>
            <Button onPress={() => navigation.push("Detail")} title="Details"/>
            <Text>OR</Text>
            
            <Button onPress={() => signOut()} title="Logout"/>
        </View>
    );
    
}

export default Home;