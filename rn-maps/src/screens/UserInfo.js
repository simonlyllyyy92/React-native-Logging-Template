import React from "react"
import { View, StyleSheet, AsyncStorage } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { getUserAuthInfo, clearLoggingReducer } from "../store/appUser/action"
import { connect } from "react-redux"
import { navigate } from "../navigationService"
import Icon from "react-native-vector-icons/FontAwesome"

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("Login token")
      if (value !== null) {
        await AsyncStorage.removeItem("Login token")
        navigate("Signin")
      } else {
        navigate("Signin")
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidMount() {
    this.props.getUserAuthInfo()
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
        <Input
          label="Your email is"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          value={`  ${this.props.userInfo.substr(14)}`}
          disabled
          disabledInputStyle={{ color: "black", opacity: 1 }}
        />
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
  clearLoggingReducer
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.userInfo.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
