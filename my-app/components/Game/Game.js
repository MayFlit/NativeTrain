import React from "react";
import {SafeAreaView, ImageBackground, Text} from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero'
import enemy from '../../store/enemy'
import {observer} from "mobx-react-lite";


export const Game = observer (() => {
    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <Text>Ваша атака: {hero.characteristics.attack}</Text>
                <Text>Ваше здоровье: {hero.characteristics.health}</Text>
                <Text style={{fontSize: 70}} onPress={() => {enemy.hit(hero.characteristics.attack); enemy.die()}} >Атаковать</Text>
                <Hero />
                <Enemy/>
            </SafeAreaView>
        </ImageBackground>
    );
})



