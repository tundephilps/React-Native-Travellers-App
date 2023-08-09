import {
  ActivityIndicator,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Notfound from "../assets/NotFound.png";
//import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

//import { LinearGradient } from "expo-linear-gradient";
import Tabs from "../components/Tabs";
import { StatusBar } from "expo-status-bar";
import Card from "../components/Card";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("resturants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", position: "relative" }}
    >
      <StatusBar style={{ color: "white" }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 40,
        }}
      >
        <View>
          <Text
            colors={["rgb(255,27,0)", "rgba(251,75,2,1)"]}
            style={{
              color: "rgb(255,27,0)",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            Travel the world
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 400 }}>
            At your FingerTips
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: 400,
              //  fontFamily: "Orbitron",
            }}
          >
            11:23
          </Text>
        </View>
      </View>
      {/* Search */}
      <View
        style={{
          display: "flex",
          height: 30,
          //backgroundColor: "",
          justifyContent: "center",
          paddingHorizontal: 30,
          marginTop: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 40,
            paddingHorizontal: 4,
            backgroundColor: "gray",
            paddingVertical: 3,
            shadowColor: "orange",
            marginTop: 8,
            maxWidth: "100%",
            //  outline: "none",
          }}
        >
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: "orange !important",
                //outline: "none",
                //   boxShadow: "0 0px 4px rgba(0, 0, 0, 16)",
              },
              textInput: {
                height: 38,
                fontSize: 16,
                color: "orange",
                //outline: "none",
                backgroundColor: "transparent",
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

      {/* Category */}
      {isLoading ? (
        <View
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="rgb(255,27,0)" />
        </View>
      ) : (
        <ScrollView style={{ display: "flex", marginTop: 50 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 8,
              gap: 10,
            }}
          >
            <Tabs
              keys={"hotels"}
              title="Hotels"
              type={type}
              setType={setType}
            />

            <Tabs
              keys={"attractions"}
              title="Attractions"
              type={type}
              setType={setType}
            />
            <Tabs
              keys={"resturants"}
              title="Resturants"
              type={type}
              setType={setType}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 4,
                paddingBottom: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  display: "flex",
                  alignItems: "flex-start",

                  fontWeight: 600,
                }}
              >
                Top Destinations
              </Text>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <Text style={{ color: "white" }}>Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="green" />
              </TouchableOpacity>
            </View>

            <View>
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <Card
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://img.freepik.com/free-vector/suitcase-hat-seascape-scene_603843-3531.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 400,
                      height: 500,
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={Notfound}
                      style={{ width: 300, height: 400 }}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
