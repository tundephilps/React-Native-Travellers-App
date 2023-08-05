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
          <View style={styles.write}>
            <Text style={styles.text}>Traveling the Globe Just got easier</Text>
            <Text style={styles.para}>
              Discover More than 1200 tourist Destinations at your finger
              tips...
            </Text>
          </View>
          <TouchableOpacity
            style={{
              margin: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Discover")}
          >
            <View
              style={{
                display: "flex",
                backgroundColor: "orange",
                width: 350,
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                padding: 10,
                borderRadius: 40,
              }}
            >
              <Text style={styles.started}>Get Started</Text>
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
    height: "70%",
  },
  gradient: {
    marginTop: "30%",
    height: "75%", // Adjust this value to control the gradient's height
  },
  write: {
    height: "40%",
    marginTop: "70%",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left", // Set this to 'left', 'right', 'center', or 'justify'
    justifyContent: "flex-end",
    //marginTop: 260, // Use a specific pixel value based on your desired positioning
    width: 250, // Make sure this value is appropriate for your design
    paddingLeft: 40,
    lineHeight: 50,
  },
  para: {
    fontSize: 18,
    color: "#777777",
    width: "80%",
    paddingLeft: 40,
    marginTop: 10,
    //fontFamily: "Roboto-Regular",
    lineHeight: 20,
  },
  started: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});

export default Intro2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   imageBackground: {
//     flex: 1,
//     width: "100%",
//     height: "65%",
//   },
//   gradient: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: "30%",
//     height: "70%", // Adjust this value to control the gradient's height
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 900,
//     color: "#fff",
//     // textAlign: "",
//     justifyContent: "flex-end",
//     marginTop: "65%",
//     width: 600,
//     paddingLeft: 40,
//     lineHeight: 45,
//   },
//   para: {
//     fontSize: 18,
//     color: "#777777",
//     width: "50%",
//     paddingLeft: 40,
//     marginTop: 10,
//     fontFamily: "Roboto-Regular",
//     lineHeight: 22,
//   },
// });
