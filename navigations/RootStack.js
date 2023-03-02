import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
    </Stack.Navigator>
  );
}