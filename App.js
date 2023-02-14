import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MyTabs from './components/routes'

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MyTabs />
    </View>
  )
}
export default App