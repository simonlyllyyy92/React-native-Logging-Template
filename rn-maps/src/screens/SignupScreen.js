import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import { connect } from "react-redux"
import Spacer from "../components/Spacer"
import { postSignUp } from "../store/signup/action"

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSignup = () => {
    console.log(`email is ${this.state.email}`)
    console.log(`password is ${this.state.password}`)
    // console.log("test")
    this.props.postSignUp({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign up</Text>
        </Spacer>

        <Input
          lael="Email"
          value={this.state.email}
          onChangeText={newEmail => {
            this.setState({
              email: newEmail
            })
          }}
          autoCapitalize="none"
          autoCorrect={false}
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
    signUpStatus: state.signUp.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
