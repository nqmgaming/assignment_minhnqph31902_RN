import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from "../../constants/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation();
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'HomeApp'}],
        })
    }

    return (
        <View style={{
            backgroundColor: colors.backgroundColor,
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
        }}>

            <Image style={{
                width: 120,
                height: 120,
                marginTop: 80
            }} source={require('../../assets/images/logo.png')}/>
            <Text style={{
                fontSize: 22,
                color: colors.text,
                fontWeight: 'bold',
                flex: 0
            }}>
                Welcome to Coffe app!
            </Text>
            <Text style={{
                fontSize: 18,
                color: colors.title,
                fontWeight: 'bold',
                flex: 0,
                marginVertical: 10
            }}>
                Login to Continue
            </Text>

            <View style={{
                width: '85%',
                marginVertical: 10
            }}>
                <TextInput placeholderTextColor={colors.title}
                           placeholder={'Email Address'}
                           keyboardType={"email-address"}
                           cursorColor={colors.orange}
                           style={{
                               width: '100%',
                               borderWidth: 2,
                               borderColor: colors.title,
                               padding: 12,
                               borderRadius: 10,
                               color: colors.title,
                               fontWeight: 'bold',
                               fontSize: 18
                           }}/>
            </View>
            <View style={styles.container}>
                <TextInput
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={colors.title}
                    cursorColor={colors.orange}
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                    onPress={toggleShowPassword}
                />
            </View>
            <TouchableOpacity style={styles.touchable} activeOpacity={0.6}
                              onPress={handleLogin}>
                <Text style={styles.text}>
                    Sign in
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleLogin}
                style={[styles.touchable, {
                    flexDirection: "row",
                    backgroundColor: colors.text
                }]}>
                <Image style={{
                    width: 24,
                    height: 24,
                    justifyContent: 'flex-start',
                    marginEnd: 12
                }} source={require('../../assets/images/google.png')}/>
                <Text style={[styles.text, {color: colors.backgroundColor, alignSelf: 'center'}]}>
                    Sign in with Google
                </Text>

            </TouchableOpacity>

            <Text
                style={[styles.text, {fontSize: 16, color: colors.title}]}>
                Don't have account? Click <Text style={{color: colors.orange}} onPress={() => {
                navigation.navigate('Register');
            }}>Register</Text>
            </Text>
            <Text style={[styles.text, {fontSize: 16, color: colors.title}]}>
                Forgot Password? Click <Text style={{color: colors.orange}}>Reset</Text>
            </Text>

        </View>
    )
        ;

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
        borderRadius: 10,
        borderWidth: 2,
        width: '85%',
        borderColor: colors.title,
        paddingHorizontal: 14,
    },
    input: {
        flex: 1,
        color: colors.title,
        paddingVertical: 10,
        paddingRight: 12,
        fontSize: 18,
    },
    icon: {
        marginLeft: 10,
    },
    heading: {
        alignItems: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 20,
    },
    text: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 12
    },
    touchable: {
        backgroundColor: colors.orange,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 16
    }
})

export default LoginScreen;
