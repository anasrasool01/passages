import { StyleSheet, Text, View, TextInput, Linking, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import EIcon from 'react-native-vector-icons/dist/Fontisto';
import SIcon from 'react-native-vector-icons/dist/Feather'
import CIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import PIcon from 'react-native-vector-icons/dist/Feather'



const Create_Your_Account = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const openURL = () => {
        Linking.openURL(
            'https://www.termsandconditions.com'
            ).catch((err) => console.error('An error occurred', err));
    };
    return (
        <View style={styles.background}>
            <ScrollView>
                <Text style={styles.heading}>Create your account</Text>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="user" size={25} color="#900" />
                    <TextInput
                        style={styles.input}
                        placeholder="Joe Doe"
                    />
                </View>

                <View style={styles.searchSection}>
                    <EIcon style={styles.searchIcon} name="email" size={25} color="#900" />
                    <TextInput
                        style={styles.input}
                        placeholder="jondoe@gmail.com"
                    />
                </View>

                <View style={styles.searchSection}>
                    <SIcon style={styles.searchIcon} name="lock" size={25} color="#900" />
                    <TextInput
                        style={styles.input}
                        placeholder="************"
                        secureTextEntry={true}
                        maxLength={20}
                    />
                    <PIcon style={styles.viewIcon} name="eye" size={25} color="#900" />
                </View>
                <View style={styles.searchSection}>
                    <CIcon style={styles.searchIcon} name="lock-check-outline" size={25} color="#900" />
                    <TextInput
                        style={styles.input}
                        placeholder="************"
                        secureTextEntry={true}
                        maxLength={20}
                    />
                    <PIcon style={styles.viewIcon} name="eye" size={25} color="#900" />
                </View>
                <View style={styles.code}>
                <Image style={styles.signup} source={require('../Images/cal.png')} />
                    <TextInput
                        style={styles.numb}
                        placeholder="0"
                    />
                    <TextInput
                        style={styles.numb}
                        placeholder="1"
                    />
                    <TextInput
                        style={styles.numb}
                        placeholder=""
                    />
                    <TextInput
                        style={styles.numb}
                        placeholder=""
                    />
                </View>
                <View style={styles.endline}>

                </View>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setChecked(!checked)}
                >
                    <View style={[styles.checkbox, checked ? styles.checked : null]} />
                    <Text style={styles.checkboxText}>Agree to</Text>
                    <TouchableOpacity onPress={openURL}>
                        <Text style={styles.checkboxTextbold}>Terms And Conditions</Text>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity onPress={() =>navigation.navigate('Details')}>
                    <Image style={styles.signup} source={require('../Images/SignupButton.png')} />
                </TouchableOpacity>

                <View style={styles.signupwith}>
                    <Text style={styles.textsignup}>Sign Up With</Text>
                </View>

                <View style={styles.logo}>
                    <Image style={styles.logogoogle} source={require('../Images/Google.png')} />
                    <Image style={styles.logoapple} source={require('../Images/Apple.png')} />
                    <Image style={styles.logofacebook} source={require('../Images/Facebook.png')} />
                </View>

                <View style={styles.lastText}>
                    <Text style={styles.checkboxText}>Already have an account</Text>
                    <TouchableOpacity onPress={openURL}>
                        <Text style={styles.checkboxTextbold}>Sign in here!</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
export default Create_Your_Account
const styles = StyleSheet.create({
    heading: {
        marginTop: 33,
        marginLeft: 30,
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 30,
        color: '#9C2B2E',
    },
    input: {
        marginHorizontal: 15,
        color: "#2C2540",
        fontStyle: "normal",
        fontSize: 16,
        flex: 3,
    },
    searchSection: {
        marginHorizontal: 40,
        marginVertical: 5,
        borderBottomWidth: 1,
        color: "#2C2540",
        fontStyle: "normal",
        fontSize: 16,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    searchIcon: {
        marginTop: 10,
    },
    viewIcon: {
        marginTop: 15,
    },
    code: {
        marginHorizontal: 40,
        marginVertical: 20,
        flexDirection: "row",
    },
    numb: {
        marginLeft: 20,
        color: "#2C2540",
        height: 35,
        width: 35,
        borderWidth: 2,
        borderColor: "#2C2540",
        textAlign: "center",
        borderRadius: 5,
    },
    endline: {
        marginHorizontal: 40,
        borderWidth: 1.5,
        borderBottomColor: "#9C2B2E",
        // borderColor: "#9C2B2E",
        textAlign: "center",
        borderRadius: 5,
        marginLeft: 40,
    },
    checkboxContainer: {
        marginVertical: 18,
        flexDirection: 'row',
        marginLeft: 40,
        margin: 10,
        borderColor: "#2C2540",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
    },
    checked: {
        backgroundColor: '#9C2B2E',
    },
    checkboxText: {
        marginLeft: 22,
    },
    checkboxTextbold: {
        fontWeight: "400",
        color: "#9C2B2E",
        textDecorationLine: "underline",
    },
    signup: {
        alignSelf: "center",
    },
    signupwith: {
        alignItems: "center",

    },
    textsignup: {
        color: "#2C2540",
        fontSize: 14,
        fontWeight: "600",
    },
    logo: {
        alignItems: "center",
        marginTop: 18,
        justifyContent: "center",
        flexDirection: "row",
        height: 50,
    },
    logogoogle: {
        marginBottom: 17,
        marginRight: 19,
        width: 35,
        height: 35,
    },
    lastText: {
        justifyContent: "center",
        flexDirection: "row",

    },

})