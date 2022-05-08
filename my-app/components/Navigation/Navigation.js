import React from "react";
import { Game } from "../Game/Game";
import { Shop } from "../Shop/Shop";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();


export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
      name="Game"
      component={Game}
      options={{title: ''}}
      />
      <Stack.Screen
      name="Shop"
      component={Shop}
      options={{title: 'Магазин'}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
