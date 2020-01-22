import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { SafeAreaView } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import { Provider } from "react-redux"
import { setNavigator } from "./src/navigationService"
import storeConfig from "./src/store/setStore"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { PersistGate } from "redux-persist/integration/react"

import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"
import UserInfoScreen from "./src/screens/UserInfo"
import CounterScreen from "./src/screens/Counter"

const { persistor, store } = storeConfig()

const switchNavigator = createSwitchNavigator({
  LoginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  MainFlow: createBottomTabNavigator({
    UserInfo: UserInfoScreen,
    Counter: CounterScreen
  })
})

const App = createAppContainer(switchNavigator)
export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App
            ref={navigator => {
              setNavigator(navigator)
            }}
          />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}
