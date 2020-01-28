import React from "react"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons"
import Colors from "../constants/Color"
import AntDesign from "@expo/vector-icons/AntDesign"

const SIZE = 29
export default class TabBarIcon extends React.Component {
  render() {
    const {
      setName = "default",
      size = SIZE,
      iconColor,
      style = {}
    } = this.props
    let color = ""
    if (iconColor) {
      color = iconColor
    } else {
      color = this.props.focused
        ? Colors.tabIconSelected
        : Colors.tabIconDefault
    }
    switch (setName) {
      case "ant": {
        return <AntDesign name={this.props.name} size={size} color={color} />
      }
      case "material": {
        return (
          <MaterialCommunityIcons
            name={this.props.name}
            size={size}
            color={color}
          />
        )
      }
      case "fontawesome": {
        return <FontAwesome name={this.props.name} size={size} color={color} />
      }
      default: {
        return <Ionicons name={this.props.name} size={size} color={color} />
      }
    }
  }
}
