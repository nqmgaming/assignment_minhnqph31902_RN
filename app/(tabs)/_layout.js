import { Tabs } from "expo-router";
import { colors } from "../../src/constants/colors";
import { Entypo } from '@expo/vector-icons';

export default function Layout({ }) {
    return (
        <Tabs>
            <Tabs.Screen name="Home" component={'Home'} options={{
                tabBarLabel: "Home",
                tabBarLabelStyle: { color: colors.title },
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Entypo name="home" size={24} color="black" />
                    ) : (
                        <Entypo name="home" size={24} color="black" />
                    )
            }} />
            <Tabs.Screen name="" component={'Cart'} options={{
                tabBarLabel: "Cart",
                tabBarLabelStyle: { color: colors.title },
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Entypo name="cart" size={24} color="black" />
                    ) : (
                        <Entypo name="cart" size={24} color="black" />
                    )
            }} />
            <Tabs.Screen name="Favorite" component={Home} options={{
                tabBarLabel: "Favorite",
                tabBarLabelStyle: { color: colors.title },
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Entypo name="favorite" size={24} color="black" />
                    ) : (
                        <Entypo name="favorite" size={24} color="black" />
                    )
            }} />
            <Tabs.Screen name="Profile" component={Home} options={{
                tabBarLabel: "Profile",
                tabBarLabelStyle: { color: colors.title },
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Entypo name="person" size={24} color="black" />
                    ) : (
                        <Entypo name="person" size={24} color="black" />
                    )
            }} />
        </Tabs>
    )
}