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
import BirthdayScreen from './ten/ten';
import Content from './eleven/eleven';
import Settings from './twelve/twelve';
import ManagePayments from './thirteen/thirteen';
import PrivacyAndSecurity from './fourteen/fourteen';

import PrivacyPolicy from './fifteen/fifteen';
import TermsandConditions from './sixteen/sixteen';
import ManageSubscriptions from './seventeen/seventeen';
import Save20 from './eighteen/eighteen';
import Save15 from './nineteen/nineteen';


const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        // initialRouteName="Passages" screenOptions={{
        // animation: 'fade_from_bottom'
        screenOptions={{ headerShown: false }}
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

        {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}

        {/* <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} /> */}

        {/* <Stack.Screen name="My_Content" component={Content} /> */}

        {/* <Stack.Screen name="Manage_Payments" component={ManagePayments} /> */}

        {/* <Stack.Screen name="Privacy_And_Security" component={PrivacyAndSecurity} /> */}

        <Stack.Screen name="Privacy_Policy" component={PrivacyPolicy} />

        <Stack.Screen name="Terms_and_Conditions" component={TermsandConditions} />

        <Stack.Screen name="Manage_Subscriptions" component={ManageSubscriptions} />

        <Stack.Screen name="Save_20" component={Save20} />

        <Stack.Screen name="Save_15" component={Save15} />

        {/* <Stack.Screen name="Settings" component={Settings} /> */}

        <Stack.Screen name="DetailScreen" component={DetailScreen} />

        <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />

        <Stack.Screen name="My_Content" component={Content} />

        <Stack.Screen name="Manage_Payments" component={ManagePayments} />

        <Stack.Screen name="Privacy_And_Security" component={PrivacyAndSecurity} />





        <Stack.Screen name="Settings" component={Settings} />






      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MyTabs;