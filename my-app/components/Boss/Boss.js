import React from "react";
import {View, Image, Text} from "react-native";
import {BossStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'
import enemy2 from '../../store/enemy2'
import enemy3 from '../../store/enemy3'
import hero from "../../store/hero";


export const Enemy = observer (() => {
    const currentBoss = hero.world === 1 ? enemy : hero.world === 2 ? enemy2 : enemy3
    return (
        <View style={BossStyle.container}>
            <Text style={BossStyle.text}>{currentBoss.characteristics.health}</Text>
            <Image source={currentBoss.image} style={BossStyle.enemy}/>
        </View>
    );
})
