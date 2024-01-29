import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    elevation: 0,
                    height: 60,
                    paddingBottom: 5,
                    marginHorizontal: 10,
                    borderRadius: 25,
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    right: 10,
                },
                tabBarActiveTintColor: "purple",
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Feather name="home" size={24} color="purple" />
                        ) : (
                            <Feather name="home" size={24} color="black" />
                        ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    tabBarLabel: "Cart",
                    tabBarBadge: 3,
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Feather name="shopping-cart" size={24} color="purple" />
                        ) : (
                            <Feather name="shopping-cart" size={24} color="black" />
                        ),
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    tabBarLabel: "Favorite",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialIcons name="favorite-border" size={24} color="purple" />
                        ) : (
                            <MaterialIcons name="favorite-border" size={24} color="black" />
                        ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person-outline" size={24} color="purple" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        ),
                }}
            />
        </Tabs>
    );
}
