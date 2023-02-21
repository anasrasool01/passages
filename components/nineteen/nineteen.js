import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

const Save15 = ({ navigation }) => {
  return (
    <ScrollView >
      <View style={styles.first}>
      <TouchableOpacity onPress={() =>navigation.goBack()} >
        <Image style={styles.IconBack} source={require('../Images/backArrow2.png')} />
      </TouchableOpacity>
        <Image style={styles.img} source={require('../Images/logo.png')} />
        <Image style={styles.background} source={require('../Images/BackGround.png')} />
        <View style={styles.boxtwo}>

          <View style={styles.text}>
          <Text style={styles.heading1}>MOST POPULAR</Text>
            <Text style={styles.heading}>SAVE 15% on the Life Time External Package</Text>
            <Text style={styles.para}>press "GO External" to recieve the discount.</Text>
            <Text style={styles.heading1}>Skip</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.btn3}>
              <Text style={styles.Invite3}>GO EXTERNAL</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
export default Save15
const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#2C2540',
    height: 1000,
  },
  IconBack: {
    marginLeft: 20,
    marginTop: 40,
},
  img: {
    alignSelf: "center",
  },
  boxtwo: {
    alignSelf: "center",
    width: 290,
    height: 275,
    alignItems: "center",
    bottom: 140,
    borderRadius: 38,
    backgroundColor: '#9C2B2E',
  },
  heading: {
    textAlign: "center",
    alignSelf : "center",
    fontWeight: 'bold',
    fontSize: 24,
    width : 250,
    marginVertical : 20,
    color: "#FFFFFF",
  },
  para: {
    textAlign: "center",
    alignSelf : "center",
    fontWeight: 'normal',
    fontSize: 16,
    width : 180,
    color: "#FFFFFF",
  },
  heading1: {
    textAlign: "center",
    alignSelf : "center",
    // fontWeight: 'bold',
    fontSize: 16,
    width : 200,
    marginVertical : 10,
    color: "#FFFFFF",
    // textDecorationLine : "underline",
  },
  getstarted: {
    alignSelf: "center",
    // bottom: 30,
  },
  background: {
    height: 220,
    width: 420,
    top: 320,
  },
  btn3: {
    backgroundColor: "#FBFCFE",
    width: 182,
    height: 53,
    borderRadius: 12,
    marginTop: 20,
  },
  Invite3: {
    marginTop: 13,
    color: '#9C2B2E',
    fontSize: 16,
    fontWeight: '700',
    textAlign: "center",
  },

})