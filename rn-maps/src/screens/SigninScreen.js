import React from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { postSignIn, FBSignIn } from "../store/signin/action"
import { connect } from "react-redux"
import LoadingIcon from "../components/LoadingSpanner"
import Icon from "react-native-vector-icons/FontAwesome"
import _ from "lodash"
import * as Facebook from "expo-facebook"
import { navigate } from "../navigationService"

class SigninScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSignin = () => {
    this.props.postSignIn({
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      email: "",
      password: ""
    })
  }

  logInFB = async () => {
    try {
      await Facebook.initializeAsync("179546506438876")

      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      })
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        )
        const userInfo = await response.json()
        Alert.alert("Logged in!", `Hi ${userInfo.name}!`)
        this.props.FBSignIn(userInfo)
      } else if (type === "cancel") {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
  }

  render() {
    return (
      <>
        {this.props.is_SignIn ? (
          <LoadingIcon />
        ) : (
          <View style={styles.container}>
            <Spacer>
              <Text h3>Sign in</Text>
            </Spacer>
            <Input
              label="Email"
              value={this.state.email}
              onChangeText={newEmail => {
                this.setState({
                  email: newEmail
                })
              }}
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon={
                <Icon name="envelope" size={19} style={{ marginRight: 16 }} />
              }
            />
            <Spacer />
            <Input
              label="Password"
              value={this.state.password}
              onChangeText={newPassword => {
                this.setState({
                  password: newPassword
                })
              }}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              leftIcon={
                <Icon name="lock" size={24} style={{ marginRight: 16 }} />
              }
            />
            <Spacer />
            <Spacer>
              <Button title="Sign in" onPress={this.handleSignin} />
            </Spacer>
            <Spacer>
              <Button title="Sign in with FB" onPress={this.logInFB} />
            </Spacer>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Spacer>
                <Text style={styles.link}>
                  Do not have an account? {"\n\n"}Sign up here
                </Text>
              </Spacer>
            </TouchableOpacity>
          </View>
        )}
      </>
    )
  }
}

SigninScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50
  },
  link: {
    color: "blue"
  },
  iconStyle: {
    marginRight: 12
  }
})

const mapDispatchToProps = {
  postSignIn,
  FBSignIn
}

const mapStateToProps = state => {
  return {
    is_SignIn: state.signIn.signInInfo.isLoading,
    FbUserInfo: state.signIn.signInInfo.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
