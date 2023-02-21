import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';

const TermsandConditions = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
      </TouchableOpacity>
      <View style={styles.first}>
        <TouchableOpacity onPress={() => navigation.navigate('Privacy_And_Security')} >
        <Text style={styles.heading}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.para}>
          <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et
          </Text>

          <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi ad pariatur. Enim provident cupiditate possimus voluptatem cum magni eum, voluptates dignissimos sit suscipit voluptas delectus. Repudiandae fuga doloribus et.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
export default TermsandConditions
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
  para: {
    marginHorizontal: 26,
  },
  para1: {
    marginVertical: 20,
    fontSize: 20,
    color: "#9C2B2E"
  },
})