import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

const Save20 = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.first}>
      <TouchableOpacity >
        <Image style={styles.IconBack} source={require('../Images/backArrow2.png')} />
      </TouchableOpacity>
        <Image style={styles.img} source={require('../Images/logo.png')} />
        <Image style={styles.background} source={require('../Images/BackGround.png')} />
        <View style={styles.boxtwo}>

          <View style={styles.text}>
            <Text style={styles.heading}>SAVE 20% on the Premium Package</Text>
            <Text style={styles.para}>press "GO PREMIUM" to recieve the discount.</Text>
            <Text style={styles.heading1}>Skip</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.btn3}>
              <Text style={styles.Invite3}>GO PREMIUM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
export default Save20
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
  secbox: {
    width: 220,
    height: 190,
    bottom: 90,
    backgroundColor: "#C4C4C4",
    borderRadius: 16,
  },
  boxtwo: {
    alignSelf: "center",
    width: 300,
    height: 231,
    alignItems: "center",
    bottom: 140,
    borderRadius: 38,
    backgroundColor: "#FBFCFE",
  },
  heading: {
    textAlign: "center",
    alignSelf : "center",
    fontWeight: 'bold',
    fontSize: 24,
    width : 200,
    marginVertical : 20,
    color: "#9C2B2E",
  },
  para: {
    textAlign: "center",
    alignSelf : "center",
    fontWeight: 'normal',
    fontSize: 16,
    width : 180,
    color: "#2C2540",
  },
  heading1: {
    textAlign: "center",
    alignSelf : "center",
    fontWeight: 'bold',
    fontSize: 16,
    width : 200,
    marginVertical : 10,
    color: "#9C2B2E",
    textDecorationLine : "underline",
  },
  getstarted: {
    alignSelf: "center",
    bottom: 20,
  },
  background: {
    height: 220,
    width: 420,
    top: 280,
  },
  btn3: {
    backgroundColor: '#9C2B2E',
    width: 182,
    height: 53,
    borderRadius: 12,
    marginTop: 20,
  },
  Invite3: {
    marginTop: 13,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: "center",
  },

})