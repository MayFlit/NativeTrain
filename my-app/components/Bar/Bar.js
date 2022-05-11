import React from "react";
import {SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {BarStyle} from "./style";


export const Bar = observer (() => {
    return (
            <SafeAreaView style={BarStyle.box}>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/health.png')} style={BarStyle.icons}/> {hero.characteristics.health}</Text>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/money.png')} style={BarStyle.icons}/> {hero.gold}</Text>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/shield2.png')} style={BarStyle.icons} /> {hero.level}</Text>
                {!hero.bossIndicator && hero.bossTrigger(hero.world, hero.level) && <TouchableOpacity onPress={() => hero.bossFight()}>
                    <Image source={require('../../assets/btn.png')} />
                </TouchableOpacity>}
            </SafeAreaView>
    );
})
