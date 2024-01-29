import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from "../screens/main/HomeScreen";
import CartScreen from "../screens/main/CartScreen";
import TrackScreen from "../screens/main/TrackScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

const Tab = createBottomTabNavigator();
const NavigationHome = () => {
    return (
        <Tab.Navigator initialRouteName={'Home'} screenOptions={{
            tabBarStyle: {
                backgroundColor: '#0C0F14',
                borderTopWidth: 0,
            },
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" color={color} size={size}/>
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen name={'Cart'} component={CartScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="cart" color={color} size={size}/>
                ),
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
                headerShown: false,
                tabBarShowLabel: false,

            }}/>
            <Tab.Screen name={'Track'} component={TrackScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="location" color={color} size={size}/>
                ),
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
                headerShown: false,
                tabBarShowLabel: false,
            }}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" color={color} size={size}/>
                ),
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
                headerShown: false,
                tabBarShowLabel: false,
            }}/>
        </Tab.Navigator>
    );
};

export default NavigationHome;
