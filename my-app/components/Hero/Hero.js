import React from "react";
import {View, Image, Text} from "react-native";
import {HeroStyle} from "./style";
import { AsyncStorage } from 'react-native';



export const Hero = async () => {
    try {
        await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.'
        );
    } catch (error) {
        // Error saving data
    }

    return (
        <View style={HeroStyle.container}>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
}

