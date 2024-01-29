import {
    Image, Keyboard, KeyboardAvoidingView,
    Pressable, StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {colors} from "../../src/constants/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {Checkbox} from "expo-checkbox";
import isEmail from "validator/es/lib/isEmail";
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [isCheck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [enableLogin, setEnableLogin] = useState(false);


    // validate email
    const validateEmail = () => {
        if (email === '') {
            setErrorEmail('*Email is required');
            return false;
        }
        if (!isEmail(email)) {
            setErrorEmail('*Invalid email');
            return false;
        }
        setErrorEmail('');
        return true;
    };

    // validate password
    const validatePassword = () => {
        if (password === '') {
            setErrorPassword('*Password is required');
            return false;
        }else if (password.length < 6) {
            setErrorPassword('*Password must be at least 6 characters');
            return false;
        }
        setErrorPassword('');
        return true;
    };

    // validate form
    const validateForm = () => {
        if (!validateEmail() || !validatePassword()) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        if (email !== '' && password !== '') {
            setEnableLogin(true);
        } else {
            setEnableLogin(false);
        }
    }, [email, password]);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = () => {
        if (!validateForm()) {
            return;
        }
        router.replace("/(tabs)/home");
    };

    const handleRegister = () => {
        router.replace("/(authenticate)/register");
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View
                style={{

                    flex: 1,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                }}
            >
                <StatusBar
                    animated={true}
                    barStyle="dark-content"
                />
                <Image source={require('../assets/images/logo.png')} style={{width: 80, height: 80, marginTop: 50}}/>
                <Text
                    style={{
                        fontSize: 22,
                        color: colors.backgroundColor,
                        fontWeight: "bold",
                        flex: 0,
                    }}
                >
                    Welcome to Shop app!
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: colors.orange,
                        fontWeight: "bold",
                        flex: 0,
                        marginVertical: 10,
                    }}
                >
                    Login to Continue
                </Text>

                <KeyboardAvoidingView
                    style={{
                        width: "85%",
                        marginVertical: 10,
                    }}
                >
                    <TextInput
                        placeholderTextColor={colors.title}
                        placeholder={"Email Address"}
                        keyboardType={"email-address"}
                        textContentType={"emailAddress"}
                        returnKeyType={"next"}
                        value={email}
                        onChangeText={setEmail}
                        onSubmitEditing={() => Keyboard.dismiss()}
                        clearButtonMode="while-editing"
                        cursorColor={colors.orange}
                        style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: errorEmail ? "red" : colors.title,
                            padding: 12,
                            borderRadius: 10,
                            color: colors.title,
                            fontSize: 18,
                        }}
                    />
                    <Text style={{color: "red", fontSize: 12}}>{errorEmail}</Text>
                </KeyboardAvoidingView>
               <View>
                   <KeyboardAvoidingView style={styles.container}>
                       <TextInput
                           secureTextEntry={!showPassword}
                           style={styles.input}
                           returnKeyType={"done"}
                           placeholder="Password"
                           value={password}
                           onChangeText={setPassword}
                           onSubmitEditing={() => Keyboard.dismiss()}
                           clearButtonMode="while-editing"
                           placeholderTextColor={colors.title}
                           cursorColor={colors.orange}
                       />
                       <MaterialCommunityIcons
                           name={showPassword ? "eye-off" : "eye"}
                           size={24}
                           color="#aaa"
                           style={styles.icon}
                           onPress={toggleShowPassword}
                       />

                   </KeyboardAvoidingView>
                   <Text style={{color: "red", fontSize: 12}}>{errorPassword}</Text>
               </View>
                <View style={{
                    width: '85%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 5
                        }}>
                            <Checkbox style={{margin: 8}} value={isCheck} onValueChange={setIsCheck}
                                      color={colors.orange}/>
                            <Text style={{
                                fontSize: 12,
                                textDecorationLine: 'underline',
                                color: colors.orange
                            }}>Remember me?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 5
                    }}>
                        <Text style={{
                            fontSize: 12,
                            textDecorationLine: 'underline',
                            color: colors.orange
                        }}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.touchable, {
                        backgroundColor: enableLogin ? colors.orange : colors.title

                    }]}
                    activeOpacity={0.6}
                    onPress={handleLogin}
                    disabled={!enableLogin}
                >
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleRegister}
                    style={[
                        styles.touchable,
                        {
                            flexDirection: "row",
                            backgroundColor: colors.text,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            {color: colors.backgroundColor, alignSelf: "center"},
                        ]}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default login;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        width: "85%",
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
        alignItems: "center",
        fontSize: 20,
        color: "green",
        marginBottom: 20,
    },
    text: {
        color: colors.text,
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 12,
    },
    touchable: {
        backgroundColor: colors.orange,
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 16,
    },
});
