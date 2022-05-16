import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.titles}>{props.title}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "80%",
  },
  square: {
    backgroundColor: "#55BCF666",
    opacity: 0.5,
    width: 24,
    height: 24,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  titles: {
    maxWidth: "80%",
    fontSize: 16,
    marginLeft: 10,
  },
  circular: {
    backgroundColor: "#fff",
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#55BCF6",
  },
});

export default Task;
