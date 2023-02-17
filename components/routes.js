import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Passages from './first/first';
import Create_Your_Account from './second/second';
import Details from './third/third';
import Card_Details from './forth/forth';
import Sign_In from './fifth/fifth';
import Gallery_view from './sixth/sixth';
import Profile from './seventh/seventh';
import Gallery from './Eighth/eight';
import DetailScreen from './ninth/ninth';
// import AppIntro from './fifth/modalView';

const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      // initialRouteName="Passages" screenOptions={{
        // animation: 'fade_from_bottom'
        screenOptions = {{headerShown : false}}
      // }}
      >

        <Stack.Screen name="Passages" component={Passages} />

        <Stack.Screen name="Create_Your_Account" component={Create_Your_Account} />

        <Stack.Screen name="Details" component={Details} />

        <Stack.Screen name="Card_Details" component={Card_Details} />

        <Stack.Screen name="Sign_In" component={Sign_In} />

        <Stack.Screen name="Gallery_view" component={Gallery_view} />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Gallery" component={Gallery} />

        <Stack.Screen name="DetailScreen" component={DetailScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MyTabs;