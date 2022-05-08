import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'
import enemy2 from '../../store/enemy2'
import enemy3 from '../../store/enemy3'
import hero from "../../store/hero";

export const Enemy = observer (() => {
    const world = hero.world

    return (
        {0 === 1 ?
        <View style={EnemyStyle.container}>
            <Text style={EnemyStyle.text}>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={EnemyStyle.enemy}/>
        </View> : hero.world === 2 ?
        <View style={EnemyStyle.container}>
            <Text style={EnemyStyle.text}>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={EnemyStyle.enemy}/>
        </View> :
        <View style={EnemyStyle.container}>
            <Text style={EnemyStyle.text}>{enemy.characteristics.health}</Text>
            <Image source={enemy.image} style={EnemyStyle.enemy}/>
        </View>}
);
})
