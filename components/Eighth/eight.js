import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'

const Gallery = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <View style={styles.cleancon}>
                <Image style={styles.backgroundLogo} source={require('../Images/backEight.png')} />
                </View>

                <View style={styles.InnerContainer}>
                    <Image style={styles.backgroundLogo} source={require('../Images/dpEight.png')} />
                    <TouchableOpacity>
                        <Image style={styles.backlogo} source={require('../Images/backArrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.editlogo} source={require('../Images/edit.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headingtop}>Jon Doe</Text>
                    <Text style={styles.para}>jondoe@gmail.com</Text>
                    <Text style={styles.parao}>Personal Profie bio Section</Text>


                    <Text style={styles.Invited}>Invited Collaborators</Text>

                    <ScrollView horizontal={true}>

                        <View style={styles.boxtwo}>
                            <View style={styles.InputModal}>
                                <View style={styles.ico}>
                                    <Image style={styles.IconModal} source={require('../Images/profileoneeight.png')} />
                                </View>
                                <View style={styles.placeicon}>
                                    <TextInput style={styles.TextInputModal}
                                        placeholder="Jane Doe" />
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/del.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.boxtwo}>
                            <View style={styles.InputModal}>
                                <View style={styles.ico}>
                                    <Image style={styles.IconModal} source={require('../Images/profileoneeight.png')} />
                                </View>
                                <View style={styles.placeicon}>
                                    <TextInput style={styles.TextInputModal}
                                        placeholder="Full Name" />
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/del.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.boxtwo}>
                            <View style={styles.InputModal}>
                                <View style={styles.ico}>
                                    <Image style={styles.IconModal} source={require('../Images/profileoneeight.png')} />
                                </View>
                                <View style={styles.placeicon}>
                                    <TextInput style={styles.TextInputModal}
                                        placeholder="Full Name" />
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/del.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <Text style={styles.collab}>My Collaborations</Text>

                    <ScrollView horizontal={true}>

                        <View style={styles.two}>
                            <View style={styles.contentall}>
                                <Image style={styles.IconModaltwo} source={require('../Images/profiletwoeight.png')} />
                                <View style={styles.content}>
                                    <Text style={styles.title} >Summer Vacation</Text>
                                    <Text style={styles.titlepara} >Go to Project</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image style={styles.logonext} source={require('../Images/frontArrow.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.two}>
                            <View style={styles.contentall}>
                                <Image style={styles.IconModaltwo} source={require('../Images/profiletwoeight.png')} />
                                <View style={styles.content}>
                                    <Text style={styles.title} >Title</Text>
                                    <Text style={styles.titlepara} >Go to Project</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image style={styles.logonext} source={require('../Images/frontArrow.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.two}>
                            <View style={styles.contentall}>
                                <Image style={styles.IconModaltwo} source={require('../Images/profiletwoeight.png')} />
                                <View style={styles.content}>
                                    <Text style={styles.title} >Title</Text>
                                    <Text style={styles.titlepara} >Go to Project</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image style={styles.logonext} source={require('../Images/frontArrow.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>



                    </ScrollView>

                    <View style={styles.loglast} >
                        <TouchableOpacity>
                            <Image style={styles.log} source={require('../Images/mycontent.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.log} source={require('../Images/myvault.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.log} source={require('../Images/changepass.png')} />
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
        </ScrollView>

    )
}

export default Gallery

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    cleancon: {
        height: 150,
    },
    backlogo: {
        marginStart: 20,
        bottom: 30,
    },
    editlogo: {
        left: 360,
        bottom: 50,
    },
    logoplus: {
        marginLeft: 95,
        top: 5,
    },
    InnerContainer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
    },
    headingtop: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
        // marginHorizontal: 25,
        textAlign: "center",
        bottom: 30,
    },
    boxtwo: {
        alignItems: "center",
        borderRadius: 15,
        // backgroundColor: 'skyblue',
        // elevation: 1,
        // width : 300,
        // height : 120,
        // shadowColor : "grey",
        // shadowColor : #rgba(44, 37, 64, 0.25),
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginHorizontal: 30,



        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 8,
        // },
        // shadowOpacity: 0.46,
        // shadowRadius: 11.14,

        // elevation: 110,
    },
    ico: {

    },
    two: {
        alignItems: "center",
        borderRadius: 15,
        // backgroundColor: 'skyblue',
        // elevation: 110,
        // shadowColor : "grey",
        // shadowColor : #rgba(44, 37, 64, 0.25),
        borderWidth: 1,
        width: 310,
        borderColor: '#FFFFFF',
        marginHorizontal: 30,
    },
    para: {
        textAlign: "center",
        fontWeight: 'normal',
        bottom: 25,
        fontSize: 16,
        color: '#2C2540',
    },
    parao: {
        textAlign: "center",
        fontWeight: 'bold',
        bottom: 15,
        fontSize: 16,
        color: '#2C2540',
    },
    backgroundLogo: {
        alignSelf: "center",
        marginTop: -40,
    },
    InputModal: {
        // flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderColor: '#FFFFFF',
        flexDirection: 'row',
        margin: 10,
        // elevation: 110,
    },
    // placeicon: {

    // },
    IconModal: {
        // right: 50,
        marginHorizontal: 10,
        // marginTop: 10,
        // fontSize: 30,
        // fontWeight: '500',
    },
    TextInputModal: {
        // color: '#FFFFFF',
        // color: 'white',
        // placeholder: 'white',
        fontSize: 16,
        borderBottomWidth: 1,
        // borderColor: '#FFFFFF',
        width: 120,

    },
    Invited: {
        marginStart: 30,
        fontWeight: 'bold',
        fontSize: 28,
        color: "#9C2B2E",
        // marginHorizontal : 100,
        marginVertical: 20,
    },
    collab: {
        marginVertical: 20,
        marginStart: 30,
        fontWeight: 'bold',
        fontSize: 28,
        color: "#9C2B2E",
    },
    log: {
        alignSelf: "center",
    },
    loglast: {
        marginTop: 40,
    },
    IconModaltwo: {
        right: 30,
        marginHorizontal: -15,
        marginTop: 10,
    },
    contentall: {
        flexDirection: 'row',
        margin: 10,
    },
    content: {
        marginVertical: 30,
    },
    title: {
        fontWeight: 'normal',
        fontSize: 17,
        color: '#2C2540',
    },
    titlepara: {
        fontWeight: '700',
        fontSize: 18,
        color: '#9C2B2E',
        textDecorationLine: "underline",
        lineHeight: 20,
    },
    logonext: {
        marginLeft: -20,
        top: 60,
    },

})