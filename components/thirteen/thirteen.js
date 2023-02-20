import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react';

const ManagePayments = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView>

      <Modal
        visible={showModal}
        transparent={true}
        animationType='fade' >
<ScrollView>
        <View style={styles.ModalView}>

          <View style={styles.InnerContainer}>
            <Text style={styles.heading1}>Add card details</Text>
            <View style={styles.Input}>
              <Image style={styles.Icon} source={require("../Images/Icon.png")} />
              <TextInput style={styles.TextInput} placeholder='Card holder name' />
            </View>
            <View style={styles.Input}>
              <Image style={styles.Icon} source={require("../Images/card.png")} />
              <TextInput style={styles.TextInput} placeholder='Card number' />
            </View>
            <View style={styles.RowInput}>
              <View style={styles.InnrInput}>
                <Image style={styles.Icon} source={require("../Images/cvv.png")} />
                <TextInput style={styles.TextInput} placeholder='***' />
              </View>
              <View style={styles.InnrInput}>
                <Image style={styles.Icon} source={require("../Images/calender.png")} />
                <TextInput style={styles.TextInput} placeholder='00/00' />
              </View>
            </View>


            <View style={styles.btn}>
              <TouchableOpacity style={styles.btn3}>
                <Text style={styles.Invite3}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn4}>
                <Text style={styles.Invite4}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        </ScrollView>
      </Modal>



      <View style={styles.first}>
        <TouchableOpacity >
          <Image style={styles.IconBack} source={require('../Images/backArrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.heading}>Manage Payments</Text>
        </TouchableOpacity>

        <View style={styles.boxtwo}>

          <View style={styles.title}>
            <Text style={styles.card}>Card holder name</Text>
            <Text style={styles.master}>Mastercard</Text>
          </View>

          <View style={styles.title2}>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>0000</Text>

          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.Invite}>Delete Card</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.boxtwo}>

          <View style={styles.title}>
            <Text style={styles.card}>Card holder name</Text>
            <Text style={styles.master}>Mastercard</Text>
          </View>

          <View style={styles.title2}>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>****</Text>
            <Text style={styles.stars}>0000</Text>

          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.Invite}>Delete Card</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.btn2}>
          <Text style={styles.Invite2}>Add New Card</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}
export default ManagePayments
const styles = StyleSheet.create({
  first: {
    flex: 1,
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
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },

  title: {
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: 300,
  },
  title2: {
    marginLeft: -50,
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: "row",
    width: 300,
  },
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
  btn: {
    backgroundColor: '#FFFFFF',
    width: 130,
    height: 51,
    marginTop: 20,
    marginLeft: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  btn2: {
    backgroundColor: '#9C2B2E',
    width: 200,
    height: 51,
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 12,
    marginBottom: 15,
  },
  btn3: {
    backgroundColor: '#9C2B2E',
    width: 110,
    height: 51,
    borderRadius: 12,
  },
  btn4: {
    backgroundColor: '#FFFFFF',
    width: 110,
    height: 51,
    borderRadius: 12,
    borderColor: '#9C2B2E',
    borderWidth: 2,
  },
  Invite: {
    textAlign: 'center',
    marginTop: 13,
    color: '#9C2B2E',
    fontSize: 16,
    fontWeight: '500',
  },
  Invite2: {
    textAlign: 'center',
    marginTop: 13,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  Invite3: {
    textAlign: 'center',
    marginTop: 13,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  Invite4: {
    textAlign: 'center',
    marginTop: 13,
    color: '#9C2B2E',
    fontSize: 16,
    fontWeight: '500',
  },


  ModalView: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    borderTopEndRadius: 55,
    borderTopLeftRadius: 55,
    marginTop: 220,
  },
  ModalImg: {
    // marginTop: -40
  },
  Container: {
    flex: 3,
    backgroundColor: '#2C2540',
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  InnerContainer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 53,
    borderTopRightRadius: 53,
  },
  heading1: {
    fontWeight: '700',
    fontSize: 28,
    color: '#9C2B2E',
    margin: 35,
    marginLeft: 50,
  },
  Input: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9C2B2E',
    borderColor: '#000000',
  },
  InnrInput: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9C2B2E',
    borderColor: '#000000',
    width: 110,
  },
  Icon: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 30,
    fontWeight: '500',
  },
  TextInput: {
    color: '#9C2B2E',
    fontSize: 16,
    fontWeight: '500',
  },
  RowInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 24,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  checkboxContainer: {
    borderColor: "#2C2540",
  },
  checkbox: {
    width: 20,
    top: 24,
    height: 20,
    borderWidth: 2,
    borderColor: '#9C2B2E',
    width: 20,
    left: 330,

  },
  checked: {
    backgroundColor: '#9C2B2E',
  },
  checkboxText: {
    marginLeft: 72,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: "600",
    color: "#2C2540",
  },
})