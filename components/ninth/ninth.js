import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react'


// const names = ["anas", "fahad", "ali"];

const DetailScreen = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedName, setSelectedName] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Celebration of Life', value: 'apple'},
      {label: 'My Tribute', value: 'banana'},
      {label: 'Life Story', value: 'mango'}
    ]);
    return (
        <ScrollView>
            <View>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
                </TouchableOpacity>
                <Image style={styles.img} source={require('../Images/logonine.png')} />
                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType='fade' >

                    <View style={styles.ModalView}>
                        <Image style={styles.ModalImg} source={require('../Images/downloadnine.png')} />
                        <Text style={styles.LeaveText}>Are you sure you want to leave without saving?</Text>
                        <View style={styles.Leave}>
                            <TouchableOpacity style={styles.btn1} onPress={() => setShowModal(false)}>
                                <Text style={styles.Invite1}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.Invite}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>



                <Text style={styles.HeadersText}>Get creative, start your legacy:</Text>
                <Text style={styles.HeadersText1}>Celebration of Life, My Tribute, or Life Story</Text>
                <Text style={styles.TextType}>Type</Text>

                <DropDownPicker
                    placeholder="Select a name"
                    containerStyle={{ height: 40, width: 380, alignSelf: "center",marginVertical: 20, }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{justifyContent: 'flex-start'}}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                   
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                {/* {selectedName && (
                    <Text>You selected: {selectedName}</Text>
                )} */}

                <Text style={styles.TitleText}>Enter title</Text>
                <View style={styles.input}>
                    <Image style={styles.Textimageplace} source={require('../Images/pen.png')} />
                    <TextInput style={styles.inputTitle} placeholder='Enter title'></TextInput>
                </View>
                <View style={styles.UnderLine}></View>
                <Text style={styles.StoryText}>To whom you dedicate the story</Text>
                <View style={styles.input} >
                    <Image style={styles.Textimageplace} source={require('../Images/iconnine.png')} />
                    <TextInput style={styles.inputTitle} placeholder='Name'></TextInput>
                </View>
                <View style={styles.UnderLine}></View>
                <View style={styles.Under}>
                    <Image style={styles.Textimageplace} source={require('../Images/messagenine.png')} />
                    <TextInput style={styles.inputTitle} placeholder='Email'></TextInput>
                </View>
                <View style={styles.UnderLine}></View>
                <View style={styles.Box}>
                    <Text style={styles.BoxText}>When you want to send </Text>
                    <View style={styles.input} >
                        <Image style={styles.Textimageplace} source={require('../Images/calendernine.png')} />
                        <TextInput style={styles.inputTitle} placeholder='Date'></TextInput>
                    </View>
                    <View style={styles.UnderLine}></View>
                    <View style={styles.input}>
                        <Image style={styles.Textimageplace} source={require('../Images/clock.png')} />
                        <TextInput style={styles.inputTitle} placeholder='Time'></TextInput>
                    </View>
                    <View style={styles.UnderLin}></View>
                </View>
                <Text style={styles.Story}>Invite a Collaborator</Text>
                <View style={styles.input} >
                    <Image style={styles.Textimageplace} source={require('../Images/messagenine.png')} />
                    <TextInput style={styles.inputTitle} placeholder='Email'></TextInput>
                </View>
                <View style={styles.UnderLine}></View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.Invite}>Invite</Text>
                </TouchableOpacity>
                <Text style={styles.StoryText}> Add Images</Text>
                <View style={styles.imageadd}>

                    <View style={{ borderWidth: 2, borderRadius: 10, borderStyle: 'dotted', width: 153, height: 146, marginLeft: 20, marginTop: 10 }}>
                    <Image style={{ marginTop: 60, alignSelf: 'center' }} source={require('../Images/messagenine.png')} />
                        



                    </View>
                    <View style={{ borderWidth: 2, borderRadius: 10, borderStyle: 'dotted', width: 153, height: 146, marginRight: 30, marginTop: 10 }}>
                        <Image style={{ marginTop: 60, alignSelf: 'center' }} source={require('../Images/messagenine.png')} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={styles.AddText}>Add multiple Images</Text>
                    {/* <Image style={{ alignSelf: 'center', marginLeft: 6, marginTop: 2 }} source={require('../Images/messagenine.png')} /> */}
                </View>
                <Text style={styles.StoryText}> Add Videos</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ borderWidth: 2, borderRadius: 10, borderStyle: 'dotted', width: 153, height: 146, marginLeft: 20, marginTop: 10 }}>
                    <Image style={{ marginTop: 60, alignSelf: 'center' }} source={require('../Images/messagenine.png')} />
                    </View>
                    <View style={{ borderWidth: 2, borderRadius: 10, borderStyle: 'dotted', width: 153, height: 146, marginRight: 30, marginTop: 10 }}>
                        <Image style={{ marginTop: 60, alignSelf: 'center' }} source={require('../Images/messagenine.png')} />
                    </View>
                </View>
                <View style={styles.input} >
                    <Text style={styles.AddText}>Add multiple Videos</Text>
                    {/* <Image style={{ alignSelf: 'center', marginLeft: 6, marginTop: 2 }} source={require('../Images/messagenine.png')} /> */}
                </View>
                {/* <Image /> */}
                <Text style={styles.StoryText}>Add Text</Text>
                <View style={{ flexDirection: 'row' }}>
                    {/* <Image style={{ alignSelf: 'center', marginLeft: 6, marginTop: 2 }} source={require('../Images/messagenine.png')} /> */}
                    <TextInput placeholder='Write..'
                        numberOfLines={2}
                        multiline={true}
                        style={{ marginLeft: 10, fontWeight: '500' }}></TextInput>
                </View>
                <View style={styles.UnderLine1}></View>
                <View style={styles.input} >
                    {/* <Image style={{ alignSelf: 'center', marginLeft: 6, marginTop: 2 }} source={require('../Images/messagenine.png')} /> */}
                    <Text style={styles.AddText}>Add more Text</Text>
                </View>
                <TouchableOpacity style={styles.card2}>
                    <Text style={[{ alignSelf: 'center', marginLeft: 130, color: '#FFFFFF', fontSize: 20, fontWeight: '700' }]}>Preview</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.Invite}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.Invite}>Save</Text>
                    </TouchableOpacity>

                </View>
                <Text style={[styles.StoryText]}>Invite a Collaborator</Text>
                <View style={styles.input} >
                    <Image style={styles.Textimageplace} source={require('../Images/messagenine.png')} />
                    <TextInput style={styles.inputTitle} placeholder='Email'></TextInput>
                </View>
                <View style={styles.UnderLine}></View>

                <TouchableOpacity onPress={() =>navigation.navigate('BirthdayScreen')} 
                 style={[styles.btn, { marginBottom: 20 }]}>

                    <Text style={[styles.Invite,]}>Share</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageadd: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Textimageplace: {
        marginTop: 15,
        marginRight: 20
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
        // color:"#9C2B2E" ,
    },
    img: {
        alignSelf: 'center',
        // marginTop: -30,
        marginBottom: 20
    },
    HeadersText: {
        color: '#2C2540',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 20

    },
    HeadersText1: {
        color: '#9C2B2E',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 20,
        marginRight: 100,
        marginBottom: 30,
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
        width: 152,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 12,
    },
    Invite: {
        textAlign: 'center',
        marginTop: 8,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',

    },
    AddText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '600',
        marginStart : 15,
    },
    UnderLine1: {
        borderColor: '#C4C4C4',
        borderWidth: 1,
        marginHorizontal: 20,
        marginTop: 100,
    },
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
})