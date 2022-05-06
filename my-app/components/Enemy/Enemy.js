import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'

export const Enemy = observer (() => {
    return (
        <View style={EnemyStyle.container}>
            <Text>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={EnemyStyle.enemy}/>
        </View>
    );
})
