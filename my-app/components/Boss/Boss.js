import React from "react";
import {View, Image, Text} from "react-native";
import {BossStyle} from "./style";
import {observer} from "mobx-react-lite";
import hero from "../../store/hero";
import boss from "../../store/boss";
import boss2 from "../../store/boss2";
import boss3 from "../../store/boss3";


export const Boss = observer (() => {
    const currentBoss = hero.world === 1 ? boss : hero.world === 2 ? boss2 : boss3
    return (
        <View style={BossStyle.container}>
            <Text style={BossStyle.text}>{currentBoss.characteristics.health}</Text>
            <Image source={currentBoss.image} style={BossStyle.enemy}/>
        </View>
    );
})
