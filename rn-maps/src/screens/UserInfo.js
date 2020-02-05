import React from "react"
import { View, StyleSheet, AsyncStorage } from "react-native"
import { Text, Input, Button, Image } from "react-native-elements"
import Spacer from "../components/Spacer"
import { getUserAuthInfo } from "../store/appUser/action"
import { connect } from "react-redux"
import { navigate } from "../navigationService"
import Icon from "react-native-vector-icons/FontAwesome"
import { showAlert } from "../store/generalAlert/action"
import { cleanSignInState } from "../store/signin/action"
import _ from "lodash"

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  _storeData = async props => {
    try {
      await AsyncStorage.setItem("Login token", props)
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("Login token")
      const FBvalue = this.props.FbUserInfo
      console.log(value)
      if (value !== null) {
        await AsyncStorage.removeItem("Login token")
        this.props.showAlert("Log out success !")
        navigate("Signup")
      } else if (!_.isEmpty(FBvalue)) {
        this.props.cleanSignInState()
        this.props.showAlert("Facebook Log out success !")
        navigate("Signin")
      } else {
        navigate("Signin")
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  _renderFBUserInfo = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: this.props.FbUserInfo.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20 }}>{this.props.FbUserInfo.name}</Text>
        <Text>ID: {this.props.FbUserInfo.id}</Text>
      </View>
    )
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem("Login token")
    const Fpvalue = this.props.FpUserInfo
    const FBvalue = this.props.FbUserInfo
    if (value !== null) {
      this.props.getUserAuthInfo(value)
    } else if (_.isEmpty(FBvalue) && !_.isEmpty(Fpvalue)) {
      this.props.getUserAuthInfo(Fpvalue.data.token)
      this._storeData(Fpvalue.data.token)
    }
  }

  handleLogout = () => {
    this._retrieveData()
  }

  render() {
    return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>User Profile</Text>
        </Spacer>
        <Spacer />
        {!_.isEmpty(this.props.FbUserInfo) ? (
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: this.props.FbUserInfo.picture.data.url }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>
              {this.props.FbUserInfo.name}
            </Text>
            <Text style={{ marginTop: 20 }}>
              ID: {this.props.FbUserInfo.id}
            </Text>
          </View>
        ) : (
          <Input
            label="Your email is"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            value={`  ${this.props.userInfo.substr(14)}`}
            disabled
            disabledInputStyle={{ color: "black", opacity: 1 }}
          />
        )}

        <Spacer />

        <Spacer>
          <Button title="Log out" onPress={this.handleLogout} />
        </Spacer>
      </View>
    )
  }
}

UserInfo.navigationOptions = () => {
  return {
    header: null,
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  link: {
    color: "blue"
  }
})

const mapDispatchToProps = {
  getUserAuthInfo,
  showAlert,
  cleanSignInState
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.userInfo.data,
    FbUserInfo: state.signIn.FbSigninInfo.data,
    FpUserInfo: state.signIn.signInInfo.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
