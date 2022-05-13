import React from "react";
import {View, Text, ImageBackground} from "react-native";
import {observer} from "mobx-react-lite";
import {MainMenuStyle} from "./style";



export const MainMenu = observer (({navigation}) => {
  const loadScene = () => {
    navigation.navigate('Game');
  }

    return (
        <ImageBackground style={MainMenuStyle.container} source={require('../../assets/back/background2.png')}>
            <Text style={MainMenuStyle.text} onPress={loadScene}>Играть</Text>
        </ImageBackground>
    );
})
