import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';

const Passages = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.first}>
      <Image style={styles.img} source={require('../Images/logo.png')} />
      <Image style={styles.background} source={require('../Images/BackGround.png')} />
      <View style={styles.boxtwo}>
        <View style={styles.secbox}>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../Images/PlayButton.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>Step-by-step</Text>
          <Text style={styles.para}>Watch this Step-by-step guidance video on everything offered on the Passages App.</Text>
        </View>
        <TouchableOpacity onPress={() =>navigation.navigate('Create_Your_Account')} >
          <Image style={styles.getstarted} source={require('../Images/GetStarted.png')} />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}
export default Passages
const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#2C2540',
  },
  img: {
    alignSelf: "center",
    top: 58,
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
    width: 340,
    height: 331,
    alignItems: "center",
    bottom: 20,
    borderRadius: 38,
    backgroundColor: "#FBFCFE",
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