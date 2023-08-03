import { StatusBar } from "expo-status-bar";
import React from "react";
import Intro2 from "./screen/Intro2";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "./screen/Discover";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {" "}
        <Stack.Navigator>
          {/* <Stack.Screen name="Intro" component={Intro2} /> */}

          <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
