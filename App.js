import React, { useState, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Task from "./components/Task";
// import {
//   Roboto_100Thin,
//   Roboto_100Thin_Italic,
//   Roboto_300Light,
//   Roboto_300Light_Italic,
//   Roboto_400Regular,
//   Roboto_400Regular_Italic,
//   Roboto_500Medium,
//   Roboto_500Medium_Italic,
//   Roboto_700Bold,
//   Roboto_700Bold_Italic,
//   Roboto_900Black,
//   Roboto_900Black_Italic,
// } from "@expo-google-fonts/roboto";

const App = () => {
  const { task, setTask } = useState("");

  const handleAddTask = () => {
    console.log(task);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.heading}>Today's Task</Text>
        <View>
          {/* This is where task will go */}
          <Task title="Task 1 😁" />
          <Task title="Task 2" />
          <Task title="Task 3" />
        </View>
      </View>
      {/* Write Tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={"Testing"}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addItem}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    overflow: "hidden",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Verdana",
    marginBottom: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    width: 60,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    // marginHorizontal: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  addItem: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 26,
  },
});

export default App;
