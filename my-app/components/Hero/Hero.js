import React from "react";
import {View, Image} from "react-native";
import {HeroStyle} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";


export const Hero = () => {
    const dispatch = useDispatch()
    const


    return (
        <View style={HeroStyle.container}>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
}

