import React from "react";
import {SafeAreaView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import enemy from '../../store/enemy';
import {observer} from "mobx-react-lite";
import {BarStyle} from "./style";


export const Bar = observer (() => {
    return (
            <SafeAreaView style={BarStyle.box}>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/health.png')} style={BarStyle.icons}/> {hero.characteristics.health}</Text>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/money.png')} style={BarStyle.icons}/> {hero.gold}</Text>
                <Text style={BarStyle.container}><Image source={require('../../assets/bar/level.png')} style={BarStyle.icons}/> {hero.level}</Text>
                
                {/* <Text>Ваша атака: {hero.characteristics.attack}</Text>
                <Text>Ваше оружие: {hero.equipment.sword.name}</Text>
                <Text>Ваш опыт: {hero.experience}</Text> */}

            </SafeAreaView>
    );
})
