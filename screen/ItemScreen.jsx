import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import travel2 from "../assets/travel2.jpg";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  //console.log(data);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ position: "relative" }}>
        <Animated.Image
          source={{
            uri: data?.photo?.images?.large?.url
              ? data?.photo?.images?.large?.url
              : "https://img.freepik.com/free-vector/suitcase-hat-seascape-scene_603843-3531.jpg",
          }}
          resizeMode="cover"
          style={{
            height: 300,
            width: "100%",
            position: "relative",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingBottom: 13,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 35,
              width: 35,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "black",
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="green" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 35,
              width: 35,
            }}
          >
            <Ionicons name="bookmark-outline" size={30} color="green" />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            heigth: 15,
          }}
        >
          <BlurView
            style={{ flex: 1, borderRadius: 10 }}
            tint="dark"
            intensity={100}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  height: 50,
                  marginLeft: 20,
                  alignItems: "center",
                }}
              ></View>
              <View
                style={{ flex: 1, marginHorizontal: 15, paddingVertical: 8 }}
              >
                <Text style={{ color: "white", fontSize: 22 }}>
                  {data?.price_level}
                </Text>
                <Text style={{ color: "white", fontSize: 17 }}>
                  {data?.open_now_text}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "green",
                }}
                onPress={{}}
              >
                <MaterialIcons name="favorite-border" size={24} color="green" />
              </TouchableOpacity>
            </View>
          </BlurView>
        </Animated.View>
      </View>
      <ScrollView>
        <View style={{ marginTop: 8 }}>
          <Text
            colors={["rgb(255,27,0)", "rgba(251,75,2,1)"]}
            style={{
              fontSize: 25,
              fontWeight: "800",
              color: "rgba(251,75,2,1)",
            }}
          >
            {data?.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 2,
            }}
          >
            <FontAwesome name="map-marker" size={25} color="green" />
            <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <View
              style={{
                width: 43,
                height: 43,
                borderRadius: 12,
                backgroundColor: "rgba(251,75,2,1)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="star" size={25} color="green" />
            </View>
            <View>
              <Text style={{ color: "white" }}>{data?.rating}</Text>
              <Text style={{ color: "white" }}>Ratings</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <View
              style={{
                width: 43,
                height: 43,
                borderRadius: 12,
                backgroundColor: "rgba(251,75,2,1)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Foundation name="dollar" size={25} color="green" />
            </View>
            <View>
              <Text style={{ color: "white" }}>{data?.price_level}</Text>
              <Text style={{ color: "white" }}>Cost</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <View
              style={{
                width: 43,
                height: 43,
                borderRadius: 12,
                backgroundColor: "rgba(251,75,2,1)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fontisto name="direction-sign" size={25} color="green" />
            </View>
            <View>
              <Text style={{ color: "white" }}>{data?.bearing}</Text>
              <Text style={{ color: "white" }}>Direction</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: "200",
            color: "grey",
          }}
        >
          {data?.description}
        </Text>

        {data?.cuisine && (
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                  borderRadius: 6,
                  backgroundColor: "gray",
                }}
              >
                <Text style={{ color: "white" }}>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View
          style={{
            gap: 8,
            marginTop: 8,
            backgroundColor: "gray",
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 8,
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
            <Feather name="phone" size={24} color="green" />
            <Text style={{ fontSize: 13 }}>{data?.phone}</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
            <Entypo name="mail" size={24} color="green" />
            <Text style={{ fontSize: 13 }}>{data?.email}</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 8 }}>
            <FontAwesome name="map-marker" size={24} color="green" />
            <Text style={{ fontSize: 13 }}>{data?.address}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              marginTop: 15,
              paddingVertical: 10,
              paddingVertical: 10,
              backgroundColor: "rgba(251,75,2,1)",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 12,
              width: 380,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>
              BOOK NOW
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
