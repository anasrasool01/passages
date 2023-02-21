import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';

const Details = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.first}>
            <Image style={styles.img} source={require('../Images/logo.png')} />
            <Image style={styles.background} source={require('../Images/BackGround.png')} />
            <View style={styles.boxtwo}>
                <Text style={styles.heading}>FREE</Text>
                <Text style={styles.para}>PASSAGES is FREE to join so everyone can capture their story.</Text>
                <View style={styles.mpoint}>
                    <Image style={styles.pos} source={require('../Images/point.png')} />
                    <Text style={styles.point}>1 GB of Storage </Text>
                </View>
                <View style={styles.mpoint}>
                    <Image style={styles.pos} source={require('../Images/point.png')} />
                    <Text style={styles.point}>Personal Vault</Text>
                </View>
                <View style={styles.mpoint}>
                    <Image style={styles.pos} source={require('../Images/point.png')} />
                    <Text style={styles.point}>3 Digital safes with Life Story </Text>
                </View>
                <View style={styles.mpoint}>
                    <Image style={styles.pos} source={require('../Images/point.png')} />
                    <Text style={styles.point}>Virtual Times Capsule for Future Messages</Text>
                </View>
                <View style={styles.mpoint}>
                    <Image style={styles.pos} source={require('../Images/point.png')} />
                    <Text style={styles.point}>No Advertising</Text>
                </View>
                <TouchableOpacity onPress={() =>navigation.navigate('Card_Details')}>
                    <Image style={styles.select} source={require('../Images/selectButton.png')} />
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>

    )
}
export default Details
const styles = StyleSheet.create({
    first: {
        flex: 1,
        height : 1000,
        backgroundColor: '#2C2540',
    },
    img: {
        alignSelf: "center",
        top: 58,
    },
    background: {
        height: 220,
        width: 420,
        top: 280,
        borderRadius: 0,
    },
    boxtwo: {
        alignSelf: "center",
        width: 319,
        height: 409,
        alignItems: "center",
        borderRadius: 38,
        backgroundColor: "#FBFCFE",
        bottom: 115,
    },
    heading: {
        textAlign: "center",
        fontWeight: 'bold',
        fontStyle: "normal",
        fontSize: 28,
        color: "#9C2B2E",
        width: 91,
        top: 35,
    },
    para: {
        color: "#2C2540",
        textAlign: "center",
        fontWeight: '500',
        fontSize: 16,
        marginHorizontal : 30,
        top: 53,
    },
    point: {
        color: "#2C2540",
        fontSize: 16,
        top: 83,
        flexDirection: "row",
        width: 247,
        marginLeft : 10,
    },
    mpoint: {
        color: "#2C2540",
        marginLeft : 20,
        fontSize: 20,
        flexDirection: "row",
    },
    pos: {
        top: 91,
    },
    select: {
        alignSelf: "center",
        top: 169,
    },



})