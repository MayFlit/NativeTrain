import React from "react";
import {View, Image, Text} from "react-native";
import {BossStyle} from "./style";
import {observer} from "mobx-react-lite";
import hero from "../../store/hero";
import boss from "../../store/boss";
import boss2 from "../../store/boss2";
import boss3 from "../../store/boss3";
import animations from "../../store/animations";
import {DoubleHit} from "../DoubleHit/DoubleHit";
import {Hit} from "../Hit/Hit";
import {Heal} from "../Heal/Heal";
import {Poison} from "../Poison/Poison";
import {LightningOrb} from "../LightningOrb/LightningOrb";


export const Boss = observer (() => {
    const currentBoss = hero.world === 1 ? boss : hero.world === 2 ? boss2 : boss3
    return (
        <View style={BossStyle.container}>
            <Image source={currentBoss.image} style={BossStyle.enemy}/>
            {animations.doubleHitIndicator && <DoubleHit/>}
            {animations.hitIndicator && <Hit/>}
            {animations.healIndicator && <Heal/>}
            {animations.poisonIndicator && <Poison/>}
            {animations.lightningOrbIndicator && <LightningOrb/>}
        </View>
    );
})
