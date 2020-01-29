import React from "react"
import { AsyncStorage } from "react-native"
import { navigate } from "../navigationService"
import { render } from "react-dom"
import { connect } from "react-redux"
import _ from "lodash"

class ResolveAuthScreen extends React.Component {
  tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem("Login token")
    const FbInfo = this.props.FbUserInfo
    if (token || !_.isEmpty(FbInfo)) {
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

const mapStateToProps = state => {
  return {
    FbUserInfo: state.signIn.signInInfo.data
  }
}

export default connect(mapStateToProps)(ResolveAuthScreen)
