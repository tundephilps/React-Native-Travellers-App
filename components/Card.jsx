import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import travel from "../assets/travel.jpg";

import travel2 from "../assets/travel2.jpg";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Card = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ gap: 8 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemScreen", { param: data })}
        style={{
          height: 300,
          width: "100%",
          borderRadius: 8,
          gap: 8,
        }}
      >
        <Image
          source={{ uri: imageSrc }}
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
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  width: "70%",
                  color: "#fff",
                  fontSize: 22,
                }}
              >
                {title?.length > 20 ? `${title.slice(0, 14)}..` : title}
              </Text>
              <MaterialIcons name="location-pin" size={24} color="green" />
            </View>
            <Text style={{ fontSize: 12, color: "#F5F6FB" }}>{location}</Text>
          </View>
        </BlurView>
      </TouchableOpacity>
      {/*    
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
          source={{uri : imageSrc}}
          resizeMode="cover"
          style={{
            height: 300,
            width: "100%",
            borderRadius: 12,
          }}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
