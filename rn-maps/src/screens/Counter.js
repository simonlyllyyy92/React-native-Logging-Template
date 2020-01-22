import React from "react"
import { View, StyleSheet, AsyncStorage } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { storeNumber } from "../store/appUser/action"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/FontAwesome"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }

  handleStore = () => {
    this.props.storeNumber(this.state.number)
  }

  handleMinusOne = () => {
    this.setState(prevState => ({
      number: prevState.number - 1
    }))
  }

  handlePlusOne = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>Counter</Text>
        </Spacer>
        <Spacer />
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {`Your previous number stored is ${this.props.userNumber}`}
        </Text>
        <Spacer />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingLeft: 80,
            paddingRight: 80
          }}
        >
          <Text h3 onPress={this.handleMinusOne}>
            -
          </Text>
          <Text h3>{this.state.number}</Text>
          <Text h3 onPress={this.handlePlusOne}>
            +
          </Text>
        </View>
        <Spacer />
        <Spacer>
          <Button title="Clear" onPress={this.handleReset} />
        </Spacer>
        <Spacer>
          <Button title="Store to Redux" onPress={this.handleStore} />
        </Spacer>
      </View>
    )
  }
}

Counter.navigationOptions = () => {
  return {
    header: null,
    tabBarLabel: "Counter",
    tabBarIcon: ({ tintColor }) => <Icon name="calculator" size={15} />
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
  storeNumber
}

const mapStateToProps = state => {
  return {
    userNumber: state.userInfo.storedNum.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
