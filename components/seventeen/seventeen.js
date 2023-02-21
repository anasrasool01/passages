import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';

const ManageSubscriptions = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.first}>
        <TouchableOpacity >
          <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{navigation.navigate("Privacy_And_Security")}} >
          <Text style={styles.heading}>Manage Payments</Text>
        </TouchableOpacity>

        <View style={styles.boxtwo}>

          <View style={styles.title}>
            <Text style={styles.card}>Free</Text>
            <Text style={styles.master}>V</Text>
          </View>

          <View style={styles.title2}>
            <Text style={styles.stars}>1GB of Storage</Text>
            <Text style={styles.stars}>Personal Vault</Text>
            <Text style={styles.stars}>3 Digital Safes with Life Story Timelines</Text>
            <Text style={styles.stars}>Virtual Time Capsule for future Messages</Text>
            <Text style={styles.stars}>No Advertising</Text>
          </View>
        </View>


        <View style={styles.boxtwo}>

          <View style={styles.title}>
            <Text style={styles.card}>Premium</Text>
          </View>

          <View style={styles.title2}>
            <Text style={styles.stars}>Unlimited Storage</Text>
            <Text style={styles.stars}>Personal Vault</Text>
            <Text style={styles.stars}>Unlimited Digital Safes with unlimited Life Story Timelines</Text>
            <Text style={styles.stars}>Virtual Time Capsule for future Messages</Text>
            <Text style={styles.stars}>No Advertising</Text>
          </View>
          <View style={styles.title2}></View>
          <Text>$6.99 Per month</Text>
        </View>



        <View style={styles.boxtwo}>

          <View style={styles.title}>
            <Text style={styles.card}>Premium</Text>
          </View>

          <View style={styles.title2}>
            <Text style={styles.stars}>Unlimited Storage</Text>
            <Text style={styles.stars}>Personal Vault</Text>
            <Text style={styles.stars}>Unlimited Digital Safes with unlimited Life Story Timelines</Text>
            <Text style={styles.stars}>Virtual Time Capsule for future Messages</Text>
            <Text style={styles.stars}>No Advertising</Text>
          </View>
          <View style={styles.title2}></View>
          <Text>$6.99 Per month</Text>
        </View>

      </View>
    </ScrollView>

  )
}
export default ManageSubscriptions
const styles = StyleSheet.create({
  first: {
    // flex: 1,
  },
  IconBack: {
    marginLeft: 20,
    marginTop: 40,
  },

  boxtwo: {
    alignSelf: "center",
    width: 380,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#9C2B2E",
    marginTop: 30,
  },

  heading: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 26,
    color: "#9C2B2E",
    marginTop: -25,
    // marginBottom: 20,
  },
  stars: {
    textAlign: "left",
    // fontWeight: 'bold',
    fontSize: 15,
    width: 280,
    color: "#FFFFFF",
    marginBottom: 8,
  },

  title: {
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: 300,
  },
  // title2: {
  //   marginLeft: -50,
  //   marginTop: 10,
  //   justifyContent: 'space-evenly',
  //   width: 300,
  // },
  card: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 5,
  },
  master: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    marginTop: 5,
  },
})