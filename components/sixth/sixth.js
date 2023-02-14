import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'

const Gallery_view = ({ navigation }) => {
    return (
        <ScrollView>
            {/* style={{ flex: 1 }} */}
            <View style={styles.Container}>
                <Image style={styles.logo} source={require('../Images/iconback.png')} />
                <View style={styles.InnerContainer}>
                    <Text style={styles.heading}>Categories</Text>
                </View>
            </View>

            <View style={styles.first}>
                <View style={styles.boxtwo}>
                <Image source={require('../Images/docItem.png')} />

                    <View style={styles.secbox}>
                        {/* <Image source={require('../Images/cardicon.png')} /> */}
                    
                    <View style={styles.text}>
                        
                        <Text style={styles.heading}>Life Story Timeline</Text>
                        <Text style={styles.para}>Create a new TimeLine for a loved one,or event or any other subject ypu'd like a TimeLine for</Text>

                        <Text style={styles.para}>Tap to create</Text>
                    </View>
                    </View>
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
    logo: {
        alignSelf: 'center',
        marginVertical: 30,
        marginLeft: 240,

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
    },


      boxtwo: {
        alignSelf: "center",
        width: 228,
        height: 346,
        alignItems: "center",
        borderRadius: 38,
        backgroundColor: "#FBFCFE",
        backgroundColor: "#2C2540",

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
        fontSize: 20,
        color: "#2C2540",
        bottom: 75,
        width: 280,
    
      },
      getstarted: {
        alignSelf: "center",
        bottom: 20,
      },
      background: {
        height: 200,
        width: 420,
        top: 280,
      },
})