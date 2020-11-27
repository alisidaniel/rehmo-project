import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Notification from '../screens/Notification';

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends React.Component{
    render(){
        return(
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabNavigation} />
            <Drawer.Screen name="Notification" component={Notification} />
          </Drawer.Navigator>
        );
    }
}