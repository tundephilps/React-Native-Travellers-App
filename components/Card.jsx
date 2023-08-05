import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import travel from "../assets/travel.jpg";

import travel2 from "../assets/travel2.jpg";
import { BlurView } from "expo-blur";

const Card = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 300,
          width: "100%",
          marginRight: 20,
          borderRadius: 8,
        }}
      >
        <Image
          source={travel}
          resizeMode="cover"
          style={{
            height: 300,
            width: "100%",
            borderRadius: 12,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 20,
            left: 15,
            paddingHorizontal: 15,
            backgroundColor: "rgba(77,77,77, 0.8)",
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>LandScape</Text>
        </View>
        <BlurView
          tint="dark"
          intensity={100}
          // blurType="dark"
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            right: 10,
            height: 100,
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderRadius: 8,
          }}
        ></BlurView>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 300,
          width: "100%",
          marginTop: 10,
          marginRight: 20,
          borderRadius: 8,
        }}
      >
        <Image
          source={travel2}
          resizeMode="cover"
          style={{
            height: 300,
            width: "100%",
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
