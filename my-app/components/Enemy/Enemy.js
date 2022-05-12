import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {observer} from "mobx-react-lite";
import enemy from '../../store/enemy'
import enemy2 from '../../store/enemy2'
import enemy3 from '../../store/enemy3'
import hero from "../../store/hero";
import animations from "../../store/animations";
import {DoubleHit} from "../DoubleHit/DoubleHit";
import {Hit} from "../Hit/Hit";
import {Heal} from "../Heal/Heal";
import {Poison} from "../Poison/Poison";
import {LightningOrb} from "../LightningOrb/LightningOrb";


export const Enemy = observer (() => {
    const currentEnemy = hero.world === 1 ? enemy : hero.world === 2 ? enemy2 : enemy3
    return (
        <View style={EnemyStyle.container}>
            {/*<Text style={EnemyStyle.hitpoints}>{currentEnemy.characteristics.health}</Text>*/}
            <Image source={currentEnemy.image} style={EnemyStyle.enemy}/>
            {animations.doubleHitIndicator && <DoubleHit/>}
            {animations.hitIndicator && <Hit/>}
            {animations.healIndicator && <Heal/>}
            {animations.poisonIndicator && <Poison/>}
            {animations.lightningOrbIndicator && <LightningOrb/>}
        </View>
);
})
