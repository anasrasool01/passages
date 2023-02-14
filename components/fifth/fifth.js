import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { Alert, Modal } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'slide1',
        image: require("../Images/modalLock.png"),
        title: 'Forget Password',
        text: 'Enter Your email Address below to reset password.',
        imageplace1: require("../Images/message.png"),
        input1: "jondoe@gmail.com",
        // imageplace2:require("../Images/message.png"),
        // input2 : '',
        // lastText : "Already have an account",
        // lastlink :"Sign in here!",
        submit: require('../Images/submit.png'),
        cancel: require('../Images/cancel.png'),
    },
    {
        key: 'slide2',
        image: require('../Images/ModalSec.png'),
        title: 'Token Code',
        text: 'Enter token sent via email',
        imageplace1: require("../Images/Iconcal.png"),
        input1: "jondoe@gmail.com",
        // imageplace2:require("../Images/message.png"),
        // input2 : '',
        lastText: "Haven't recieved it?",
        lastlink: "Resend Token!",
        submit: require('../Images/submit.png'),
        cancel: require('../Images/cancel.png'),
    },
    {
        key: 'slide3',
        image: require('../Images/modalLock.png'),
        title: 'Reset Password',
        text: 'Set the new password for your Passages account',
        imageplace1: require("../Images/lockplace.png"),
        input1: "New Password",
        imageplace2: require("../Images/lockconf.png"),
        input2: 'Confirm New Password',
        // lastText : "Already have an account",
        // lastlink: "Sign in here!",
        submit: require('../Images/submit.png'),
        cancel: require('../Images/cancel.png'),
        unhide: require("../Images/unhide.png"),
    },
];


const Sign_In = ({ navigation }) => {

    const [HideShow, setHideShow] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>

                <View style={styles.modalView}>

                    <Image style={styles.modalText} source={item.image} />
                    <Text style={styles.modalheadingText}>{item.title}</Text>
                    <Text style={styles.modalsmallText}>{item.text}</Text>


                    <View style={styles.InputModal}>
                        <Image style={styles.IconModal} source={item.imageplace1} />
                        <TextInput style={styles.TextInputModal}
                            placeholderTextColor='white'
                            placeholder={item.input1}
                        />
                        <TouchableOpacity >
                            <Image style={[styles.Icon, styles.PasswordIcon]} source={item.unhide} />
                        </TouchableOpacity>
                    </View>
                    {item.input2 ==="Confirm New Password" && 
                    
                    <View style={styles.InputModaltwo}>
                    <Image style={styles.IconModaltwo} source={item.imageplace2} />

                    <TextInput style={styles.TextInputModaltwo}
                        placeholderTextColor='white'
                        placeholder={item.input2}
                    />
                    <TouchableOpacity >
                        <Image style={[styles.Icon, styles.PasswordIcon]} source={item.unhide} />
                    </TouchableOpacity>

                </View>
                    }
                 

                    <View style={styles.btn}>
                        <TouchableOpacity>
                            <Image source={item.submit} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={item.cancel} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lastText}>
                        <Text style={styles.checkboxText}>
                            {item.lastText}</Text>
                        <TouchableOpacity >
                            <Text style={styles.checkboxTextbold}>{item.lastlink}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    };

    const handleDone = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            {/* Modal */}
            <View style={styles.centeredView}>
                <Modal visible={modalVisible} animationType="slide" 
                transparent={true}>
                    <AppIntroSlider
                        renderItem={renderItem}
                        data={slides}
                        onDone={handleDone}
                    />
                </Modal>
                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={[styles.centeredView,{backgroundColor:'rgba(0, 0, 0, 0.5)'}]}>

                        <View style={styles.modalView}>

                            <Image style={styles.modalText} source={require("../Images/modalLock.png")} />
                            <Text style={styles.modalheadingText}>Forget Password?</Text>

                            <Text style={styles.modalsmallText}>Enter Your email Address below to reset password</Text>


                            <View style={styles.InputModal}>
                                <Image style={styles.IconModal} source={require("../Images/message.png")} />
                                <TextInput style={styles.TextInputModal} 
                                placeholderTextColor='white'
                                placeholder='jondoe@gmail.com' />
                            </View>

                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <Image source={require('../Images/submit.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Image source={require('../Images/cancel.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> */}
            </View>

            {/* Modal */}

            <View style={styles.Container}>
                <Image style={styles.logo} source={require('../Images/logo.png')} />
                <View style={styles.InnerContainer}>
                    <Text style={styles.heading}>Welcome back</Text>
                    <View style={styles.Input}>
                        <Image style={styles.Icon} source={require("../Images/Icon.png")} />
                        <TextInput style={styles.TextInput} placeholder='Jon Doe' />
                    </View>
                    <View style={[styles.Input, styles.InputArea]}>
                        <Image style={styles.Icon} source={require("../Images/lock.png")} />
                        <TextInput secureTextEntry={HideShow} style={styles.TextInput} value='Anas Rasool' />
                        <TouchableOpacity onPress={() => setHideShow(!HideShow)}>
                            <Image style={[styles.Icon, styles.PasswordIcon]} source={require("../Images/eye.png")} />
                            {/* <Image style={[styles.Icon, styles.PasswordIcon]} source={HideShow ? require("eye.png") : require("./eye.png")} /> */}
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('Gallery_view')}>
                        <Image style={styles.SignIn} source={require('../Images/signinButton.png')} />
                    </TouchableOpacity>

                    <Pressable
                        style={styles.ForgotPassword}
                        onPress={() => setModalVisible(true)}>
                        <Text >Forgot Password?</Text>
                    </Pressable>

                    <Text style={styles.SignUpwith}>Sign Up With</Text>
                    <View style={styles.systemlogo}>
                        <Image style={styles.Icon} source={require("../Images/Google.png")} />
                        <Image style={styles.Icon} source={require("../Images/Apple.png")} />
                        <Image style={styles.Icon} source={require("../Images/Facebook.png")} />
                    </View>
                    <View style={styles.Alreadyaccount}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.txtclr}>Sign In here!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Sign_In

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
    },
    Input: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
    },
    InputArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    PasswordIcon: {
        width: 22,
        height: 16,
    },
    Icon: {
        marginHorizontal: 14,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInput: {
        flex: 3,
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
    SignIn: {
        marginTop: 30,
        alignSelf: 'center',
    },
    ForgotPassword: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    SignUpwith: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 14,
        marginTop: 20,
    },
    systemlogo: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    Icon: {
        marginHorizontal: 14,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    Alreadyaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    txtclr: {
        color: '#9C2B2E',
    },



    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        height: 500,
        width: 341,
        backgroundColor: '#9C2B2E',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalheadingText: {
        marginTop: 25,
        marginBottom: 35,
        color: 'white',
        textAlign: 'center',
        width: 247,
        fontStyle: "normal",
        fontWeight: '700',
        fontSize: 28,

    },
    modalsmallText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
        width: 180,
        height: 42,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
    },
    InputModal: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
    },
    IconModal: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInputModal: {
        color: '#FFFFFF',
        width: 240,
        marginLeft: 10,
        color: 'white',
        placeholder: 'white',
        fontSize: 16,
        fontWeight: '500',
    },






    lastText: {
        bottom: 105,
        flexDirection: "row",
    },
    checkboxText: {
        marginLeft: 22,
        color: "#FFFFFF",
    },
    checkboxTextbold: {
        fontWeight: "400",
        color: "#FFFFFF",
        textDecorationLine: "underline",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: 530,
        width: 341,
        backgroundColor: '#9C2B2E',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalheadingText: {
        marginTop: 25,
        marginBottom: 35,
        color: 'white',
        textAlign: 'center',
        width: 247,
        fontStyle: "normal",
        fontWeight: '700',
        fontSize: 28,
        fontWeight: 'bold',
    },
    modalsmallText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
        width: 180,
        height: 42,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
    },
    InputModal: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
    },
    IconModal: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    InputModaltwo: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
    },
    IconModaltwo: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInputModal: {
        color: '#FFFFFF',
        width: 240,
        marginLeft: 10,
        color: 'white',
        placeholder: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    TextInputModaltwo : {
        color: '#FFFFFF',
        width: 240,
        marginLeft: 10,
        color: 'white',
        placeholder: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    },
    Input: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
    },
    InputArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Icon: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
})