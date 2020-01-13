import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { postSignIn } from "../store/signin/action"
import { connect } from "react-redux"
import LoadingIcon from "../components/LoadingSpanner"
import Icon from "react-native-vector-icons/FontAwesome"

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
    marginBottom: 200
  },
  link: {
    color: "blue"
  },
  iconStyle: {
    marginRight: 12
  }
})

const mapDispatchToProps = {
  postSignIn
}

const mapStateToProps = state => {
  return {
    signInStatus: state.signIn.signInInfo.data,
    is_SignIn: state.signIn.signInInfo.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
