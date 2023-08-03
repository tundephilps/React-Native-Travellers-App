import React, { useLayoutEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Intro2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/tour.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 99)"]}
          style={styles.gradient}
        >
          {/* Your content here */}
          <Text style={styles.text}>Traveling the Globe Just got easier</Text>
          <Text style={styles.para}>
            Discover More than 1200 tourist Destinations at your finger tips...
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <View
              style={{
                flex: 1,
                backgroundColor: "orange",
                width: "88%",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                padding: "20px",
                borderRadius: "40px",
                marginTop: "20px",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  font: "10px",
                }}
              >
                Get Started{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "65%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "30%",
    height: "70%", // Adjust this value to control the gradient's height
  },
  text: {
    fontSize: "40px",
    fontWeight: "900",
    color: "#fff",
    textAlign: "",
    justifyContent: "flex-end",
    marginTop: "65%",
    width: "60%",
    paddingLeft: "40px",
    lineHeight: "45px",
  },
  para: {
    fontSize: "18px",
    color: "#777777",
    width: "50%",
    paddingLeft: "40px",
    marginTop: "10px",
    fontFamily: "Roboto-Regular",
    lineHeight: 22,
  },
});

export default Intro2;
