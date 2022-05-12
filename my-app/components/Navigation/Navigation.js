import React from "react";
import { Game } from "../Game/Game";
import { Shop } from "../Shop/Shop";
import { Profile } from "../Profile/Profile";
import {MainMenu} from "../MainMenu/MainMenu";

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
      <Stack.Screen
      name="Profile"
      component={Profile}
      options={{title: 'Профиль'}}
      />
      <Stack.Screen
      name="MainMenu"
      component={MainMenu}
      options={{title: ''}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
