import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';

const Content = ({ navigation }) => {
  return (
    <ScrollView>

      <View style={styles.first}>
        <TouchableOpacity onPress={() =>navigation.navigate('Content')}>
        <Text style={styles.heading}>My Content</Text>
        </TouchableOpacity>
        <Text style={styles.para}>Life Story Timelines</Text>

        <View style={styles.boxtwo}>
          <View>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogo} source={require('../Images/dadyeleven.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>Second Baby</Text>
                <Text style={styles.invitation}>Invite a Collaboration</Text>
              </View>
            </View>
            <View style={styles.placeholder}>
              <Image style={styles.getstarted} source={require('../Images/messagenine.png')} />
              <TextInput style={styles.texxt}>Email</TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Invite}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>


        <Text style={styles.para}>Celebrations of Life</Text>

        <View style={styles.boxtwo}>
          <View>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogo} source={require('../Images/dadyeleven.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>Second Baby</Text>
                <Text style={styles.invitation}>Invite a Collaboration</Text>
              </View>
            </View>
            <View style={styles.placeholder}>
              <Image style={styles.getstarted} source={require('../Images/messagenine.png')} />
              <TextInput style={styles.texxt}>Email</TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Invite}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>

        <Text style={styles.para}>My Tributes</Text>

        <View style={styles.boxtwo}>
          <View>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogo} source={require('../Images/dadyeleven.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>Second Baby</Text>
                <Text style={styles.invitation}>Invite a Collaboration</Text>
              </View>
            </View>
            <View style={styles.placeholder}>
              <Image style={styles.getstarted} source={require('../Images/messagenine.png')} />
              <TextInput style={styles.texxt}>Email</TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Invite}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>

        <Text style={styles.para}>Legacy Plans</Text>

        <View style={styles.boxtwo}>
          <View>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogo} source={require('../Images/dadyeleven.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>Second Baby</Text>
                <Text style={styles.invitation}>Invite a Collaboration</Text>
              </View>
            </View>
            <View style={styles.placeholder}>
              <Image style={styles.getstarted} source={require('../Images/messagenine.png')} />
              <TextInput style={styles.texxt}>Email</TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Invite}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>

        <Text style={styles.para}>Life Books</Text>

        <View style={styles.boxtwo}>
          <View>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogo} source={require('../Images/dadyeleven.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>Second Baby</Text>
                <Text style={styles.invitation}>Invite a Collaboration</Text>
              </View>
            </View>
            <View style={styles.placeholder}>
              <Image style={styles.getstarted} source={require('../Images/messagenine.png')} />
              <TextInput style={styles.texxt}>Email</TextInput>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.Invite}>Invite</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>


        <Text style={styles.para}>Videos</Text>

        <View style={styles.boxtwo}>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogoImage} source={require('../Images/dadyeleven.png')} />
                <Text style={styles.titletwo}>Rock Concert</Text>
            </View>
         
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>



        <Text style={styles.para}>Messages</Text>

        <View style={styles.boxtwo}>
            <View style={styles.boxpicdata}>
              <Image style={styles.backgroundLogoImage} source={require('../Images/dadyeleven.png')} />
                <Text style={styles.titletwo}>To my BEst Friend</Text>
            </View>
         
          <View style={styles.UnderLine}></View>
          <View style={styles.lastsec}>
            <Text style={styles.date}>DATE</Text>
            <Image style={styles.del} source={require('../Images/del.png')} />
          </View>
        </View>


      </View>
    </ScrollView>
  )
}
export default Content
const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#2C2540',
  },
  backgroundLogo: {
    marginTop: 15,
    borderRadius: 10,
  },
  backgroundLogoImage : {
    marginLeft : 15,
    margin : 20,
    borderRadius: 10,
  },
  boxtwo: {
    alignSelf: "center",
    width: 340,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#FBFCFE",
  },
  placeholder: {
    flexDirection: "row",
    borderBottomWidth: 1,
    color: "grey",
    width: 200,
    marginLeft: 100,
    marginTop: -25,
  },
  boxpicdata: {
    flexDirection: "row"
  },
  heading: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 26,
    color: "#FFFFFF",
    marginVertical: 30,
  },
  para: {
    fontWeight: 'normal',
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    marginVertical: 20,
    marginHorizontal: 40,
  },
  getstarted: {
    alignSelf: "center",
  },
  texxt: {
    marginLeft: 10,
  },
  text: {
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    color: "#2C2540",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  titletwo : {
    color: "#2C2540",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 16,
    marginTop: 35,
    width:200,
  },
  invitation: {
    color: "#9C2B2E",
    fontWeight: "700",
    lineHeight: 17,
    fontSize: 17,
  },
  date: {
    color: "#9C2B2E",
    fontWeight: "700",
    fontSize: 17,

  },
  del: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#9C2B2E',
    width: 122,
    height: 51,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 10,
  },
  Invite: {
    textAlign: 'center',
    marginTop: 13,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  UnderLine: {
    borderColor: 'grey',
    borderWidth: 0.65,
    width: 280,
    marginBottom: 10,
    width: 340,
  },
  lastsec: {
    flexDirection: "row",
    width: 300,
    justifyContent: 'space-between',
  },
})