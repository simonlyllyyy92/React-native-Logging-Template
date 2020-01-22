import React from "react"
import { View, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import { connect } from "react-redux"
import Spacer from "../components/Spacer"
import { postSignUp } from "../store/signup/action"
import LoadingIcon from "../components/LoadingSpanner"
import Icon from "react-native-vector-icons/FontAwesome"
import _ from "lodash"
import { navigate } from "../navigationService"

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("Login token")
      if (value !== null) {
        navigate("MainFlow")
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  handleSignup = () => {
    this.props.postSignUp({
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    this._retrieveData()
    return (
      <>
        {this.props.signUpStatus ? (
          <LoadingIcon />
        ) : (
          <View style={styles.container}>
            <Spacer>
              <Text h3>Sign up</Text>
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
              <Button title="Sign up" onPress={this.handleSignup} />
            </Spacer>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signin")}
            >
              <Spacer>
                <Text style={styles.link}>
                  Already have an account? {"\n\n"}Sign in instead
                </Text>
              </Spacer>
            </TouchableOpacity>
          </View>
        )}
      </>
    )
  }
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
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
  postSignUp
}

const mapStateToProps = state => {
  return {
    signUpToken: state.signUp.signUpInfo.data,
    signUpStatus: state.signUp.signUpInfo.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
