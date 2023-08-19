import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function TouchableRow({ props }) {
  const radius = 15;
  const myIcon = <Icon name="chevron-right" size={30} color="white" />;
  const { text, bgColor } = props;

  const rowStyle = {
    flexDirection: "row",
    height: 70,
    width: "70%",
    backgroundColor: bgColor,
    //alignContent: "center",
    alignSelf: "center",
    paddingLeft: 25,
    borderRadius: radius,
  };

  const textStyle = {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  };

  const endIcon = {
    width: 40,
    //backgroundColor: "orange",
    height: "100%",
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    padding: 5,
  };
  const endIconContainer = {
    flex: 1,
    borderRadius: radius,
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("touched");
      }}
    >
      <View style={rowStyle}>
        <Text style={textStyle}>{text}</Text>
        <View style={endIconContainer}>
          <View style={endIcon}>{myIcon}</View>
        </View>
      </View>
    </TouchableOpacity>
    // todo need to remove cosole.log
  );
}
