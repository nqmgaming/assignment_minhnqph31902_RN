import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
            })
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{
            backgroundColor: '#0C0F14',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image style={{
                width: 170,
                height: 170
            }} source={require('../../assets/images/logo.png')}/>
            <Text style={{
                color: '#FFFFFF',
                fontSize: 24,
                fontWeight: 'bold'
            }}>
                Coffe Shop
            </Text>
        </View>
    );
};

export default WelcomeScreen;
