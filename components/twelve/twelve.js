import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';

const Settings = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity >
                    <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
                </TouchableOpacity>
      <View style={styles.first}>
        <Text style={styles.heading}>Settings</Text>

        <TouchableOpacity onPress={() =>navigation.navigate('ManagePayments')}>
          <View style={styles.btn}>
            <Text style={styles.Invite}>Manage Subscription</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>Manage Payments</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>Privacy and security</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>


        <TouchableOpacity >
          <View style={styles.btn2}>
            <Image style={styles.getstarted2} source={require('../Images/lock.png')} />
            <Text style={styles.Invite2}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn3}>
            <Image style={styles.getstarted2} source={require('../Images/message.png')} />
            <Text style={styles.Invite3}>Sign Out</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn3}>
            <Image style={styles.getstarted2} source={require('../Images/message.png')} />
            <Text style={styles.Invite3}>Delete Account</Text>
          </View>
        </TouchableOpacity>


      </View>
    </ScrollView>
  )
}
export default Settings
const styles = StyleSheet.create({
  first: {
    flex: 1,
  },
  IconBack: {
    marginLeft: 20,
    marginTop: 40,
},
  heading: {
    marginTop : -20,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 26,
    color: "#9C2B2E",
    marginBottom : 40,
  },

  getstarted: {
    alignSelf: "center",
    marginRight: 20,

  },
  getstarted2: {
    alignSelf: "center",
    marginLeft: 20,
  },
  btn: {
    backgroundColor: '#FFFFFF',
    width: 342,
    height: 53,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  btn2: {
    backgroundColor: '#FFFFFF',
    width: 342,
    height: 53,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    marginVertical: 20,
  },
  btn3: {
    backgroundColor: '#9C2B2E',
    width: 342,
    height: 53,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 90,
  },
  Invite: {
    textAlign: 'center',
    marginTop: 13,
    marginLeft: 20,
    color: '#9C2B2E',
    fontSize: 18,
    fontWeight: '700',
  },
  Invite: {
    textAlign: 'center',
    marginTop: 13,
    marginLeft: 20,
    color: '#9C2B2E',
    fontSize: 18,
    fontWeight: '700',
  },
  Invite2: {
    marginTop: 13,
    color: '#9C2B2E',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '700',
  },
  Invite3: {
    marginTop: 13,
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '700',
  },
})