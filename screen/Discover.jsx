import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", position: "relative" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "13px",
        }}
      >
        <View>
          <Text
            style={{ color: "orange", fontSize: "40px", fontWeight: "800" }}
          >
            Travel the world
          </Text>
          <Text style={{ color: "white", fontSize: "36px", fontWeight: "400" }}>
            At your FingerTips
          </Text>
        </View>
        <View
          style={{
            color: "white",
            fontSize: "36px",
            fontWeight: "400",
            fontFamily: "Orbitron !important",
          }}
        >
          11:23
        </View>
      </View>
      <View
        style={{
          display: "flex",
          height: "30px",
          backgroundColor: "",
          justifyContent: "center",
          paddingHorizontal: "8%",
          marginTop: "15px",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "40px",
            paddingHorizontal: "4px",
            backgroundColor: "gray",
            paddingVertical: "3px",
            shadowColor: "orange",
            marginTop: "8px",
            maxWidth: "100%",
          }}
        >
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: "orange !important",

                outline: "none",
                //   boxShadow: "0 0px 4px rgba(0, 0, 0, 16)",
              },
              textInput: {
                height: 38,
                backgroundColor: "",
                fontSize: 16,
                color: "orange",
                outline: "none",
              },
            }}
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "AIzaSyA01Ov1GV5GxBuXWsYgECT8qXqqZVry63I",
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
