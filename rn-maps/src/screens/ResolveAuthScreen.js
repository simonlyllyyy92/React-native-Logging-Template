import React from "react"
import { AsyncStorage } from "react-native"
import { navigate } from "../navigationService"
import { render } from "react-dom"

class ResolveAuthScreen extends React.Component {
  tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem("Login token")
    if (token) {
      navigate("MainFlow")
    } else {
      navigate("Signin")
    }
  }

  componentDidMount() {
    this.tryLocalSignin()
  }
  render() {
    return null
  }
}

export default ResolveAuthScreen
