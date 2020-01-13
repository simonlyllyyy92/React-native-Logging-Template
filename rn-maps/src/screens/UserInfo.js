import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { connect } from "react-redux"

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogout = () => {
    console.log("Log out button clicked")
  }

  render() {
    return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>User Profile</Text>
        </Spacer>
        <Spacer />
        <Input lael="Email" value="email@email.com" disabled />
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

export default UserInfo
