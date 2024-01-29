import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from "../../constants/colors";

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0C0F14',
        }}>

            {/*    Search bar*/}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: 20,
                borderRadius: 12,
                marginEnd: 20
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        padding: 12,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderRadius: 12,
                        backgroundColor: colors.text,
                        marginEnd: 10
                    }}
                    activeOpacity={0.5}>
                    <Ionicons name="search" size={24} color={colors.title}/>
                    <Text style={{
                        color: colors.title,
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingLeft: 10
                    }}>
                        Search
                    </Text>

                </TouchableOpacity>

                {/*    Notifications*/}
                <TouchableOpacity
                    style={{
                        padding: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        backgroundColor: colors.text,
                    }}
                    activeOpacity={0.5}>
                    <Ionicons name="notifications" size={24} color={colors.title}/>
                </TouchableOpacity>

            </View>
            {/*    List Product*/}
        </View>
    );
};

export default HomeScreen;

