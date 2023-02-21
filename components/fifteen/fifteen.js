import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';

<<<<<<< HEAD
const PrivacyPolicy = ({ navigation }) => {
=======
const PrivacyAndSecurity = ({ navigation }) => {
>>>>>>> staging
  return (
    <ScrollView>
      <TouchableOpacity >
        <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
      </TouchableOpacity>
      <View style={styles.first}>
<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Privacy_And_Security')}>
        <Text style={styles.heading}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.para}>
          <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et
          </Text>

          <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et.
          </Text>
        </View>
=======
        <Text style={styles.heading}>Privacy And Security</Text>

        <TouchableOpacity onPress={() => navigation.navigate('ManagePayments')}>
          <View style={styles.btn}>
            <Text style={styles.Invite}>Privacy Policy</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>Terms and Conditions</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>What is a Two-Factor Authentication and how can i turn this On and Off ?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>Is my Profile secure and private?Can I trust passages with my data?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>


        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>IS your site moderated?</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>


        <TouchableOpacity >
          <View style={styles.btn}>
            <Text style={styles.Invite}>Data management and content storage</Text>
            <Image style={styles.getstarted} source={require('../Images/frontArrow.png')} />
          </View>
        </TouchableOpacity>

>>>>>>> staging
      </View>
    </ScrollView>
  )
}
<<<<<<< HEAD
export default PrivacyPolicy
=======
export default PrivacyAndSecurity
>>>>>>> staging
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
<<<<<<< HEAD
  para: {
    marginHorizontal: 26,
  },
  para1: {
    marginVertical: 20,
    fontSize: 20,
    color: "#9C2B2E"
=======

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
>>>>>>> staging
  },
})