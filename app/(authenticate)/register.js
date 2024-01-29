import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors} from "../../src/constants/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import isEmail from "validator/es/lib/isEmail";

const register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [enableLogin, setEnableLogin] = useState(false);

    // validate name
    const validateName = () => {
        if (name === '') {
            setErrorName('*Name is required');
            return false;
        }
        setErrorName('');
        return true;
    };

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
        } else if (password.length < 6) {
            setErrorPassword('*Password must be at least 6 characters');
            return false;
        }
        setErrorPassword('');
        return true;
    };

    // validate confirm password
    const validateConfirmPassword = () => {
        if (confirmPassword === '') {
            setConfirmPassword('*Confirm password is required');
            return false;
        } else if (confirmPassword !== password) {
            setConfirmPassword('*Confirm password does not match');
            return false;
        }
        setConfirmPassword('');
        return true;
    }

    // validate form
    const validateForm = () => {
        if (!validateName() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            setEnableLogin(true);
        } else {
            setEnableLogin(false);
        }
    }, [name, email, password, confirmPassword]);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const router = useRouter();

    const handleRegister = () => {
        if (!validateForm()) {
            return;
        }
        router.replace("/(tabs)/home");
    }

    const handleLogin = () => {
        router.replace("/(authenticate)/login");
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
            }}>
                <StatusBar
                    animated={true}
                    barStyle="dark-content"
                />

                <Image source={require('../assets/images/logo.png')} style={{width: 80, height: 80, marginTop: 50}}/>
                <Text style={{
                    fontSize: 22,
                    color: colors.backgroundColor,
                    fontWeight: 'bold',
                    flex: 0
                }}>
                    Welcome to Shop app!
                </Text>
                <Text style={{
                    fontSize: 18,
                    color: colors.title,
                    fontWeight: 'bold',
                    flex: 0,
                    marginVertical: 10
                }}>
                    Register to Continue
                </Text>

                <View style={{
                    width: '85%',
                    flexDirection: 'column',
                }}>
                    <TextInput placeholderTextColor={colors.title}
                               placeholder={'Name'}
                               value={name}
                               onChangeText={text => setName(text)}
                               keyboardType={"default"}
                               cursorColor={colors.orange}
                               focusable={
                                   errorName ? false : true
                               }
                               autoFocus={
                                      errorName ? false : true
                               }
                               style={{
                                   width: '100%',
                                   borderWidth: 2,
                                   borderColor: errorName ? 'red' : colors.title,
                                   padding: 12,
                                   borderRadius: 10,
                                   color: colors.title,
                                   fontSize: 18
                               }}/>
                    {errorName ? (
                        <Text style={{
                            color: 'red',
                            fontSize: 12,
                        }}>
                            {errorName}
                        </Text>
                    ) : null}
                </View>
                <View style={{
                    width: '85%',
                    marginVertical: 10
                }}>
                    <TextInput placeholderTextColor={colors.title}
                               placeholder={'Email Address'}
                               keyboardType={"email-address"}
                               textContentType={"emailAddress"}
                               value={email}
                               onChangeText={text => setEmail(text)}
                               onSubmitEditing={() => Keyboard.dismiss()}
                               cursorColor={colors.orange}
                               style={{
                                   width: '100%',
                                   borderWidth: 2,
                                   borderColor: errorEmail ? 'red' : colors.title,
                                   padding: 12,
                                   borderRadius: 10,
                                   color: colors.title,
                                   fontSize: 18
                               }}/>
                    {errorEmail ? (
                        <Text style={{
                            color: 'red',
                            fontSize: 12,
                        }}>
                            {errorEmail}
                        </Text>
                    ) : null}
                </View>
                <View>
                <View style={styles.container}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        style={[styles.input, {
                            borderColor: errorPassword ? 'red' : colors.title,
                        }]}
                        placeholder="Password"
                        placeholderTextColor={colors.title}
                        cursorColor={colors.orange}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />

                </View>
                {
                    errorPassword ? (
                        <Text style={{
                            color: 'red',
                            fontSize: 12,
                            marginBottom: 10,
                        }}>
                            {errorPassword}
                        </Text>
                    ) : null
                }
                </View>
                <View>
                <View style={styles.container}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        style={[styles.input, {
                            borderColor: errorPassword ? 'red' : colors.title,
                        }]}
                        placeholder="Re-type password"
                        placeholderTextColor={colors.title}
                        cursorColor={colors.orange}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>
                {
                    errorConfirmPassword ? (
                        <Text style={{
                            color: 'red',
                            fontSize: 12,
                        }}>
                            {errorConfirmPassword}
                        </Text>
                    ) : null
                }
            </View>
                <TouchableOpacity style={styles.touchable} activeOpacity={0.6} onPress={handleRegister}>
                    <Text style={styles.text}>
                        Register
                    </Text>
                </TouchableOpacity>
                <Text onPress={() => handleLogin} style={[styles.text, {fontSize: 16, color: colors.title}]}>
                    You have an account? Click<TouchableOpacity onPress={() => {
                    router.push('/(authenticate)/login');
                }}><Text style={{color: colors.orange}}
                >Login</Text></TouchableOpacity>
                </Text>

            </View>
        </TouchableWithoutFeedback>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        width: '85%',
        borderColor: colors.title,
        paddingHorizontal: 14,
        marginBottom: 10
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
export default register
