import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { dismissAlert } from "../store/generalAlert/action"
import { Overlay, Button } from "react-native-elements"
import TabBarIcon from "./TabBarIcon"
import Color from "../constants/Color"

class GeneralAlert extends React.Component {
  onDismissAlert = () => {
    this.props.dismissAlert()
  }
  render() {
    return (
      <>
        <Overlay
          overlayBackgroundColor={Color.black5}
          isVisible={this.props.show}
          onBackdropPress={this.onDismissAlert}
          borderRadius={12}
          width="auto"
          height="auto"
        >
          <View style={{ width: 280, minHeight: 120 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity onPress={this.onDismissAlert}>
                <TabBarIcon
                  name="close"
                  setName="ant"
                  size={20}
                  iconColor={Color.bluebtn}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 17, color: Color.bluebtn }}>Prompt</Text>
              <Text
                style={{
                  textAlign: "justify",
                  fontSize: 15,
                  color: Color.white0,
                  marginVertical: 21,
                  paddingHorizontal: 9
                }}
              >
                {this.props.message}
              </Text>
            </View>
            <Button
              title="Okay"
              onPress={this.onDismissAlert}
              titleStyle={{ color: Color.white0, fontSize: 15 }}
              containerStyle={{ marginBottom: 15 }}
              buttonStyle={{
                paddingHorizontal: 24,
                alignSelf: "center",
                backgroundColor: Color.bluebtn
              }}
            ></Button>
          </View>
        </Overlay>
        {this.props.children}
      </>
    )
  }
}

const mapStateToProps = state => ({
  message: state.generalAlert.alertMsg,
  show: state.generalAlert.show
})

const mapDispatchToProps = {
  dismissAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralAlert)
