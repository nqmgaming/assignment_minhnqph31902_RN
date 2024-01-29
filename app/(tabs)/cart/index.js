import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';

import React from 'react'
import { cartItems } from '../../assets/datatemp/product'

const index = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 20,
                marginTop: 20,
                marginBottom: 20,
            }}>
                <View style={{
                    width: '85%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingHorizontal: 10,

                }}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput
                        editable={false}


                        placeholder='Search' style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 10,
                            height: 50,
                            fontSize: 16,
                            fontWeight: 'normal',
                            marginLeft: 10
                        }} />

                </View>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10

                }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
            </View>
            <View style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#fff',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 20
            }}>
                <ScrollView>
                    {
                        cartItems.map((item, index) => (
                            <View key={index} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                padding: 10,
                                marginBottom: 10,
                                width: '95%',
                                alignSelf: 'center',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                                <View style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 10

                                }}>
                                    <Image source={require('../../assets/images/p1.png')} style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: 'contain'
                                    }} />
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 'normal',
                                        color: '#333'
                                    }}>{item.price}</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <TouchableOpacity>
                                                <AntDesign name="minuscircle" size={24} color="black" />
                                            </TouchableOpacity>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: 'normal',
                                                color: '#333',
                                                marginHorizontal: 10
                                            }}>{item.qty}</Text>
                                            <TouchableOpacity>
                                                <AntDesign name="pluscircle" size={24} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <Entypo name="cross" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 55,
                    width: '95%',
                    alignSelf: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>Subtotal</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>$ 100</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>Tax</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>$ 100</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>Total</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>$ 100</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '#333',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{

            }}>
                <Text style={{


                }}>
                    Thank you for shopping with us
                </Text>
            </View>

        </View>
    )
}

export default index

const styles = StyleSheet.create({})