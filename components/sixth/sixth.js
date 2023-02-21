import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'

const Gallery_view = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <Image style={styles.icon} source={require('../Images/dp.png')} />
                <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
                <Text style={styles.icontextone}>Hi Jon</Text>
                </TouchableOpacity>
                <Text style={styles.icontexttwo}>Never Miss a Memory</Text>
                <Image style={styles.logo} source={require('../Images/iconback.png')} />

                    <View style={styles.InnerContainer}>
                        <Text style={styles.headingtop}>Categories</Text>
                        <ScrollView horizontal={true}>
                            <View style={styles.boxtwo}>
                                <Image style={styles.backgroundLogo} source={require('../Images/docItem.png')} />
                                <Text style={styles.heading}>Life Story Timeline</Text>
                                <Text style={styles.para}>Create a new Timeline for a loved one, or even a trip, pet or event or any other subject you’d like a Timeline for.</Text>
                                <View style={styles.create}>
                                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600', marginTop: 4, }}> Tap to Create</Text>
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/plus.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.boxtwo}>
                                <Image style={styles.backgroundLogo} source={require('../Images/docItem.png')} />
                                <Text style={styles.heading}
                                >Life Story Timeline</Text>
                                <Text style={styles.para}>Create a new Timeline for a loved one, or even a trip, pet or event or any other subject you’d like a Timeline for.</Text>
                                <View style={styles.create}>
                                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600', marginTop: 4, }}> Tap to Create</Text>
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/plus.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>



                            <View style={styles.boxtwo}>
                                <Image style={styles.backgroundLogo} source={require('../Images/docItem.png')} />
                                <Text style={styles.heading}
                                >Life Story Timeline</Text>
                                <Text style={styles.para}>Create a new Timeline for a loved one, or even a trip, pet or event or any other subject you’d like a Timeline for.</Text>
                                <View style={styles.create}>
                                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600', marginTop: 4, }}> Tap to Create</Text>
                                    <TouchableOpacity>
                                        <Image style={styles.logoplus} source={require('../Images/plus.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            </View>
        </ScrollView>

    )
}

export default Gallery_view

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#2C2540',
    },
    icon: {
        marginTop: 20,
        marginStart: 20,
    },
    icontextone: {
        color: '#FFFFFF',
        fontSize : 20,
        marginStart: 20,
        marginVertical: 15,
    },
    icontexttwo: {
        color: '#FFFFFF',
        fontWeight: '700',
        marginStart: 20,
        fontSize : 25,
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
        marginTop : -115,

    },
    headingtop: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
        marginVertical: 35,
        marginHorizontal: 25,
    },
    heading: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
    },

    boxtwo: {
        alignSelf: "center",
        width: 228,
        height: 346,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginTop: 30,
        marginHorizontal : 30,
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
        bottom: 75,
        color: '#2C2540',
    },
    backgroundLogo: {
        alignSelf: "center",
        marginTop: -25,
        marginBottom: 90,
    },
    create: {
        flexDirection: 'row',
        width: 150,
        bottom: 45,
    },
})