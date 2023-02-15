import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'

const Profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <View style={styles.cleancon}></View>

                <View style={styles.InnerContainer}>
                    <Image style={styles.backgroundLogo} source={require('../Images/dptwo.png')} />
                    <TouchableOpacity>
                        <Image style={styles.backlogo} source={require('../Images/backArrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.editlogo} source={require('../Images/edit.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headingtop}>Jon Doe</Text>
                    <Text style={styles.para}>jondoe@gmail.com</Text>
                    <Text style={styles.para}>Personal Profie bio Section</Text>

                    <ScrollView horizontal={true}>

                        <View style={styles.boxtwo}>
                            <View style={styles.InputModal}>

                                <Image style={styles.IconModal} source={require('../Images/dpthree.png')} />
                                <TextInput style={styles.TextInputModal}
                                    placeholderTextColor='white'
                                    placeholder="Full Name"
                                />
                            </View>
                                <TouchableOpacity>
                                    <Image style={styles.logoplus} source={require('../Images/del.png')} />
                                </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </ScrollView>

    )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    cleancon: {
        height: 255,
    },
    backlogo: {
        paddingStart: 20,
        left: 20,
        bottom: 130,
    },
    editlogo: {
        left: 360,
        bottom: 150,
    },
    icon: {
        marginTop: 20,
        marginStart: 20,
    },
    icontextone: {
        color: '#FFFFFF',
        marginStart: 20,
        marginVertical: 15,
    },
    icontexttwo: {
        color: '#FFFFFF',
        fontWeight: '700',
        marginStart: 20,
    },
    logo: {
        alignSelf: 'center',
        marginLeft: 240,
        bottom: 110,
    },
    logoplus: {
        marginLeft: 10,
        top: 8,
    },
    InnerContainer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
        marginTop: -115,

    },
    headingtop: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
        marginHorizontal: 25,
        paddingStart: 20,
        left: 120,
        bottom: 130,

    },
    heading: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
    },

    boxtwo: {
        alignSelf: "center",
        width: 282,
        height: 105,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: 'skyblue',
        // shadowColor : "grey",
        // shadowColor : #rgba(44, 37, 64, 0.25),
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginTop: 30,
        marginHorizontal: 30,
    },
    heading: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 28,
        color: "#9C2B2E",
        bottom: 85,
    },
    para: {
        textAlign: "center",
        fontWeight: 'normal',
        bottom: 125,
        color: '#2C2540',
    },
    backgroundLogo: {
        alignSelf: "center",
        marginTop: -35,
        marginBottom: 90,
    },
    create: {
        flexDirection: 'row',
        width: 150,
        bottom: 45,
    },

    InputModal: {
        flexDirection: 'row',
        // marginVertical: 16,
        // marginHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
    },
    IconModal: {
        right : 50,
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInputModal: {
        color: '#FFFFFF',
        color: 'white',
        placeholder: 'white',
        fontSize: 16,
    },
})