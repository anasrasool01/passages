import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Card_Details = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <Image style={styles.logo} source={require('../Images/logo.png')} />
                <View style={styles.InnerContainer}>
                    <Text style={styles.heading}>Add card details</Text>
                    <View style={styles.Input}>
                        <Image style={styles.Icon} source={require("../Images/Icon.png")} />
                        <TextInput style={styles.TextInput} placeholder='Card holder name' />
                    </View>
                    <View style={styles.Input}>
                        <Image style={styles.Icon} source={require("../Images/card.png")} />
                        <TextInput style={styles.TextInput} placeholder='Card number' />
                    </View>
                    <View style={styles.RowInput}>
                        <View style={styles.InnrInput}>
                            <Image style={styles.Icon} source={require("../Images/cvv.png")} />
                            <TextInput style={styles.TextInput} placeholder='***' />
                        </View>
                        <View style={styles.InnrInput}>
                            <Image style={styles.Icon} source={require("../Images/calender.png")} />
                            <TextInput style={styles.TextInput} placeholder='00/00' />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setChecked(!checked)}
                    >
                        <View style={[styles.checkbox, checked ? styles.checked : null]} />
                    </TouchableOpacity>
                    <Text style={styles.checkboxText}>Save for Later</Text>

                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign_In')}>
                            <Image source={require('../Images/payButton.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../Images/backButton.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Card_Details

const styles = StyleSheet.create({
    Container: {
        flex: 3,
        backgroundColor: '#2C2540',
    },
    logo: {
        alignSelf: 'center',
        marginVertical: 30,
    },
    InnerContainer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
    },
    heading: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
        margin: 35,
        marginLeft: 50,
    },
    Input: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
    },
    InnrInput: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
        width: 110,
    },
    Icon: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInput: {
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '500',
    },
    RowInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 24,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    },
    checkboxContainer: {
        borderColor: "#2C2540",
    },
    checkbox: {
        width: 20,
        top: 24,
        height: 20,
        borderWidth: 2,
        borderColor: '#9C2B2E',
        width: 20,
        left: 330,

    },
    checked: {
        backgroundColor: '#9C2B2E',
    },
    checkboxText: {
        marginLeft: 72,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: "600",
        color: "#2C2540",
    },
})