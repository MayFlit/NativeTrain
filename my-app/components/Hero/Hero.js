import React from "react";
import {View, Image, Text} from "react-native";
import {HeroStyle} from "./style";
import {observer} from "mobx-react-lite";


export const Hero = observer(() => {
    return (
        <View style={HeroStyle.container}>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
})
