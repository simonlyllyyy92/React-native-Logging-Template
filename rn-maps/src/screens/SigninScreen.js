import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"

class SigninScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSignin = () => {
    console.log(`email is ${this.state.email}`)
    console.log(`password is ${this.state.password}`)
    // console.log("test")
  }

  render() {
    return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign in</Text>
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
          <Button title="Sign in" onPress={this.handleSignin} />
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
    marginBottom: 200
  },
  link: {
    color: "blue"
  }
})

export default SigninScreen
