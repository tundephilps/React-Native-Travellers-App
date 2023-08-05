import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Tabs = ({ title, type, setType }) => {
  const [isPressed, setIsPressed] = useState(false);
  // const handlePress = () => {
  //   setType(title.toLowerCase());
  // // };

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const buttonStyle = isPressed ? styles.buttonPressed : styles.button;

  return (
    <>
      <TouchableOpacity>
        <View style={styles.btnContainer}>
          <LinearGradient
            colors={["rgb(255,27,0)", "rgba(251,75,2,1)"]}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>{title}</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  btnContainer: {
    width: 100,
    height: 40,
    overflow: "hidden",
    borderRadius: 8,
  },
  btnGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 15,
  },
});
