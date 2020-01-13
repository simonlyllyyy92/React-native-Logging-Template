import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { getUserAuthInfo } from "../store/appUser/action"
import { connect } from "react-redux"

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserAuthInfo()
  }
  handleLogout = () => {
    console.log("Log out button clicked")
    console.log(this.props.userInfo)
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
  getUserAuthInfo
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.userInfo.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
