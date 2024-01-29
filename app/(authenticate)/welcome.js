import {ActivityIndicator, Image, StatusBar, StyleSheet, Text, View} from 'react-native'
import React, { useEffect } from 'react'
import * as navigation from "expo-router/build/global-state/routing";
import { useRouter } from "expo-router";
import { colors } from "../../src/constants/colors";
import LottieView from "lottie-react-native";


const welcome = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace('/(authenticate)/login');
        }, 2000);
    }, []);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 80, marginTop: 50 }} />
            < Text style={{
                color: colors.backgroundColor,
                fontSize: 23,
                fontWeight: 'bold',
                margin: 10
            }}>
                Shops
            </Text>
            <ActivityIndicator size="large" color={colors.backgroundColor} />
            <StatusBar
                animated={true}
                barStyle="dark-content"

            />

        </View>
    )
}

export default welcome

const styles = StyleSheet.create({})
