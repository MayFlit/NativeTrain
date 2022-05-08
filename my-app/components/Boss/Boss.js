import React from "react";
import {View, Image, Text} from "react-native";
import {BossStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'

export const Boss = observer (() => {
    return (
        <View style={BossStyle.container}>
            <Text style={BossStyle.text}>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={BossStyle.enemy}/>
        </View>
    );
})
