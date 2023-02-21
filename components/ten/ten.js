import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const BirthdayScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <TouchableOpacity >
                    <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
                </TouchableOpacity>
                <Image style={styles.img} source={require('../Images/logonine.png')} />

                <Text style={styles.HeadersText1}>Preview Your Story</Text>

                <Text style={styles.CardText}>Celebration of Life</Text>

                <Text style={styles.HeadersText3}>Happy 50th Birthday Jane</Text>

                <Text style={styles.HeadersText}>Dedicated to Jane Doe</Text>

                <View style={styles.input} >
                    <Image style={styles.Textimageplace} source={require('../Images/calendernine.png')} />
                    <Text style={styles.HeadersText2}>Decmber 1st,2032.</Text>
                </View>

                <View style={styles.input}>
                    <Image style={styles.Textimageplace} source={require('../Images/clock.png')} />
                    <Text style={styles.HeadersText2}> 00:00</Text>
                </View>

                {/* images */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, }}>
                    <View style={{ marginLeft: 20, }}>
                        <Image style={{ alignSelf: 'center'  }} source={require('../Images/glassten.png')} />

                    </View>
                    <View style={{ borderRadius: 300, marginRight: 30 }}>
                        <Image style={{ alignSelf: 'center',borderRadius: 15, }} source={require('../Images/50ten.png')} />
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, }}>
                    <View style={{ marginLeft: 20, }}>
                        <Image style={{ alignSelf: 'center',borderRadius: 15, }} source={require('../Images/caketen.png')} />

                    </View>
                    <View style={{ borderRadius: 300, marginRight: 30 }}>
                        <Image style={{ alignSelf: 'center',borderRadius: 15, }} source={require('../Images/celebrationten.png')} />
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 20, }}>
                        <Image style={{ alignSelf: 'center',borderRadius: 15, }} source={require('../Images/birthdayten.png')} />

                    </View>
                    <View style={{ borderRadius: 300, marginRight: 30 }}>
                        <Image style={{ alignSelf: 'center',borderRadius: 15, }} source={require('../Images/handten.png')} />
                    </View>
                </View>

                <View
                    style={styles.paragraph}
                >
                    <Text style={styles.parat}>Happy 50th Birthday My Love </Text>
                    <Text style={styles.parat}>I'm sending you this message a decode in the past - and a I can Imagine in a decode I Love You Even more </Text>
                    <Text style={styles.parat}>I cannot believe how Lucky we are to found eachother and life we have created.Thank you for all the love and memories.</Text>
                    <Text style={styles.parat}>I wish you the most amazing birthday. </Text>
                    <Text style={styles.parat}>Love,Jon</Text>

                </View>


                <View style={styles.UnderLine}></View>


                <View style={styles.input} >
                    <Image style={styles.Textimageplace} source={require('../Images/iconplusten.png')} />
                    <Text style={styles.Invited}>Invited Collaborators</Text>
                </View>



                <View style={styles.two}>
                    <View style={styles.contentall}>
                        <Image style={styles.IconModaltwo} source={require('../Images/profileoneeight.png')} />
                        <View style={styles.content}>
                            <Text style={styles.title} >Jane Doe</Text>
                            <Text style={styles.title} >jandoe@gmail.com</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() =>navigation.navigate('Content')}
                 style={[styles.btn, { marginBottom: 20 }]}>
                    <Text style={[styles.Invite,]}>OK</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default BirthdayScreen

const styles = StyleSheet.create({
    imageadd: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Textimageplace: {
        marginTop: 15,
        // marginRight: 20
    },
    Under: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    Leave: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    IconBack: {
        marginLeft: 20,
        marginTop: 20,
    },
    img: {
        alignSelf: 'center',
        marginBottom: 20
    },
    HeadersText: {
        color: '#2C2540',
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 20
    },
    HeadersText1: {
        color: '#9C2B2E',
        fontSize: 21,
        fontWeight: '700',
        marginBottom: 30,
        textAlign : 'center',
    },
    HeadersText3 : {
        marginHorizontal : 20,
        color: '#9C2B2E',
        fontSize: 23,
        fontWeight: '700',
    },
    CardText :{
        backgroundColor : "pink",
        width : 179,
        height : 28,
        textAlign : "center",
        borderRadius : 33,
        fontSize :  17,
        marginStart : 29,
        margin : 2,
        marginBottom : 30,
    },
    HeadersText2: {
        color: '#9C2B2E',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 13,
    },
    TextType: {
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 20
    },
    TitleText: {
        marginLeft: 20,
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '700',
    },
    card2: {
        width: 332,
        height: 63,
        backgroundColor: '#9C2B2E',
        alignSelf: 'center',
        borderRadius: 15,
        margin: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgTitle: {
        width: 24,
        height: 24,

    },
    inputTitle: {
        margin: 5,
    },
    UnderLine: {
        borderColor: '#C4C4C4',
        borderWidth: 1,
        marginHorizontal: 20
    },
    UnderLin: {
        borderColor: '#C4C4C4',
        borderWidth: 1,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    StoryText: {
        marginLeft: 20,
        marginTop: 20,
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '700'
    },
    Story: {
        marginLeft: 20,
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '700',

    },
    Box: {
        borderWidth: 2,
        borderColor: '#9C2B2E',
        margin: 20,
        borderRadius: 10
    },
    BoxText: {
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 4,
    },
    btn: {
        backgroundColor: '#9C2B2E',
        width: 122,
        height: 51,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 12,
    },
    Invite: {
        textAlign: 'center',
        marginTop: 13,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    AddText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '600',
        marginStart: 15,
    },
    // UnderLine1: {
    //     borderColor: '#C4C4C4',
    //     borderWidth: 1,
    //     marginHorizontal: 20,
    //     marginTop: 100,
    // },
    ModalView: {
        backgroundColor: '#9C2B2E',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 25,
        marginTop: 220,
        width: 314,
        height: 335,
    },
    ModalImg: {
        // marginTop: -40
    },
    LeaveText: {
        color: '#FDFDFE',
        padding: 30,
        fontSize: 23,
        fontWeight: '500',
        textAlign: 'center',
    },
    btn1: {
        backgroundColor: '#FFFFFF',
        width: 108,
        height: 44,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 12,
        marginHorizontal: 20,
    },
    Invite1: {
        textAlign: 'center',
        marginTop: 13,
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '500',
    },
    btn2: {
        width: 108,
        height: 44,
        marginTop: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    Invited: {
        marginStart: 10,
        fontWeight: 'bold',
        // fontSize: 28,
        color: "#9C2B2E",
        marginVertical: 15,
    },
    two: {
        alignItems: "center",
        borderRadius: 15,
        // backgroundColor: 'grey',
        // elevation: 110,
        // shadowColor : "grey",
        // shadowColor : #rgba(44, 37, 64, 0.25),
        borderWidth: 1,
        width: 310,
        borderColor: '#FFFFFF',
        marginHorizontal: 30,
    },
    contentall: {
        flexDirection: 'row',
        margin: 10,
    },
    IconModaltwo: {
        right: 30,
        marginHorizontal: -15,
        // marginTop: 10,
    },
    title: {
        fontWeight: 'normal',
        fontSize: 17,
        color: '#2C2540',
        // marginTop : 10,
    },
    content: {
        marginTop: 20,
    },
    paragraph: {
        marginHorizontal: 20,
        marginVertical: 30,
    },
    parat: {
        marginVertical: 5,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '500',
    },
})