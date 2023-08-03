import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import trave2 from "../assets/tour.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/theme";

const Intro = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />

      <View style={{ height: "100%" }}>
        <ImageBackground
          source={trave2}
          style={{ flex: 1, justifyContent: "flex-end", height: "65%" }}
          resizeMode="cover"
        ></ImageBackground>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: "70px",
            opacity: "",
            justifyContent: "flex-end",
            paddingHorizontal: "24px",
          }}
        ></LinearGradient>
      </View>
    </View>
  );
};

export default Intro;
