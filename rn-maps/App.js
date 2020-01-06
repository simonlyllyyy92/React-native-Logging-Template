import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"

const switchNavigator = createSwitchNavigator({
  LoginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  })
})

export default createAppContainer(switchNavigator)
