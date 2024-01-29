import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "./src/screens/auth/WelcomeScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import RegisterScreen from "./src/screens/auth/RegisterScreen";
import NavigationHome from "./src/navigation/NavigationHome";
import {colors} from "./src/constants/colors";

const Stack = createStackNavigator();
export default function App() {

    return (

        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName={"Welcome"} screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
            }}>
                <Stack.Screen name={'Welcome'} component={WelcomeScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name={'Login'} component={LoginScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name={'Register'} component={RegisterScreen} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name={'HomeApp'} component={NavigationHome} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
            <StatusBar
                animated={true}
                backgroundColor={colors.backgroundColor}
                barStyle="dark-content"
                hidden={false}
            />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
