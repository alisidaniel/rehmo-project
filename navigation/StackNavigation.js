import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Notification from '../screens/Notification';
import Home from '../screens/Home';
import DetailView from '../screens/DetailView';

const Stack = createStackNavigator();

export default class StackNavigation extends React.Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="notification" component={Notification} />
                <Stack.Screen name="Detail page" component={DetailView} />
            </Stack.Navigator>
        );
    }
}