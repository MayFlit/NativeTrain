import React from "react";
import {View, Text} from "react-native";
import {observer} from "mobx-react-lite";
import {MainMenuStyle} from "./style";



export const MainMenu = observer (({navigation}) => {
  const loadScene = () => {
    navigation.navigate('Game');
  }

    return (
        <View style={MainMenuStyle.container}>
            <Text style={MainMenuStyle.text} onPress={loadScene}>Играть</Text>
        </View>
    );
})
