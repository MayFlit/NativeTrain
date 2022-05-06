import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'

export const Enemy = observer (() => {
    const img = '../../assets/' + enemy.image

    return (
        <View style={EnemyStyle.container}>
            <Text>{enemy.characteristics.health}</Text>
            <Image source={require('../../assets/enemy-1.png')} style={EnemyStyle.enemy}/>
        </View>
    );
})
