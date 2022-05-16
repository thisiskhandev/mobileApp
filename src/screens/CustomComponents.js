import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomComponents = () => {
  return <Text style={styles.textStyle}>This is working perfect!!!</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});

export default CustomComponents;
