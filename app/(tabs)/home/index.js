import { ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react'
import { colors } from '../../../src/constants/colors';
import { products } from '../../assets/datatemp/product';
import { AirbnbRating, Rating } from 'react-native-ratings';

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
                    borderColor: colors.title,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    backgroundColor: colors.lightgray
                }}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput
                        editable={false}
                        placeholderTextColor={colors.title}
                        cursorColor={colors.orange}
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
                    backgroundColor: colors.lightgray,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10

                }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderWidth: 2,
                    borderColor: colors.lightgray,
                    gap: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10
                }}>
                    <AntDesign name="heart" size={18} color="black" />
                    <Text style={{
                        fontSize: 14,
                        color: colors.black,
                    }}>Favorite</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderWidth: 2,
                    borderColor: colors.lightgray,
                    gap: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10
                }}>
                    <AntDesign name="checkcircle" size={18} color="black" />
                    <Text>Following</Text>
                </View><View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderWidth: 2,
                    borderColor: colors.lightgray,
                    gap: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10
                }}>
                    <Entypo name="price-tag" size={18} color="black" />
                    <Text>On sale</Text>
                </View>
            </View>
            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                paddingVertical: 10,
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colors.black,
                    paddingLeft: 20,
                    paddingRight: 10,
                }}>
                    Some product
                </Text>
                <AntDesign name="downcircleo" size={15} color="black" />
            </View>
            <View style={{
                width: '100%',
                flex: 1,
                backgroundColor: colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingVertical: 10,

            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        {products.map((item, index) => {
                            return (
                                <View key={index} style={{
                                    width: '50%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    marginBottom: 20,
                                    paddingHorizontal: 10,

                                }}>
                                    <View style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 10,
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Image source={require('../../assets/images/p1.png')} style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: 'contain',
                                            borderRadius: 10,
                                        }} />
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingVertical: 10,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: colors.black,
                                            textAlign: 'left',
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            color: colors.title,
                                        }}>{item.description}</Text>
                                        <AirbnbRating
                                            count={5}
                                            showRating={false}
                                            size={15}
                                            isDisabled={true}
                                            defaultRating={item.rating}

                                        />
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            paddingVertical: 10,

                                        }}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                                color: colors.black,
                                            }}>{item.price}$</Text>
                                            <TouchableOpacity>
                                                <View style={{
                                                    width: 25,
                                                    height: 25,
                                                    borderRadius: 10,
                                                    backgroundColor: colors.lightgray,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginLeft: 15
                                                }}>
                                                    <Feather name="plus" size={15} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>

                    <TouchableOpacity style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        marginBottom: 100,

                    }}>
                        <Text>
                            Hi! :))
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: colors.black,

                        }}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>

        </View>
    )
}

export default index

const styles = StyleSheet.create({})