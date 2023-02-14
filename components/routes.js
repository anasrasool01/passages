import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screensEnabled } from 'react-native-screens';
import Passages from './first/first';
import Create_Your_Account from './second/second';
import Details from './third/third';
import Card_Details from './forth/forth';
import Sign_In from './fifth/fifth';

const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Passages" screenOptions={{
        animation: 'fade_from_bottom'
      }}>

        <Stack.Screen name="Passages" component={Passages} />

        <Stack.Screen name="Create_Your_Account" component={Create_Your_Account} />

        <Stack.Screen name="Details" component={Details} />

        <Stack.Screen name="Card_Details" component={Card_Details} />

        <Stack.Screen name="Sign_In" component={Sign_In} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MyTabs;