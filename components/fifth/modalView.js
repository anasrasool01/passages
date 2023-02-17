// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, TextInput } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const slides = [
//     {
//         key: 'slide1',
//         image: require("../Images/modalLock.png"),
//         title: 'Forget Password',
//         text: 'Enter Your email Address below to reset password.',
//         imageplace1: require("../Images/message.png"),
//         input1: "jondoe@gmail.com",
//         // imageplace2:require("../Images/message.png"),
//         // input2 : '',
//         // lastText : "Already have an account",
//         // lastlink :"Sign in here!",
//         submit: require('../Images/submit.png'),
//         cancel: require('../Images/cancel.png'),
//     },
//     {
//         key: 'slide2',
//         image: require('../Images/ModalSec.png'),
//         title: 'Token Code',
//         text: 'Enter token sent via email',
//         imageplace1: require("../Images/Iconcal.png"),
//         input1: "jondoe@gmail.com",
//         // imageplace2:require("../Images/message.png"),
//         // input2 : '',
//         lastText: "Haven't recieved it?",
//         lastlink: "Resend Token!",
//         submit: require('../Images/submit.png'),
//         cancel: require('../Images/cancel.png'),
//     },
//     {
//         key: 'slide3',
//         image: require('../Images/modalLock.png'),
//         title: 'Reset Password',
//         text: 'Set the new password for your Passages account',
//         imageplace1: require("../Images/lockplace.png"),
//         input1: "New Password",
//         imageplace2: require("../Images/lockconf.png"),
//         input2: 'Confirm New Password',
//         // lastText : "Already have an account",
//         // lastlink: "Sign in here!",
//         submit: require('../Images/submit.png'),
//         cancel: require('../Images/cancel.png'),
//         unhide : require("../Images/unhide.png"),
//     },
// ];

// const AppIntro = ({ navigation }) => {

//     const [modalVisible, setModalVisible] = useState(true);

//     const renderItem = ({ item }) => {
//         return (
//             <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>

//                 <View style={styles.modalView}>

//                     <Image style={styles.modalText} source={item.image} />
//                     <Text style={styles.modalheadingText}>{item.title}</Text>
//                     <Text style={styles.modalsmallText}>{item.text}</Text>


//                     <View style={styles.InputModal}>
//                         <Image style={styles.IconModal} source={item.imageplace1} />
//                         <TextInput style={styles.TextInputModal}
//                             placeholderTextColor='white'
//                             placeholder={item.input1}
//                         />
//                         <TouchableOpacity >
//                             <Image style={[styles.Icon, styles.PasswordIcon]} source={item.unhide} />
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.InputModaltwo}>
//                         <Image style={styles.IconModaltwo} source={item.imageplace2} />

//                         <TextInput style={styles.TextInputModaltwo}
//                             placeholderTextColor='white'
//                             placeholder={item.input2}
//                         />
//                         <TouchableOpacity >
//                             <Image style={[styles.Icon, styles.PasswordIcon]} source={item.unhide} />
//                         </TouchableOpacity>

//                     </View>

//                     <View style={styles.btn}>
//                         <TouchableOpacity>
//                             <Image source={item.submit} />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
//                             <Image source={item.cancel} />
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.lastText}>
//                         <Text style={styles.checkboxText}>
//                             {item.lastText}</Text>
//                         <TouchableOpacity >
//                             <Text style={styles.checkboxTextbold}>{item.lastlink}</Text>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </View>
//         );
//     };

//     const handleDone = () => {
//         setModalVisible(false);
//     };

//     return (
//         <Modal visible={modalVisible} animationType="slide" transparent={false}>
//             <AppIntroSlider
//                 renderItem={renderItem}
//                 data={slides}
//                 onDone={handleDone}
//             />
//         </Modal>
//     );
// };



// const styles = StyleSheet.create({

//     lastText: {
//         bottom: 105,
//         flexDirection: "row",
//     },
//     checkboxText: {
//         marginLeft: 22,
//         color: "#FFFFFF",
//     },
//     checkboxTextbold: {
//         fontWeight: "400",
//         color: "#FFFFFF",
//         textDecorationLine: "underline",
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//     },
//     modalView: {
//         height: 530,
//         width: 341,
//         backgroundColor: '#9C2B2E',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     modalheadingText: {
//         marginTop: 25,
//         marginBottom: 35,
//         color: 'white',
//         textAlign: 'center',
//         width: 247,
//         fontStyle: "normal",
//         fontWeight: '700',
//         fontSize: 28,
//         fontWeight: 'bold',
//     },
//     modalsmallText: {
//         color: 'white',
//         textAlign: 'center',
//         marginBottom: 15,
//         width: 180,
//         height: 42,
//         fontStyle: "normal",
//         fontWeight: "500",
//         fontSize: 14,
//     },
//     InputModal: {
//         flexDirection: 'row',
//         marginVertical: 16,
//         marginHorizontal: 40,
//         borderBottomWidth: 1,
//         borderColor: '#FFFFFF',
//     },
//     IconModal: {
//         marginHorizontal: 10,
//         marginTop: 10,
//         fontSize: 30,
//         fontWeight: '500',
//     },
//     InputModaltwo: {
//         flexDirection: 'row',
//         marginVertical: 16,
//         marginHorizontal: 40,
//         borderBottomWidth: 1,
//         borderColor: '#FFFFFF',
//     },
//     IconModaltwo: {
//         marginHorizontal: 10,
//         marginTop: 10,
//         fontSize: 30,
//         fontWeight: '500',
//     },
//     TextInputModal: {
//         color: '#FFFFFF',
//         width: 240,
//         marginLeft: 10,
//         color: 'white',
//         placeholder: 'white',
//         fontSize: 16,
//         fontWeight: '500',
//     },
//     TextInputModaltwo : {
//         color: '#FFFFFF',
//         width: 240,
//         marginLeft: 10,
//         color: 'white',
//         placeholder: 'white',
//         fontSize: 16,
//         fontWeight: '500',
//     },
//     btn: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         marginTop: 40,
//     },
//     Input: {
//         flexDirection: 'row',
//         marginVertical: 16,
//         marginHorizontal: 40,
//         borderBottomWidth: 1,
//         borderBottomColor: '#9C2B2E',
//         borderColor: '#000000',
//     },
//     InputArea: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },

//     Icon: {
//         marginTop: 10,
//         fontSize: 30,
//         fontWeight: '500',
//     },
// })

// export default AppIntro;
