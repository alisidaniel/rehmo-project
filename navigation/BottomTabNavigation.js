import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigation from '../navigation/StackNavigation';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigation extends Component{
    render(){
        return(
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
             let iconName;
             if (route.name === 'Home') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              } else if (route.name === 'Search') {
                iconName = focused
                ? 'ios-list-box'
                : 'ios-list';
              }
        return <Ionicons name={iconName} size={size} color={color}/>;
                },
              })}
              tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              }}
            >   
                <Tab.Screen name="Home" component={StackNavigation} />
                <Tab.Screen name="Search" component={Profile} />
            </Tab.Navigator>
        );
    }
}
