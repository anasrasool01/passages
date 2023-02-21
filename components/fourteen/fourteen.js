import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';

const PrivacyAndSecurity = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity >
        <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
      </TouchableOpacity>
      <View style={styles.first}>
        <Text style={styles.heading}>Privacy And Security</Text>

<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Privacy_Policy')}>
=======
        <TouchableOpacity onPress={() => navigation.navigate('ManagePayments')}>
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>Privacy Policy</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Terms_and_Conditions')} >
=======
        <TouchableOpacity >
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>Terms and Conditions</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Manage_Subscriptions')} >
=======
        <TouchableOpacity >
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>What is a Two-Factor Authentication and how can i turn this On and Off ?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Save_20')} >
=======
        <TouchableOpacity >
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>Is my Profile secure and private?Can I trust passages with my data?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>


<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Save_15')}>
=======
        <TouchableOpacity >
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>IS your site moderated?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>


<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
=======
        <TouchableOpacity >
>>>>>>> staging
          <View style={styles.btn}>
            <Text style={styles.Invite}>Data management and content storage</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}
export default PrivacyAndSecurity
const styles = StyleSheet.create({
  first: {
    flex: 1,
  },
  IconBack: {
    marginLeft: 20,
    marginTop: 40,
  },
  heading: {
    marginTop: -26,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 26,
    color: "#9C2B2E",
    marginBottom: 40,
  },

  getstarted: {
    alignSelf: "center",
    marginRight: 20,
  },
  btn: {
    backgroundColor: '#FFFFFF',
    width: 342,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
 
  Invite: {
    // textAlign: 'center',
    marginTop: 13,
    marginBottom : 13,
    marginLeft: 20,
    color: '#9C2B2E',
    fontSize: 18,
    width : 270,
    fontWeight: '700',
  },
})