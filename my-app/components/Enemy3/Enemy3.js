import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy3'

export const Enemy3 = observer (() => {
    return (
        <View style={EnemyStyle.container}>
            <Text style={EnemyStyle.text}>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={EnemyStyle.enemy}/>
        </View>
    );
})
