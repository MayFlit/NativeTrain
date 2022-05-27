import React from "react";
import {View, Image} from "react-native";
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
    return (
        <View style={EnemyStyle.container}>
            {hero.world === 1 ? <Image source={enemy.image} style={EnemyStyle.enemy}/> :
            hero.world === 2 ? <Image source={enemy2.image} style={EnemyStyle.enemy}/> :
            <Image source={enemy3.image} style={EnemyStyle.enemy}/>}

            {animations.doubleHitIndicator && <DoubleHit/>}
            {animations.hitIndicator && <Hit/>}
            {animations.healIndicator && <Heal/>}
            {animations.poisonIndicator && <Poison/>}
            {animations.lightningOrbIndicator && <LightningOrb/>}
        </View>
);
})
