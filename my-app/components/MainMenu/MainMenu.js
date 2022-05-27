import React from "react";
import {Text, ImageBackground, TouchableOpacity} from "react-native";
import {observer} from "mobx-react-lite";
import {MainMenuStyle} from "./style";



export const MainMenu = observer (({navigation}) => {
    const loadScene = () => {
        navigation.navigate('Game');
    }

    return (
        <ImageBackground style={MainMenuStyle.container} source={require('../../assets/backgrounds/background2.png')}>
            <TouchableOpacity onPress={loadScene}>
                <Text style={MainMenuStyle.text}>Играть</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
})