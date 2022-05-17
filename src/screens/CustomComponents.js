import React from "react";
import { View, Image } from "react-native";

const CustomComponents = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30,
        paddingTop: 80,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          justifyContent: "center",
          flexDirection: "row",
        }}
        // source={require("../../assets/icon.png")}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/609/609063.png",
        }}
      />
    </View>
  );
};

export default CustomComponents;
