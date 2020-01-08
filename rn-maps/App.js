import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { SafeAreaView } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import { Provider } from "react-redux"
import { setNavigator } from "./src/navigationService"
import store from "./src/store/setStore"

import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"

const switchNavigator = createSwitchNavigator({
  LoginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  })
})

const App = createAppContainer(switchNavigator)
export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <App
          ref={navigator => {
            setNavigator(navigator)
          }}
        />
      </Provider>
    </SafeAreaView>
  )
}
