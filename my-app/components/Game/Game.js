import React from "react";
import {SafeAreaView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {GameStyle} from "./style";
import { Shop } from "../Shop/Shop";


export const Game = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Shop');
  }

    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <Text>Ваше здоровье: {hero.characteristics.health}</Text>
                <Text>Ваше золото: {hero.gold}</Text>
                <Text>Ваш игровой мир: {hero.world}</Text>
                <Text>Ваш уровень: {hero.level}</Text>
                <Text>Ваш опыт: {hero.experience}</Text>
                {hero.doubleDamageIndicator ?
                    <Text style={GameStyle.text} onPress={() => {hero.doubleHit()}} >Атаковать x2</Text> :
                    <Text style={GameStyle.text} onPress={() => {hero.hit()}} >Атаковать</Text>}
                <Text style={GameStyle.text2} onPress={() => {hero.doubleDamage()}} >Повысить</Text>
                <Hero />
                <Enemy/>


                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/shop.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

            </SafeAreaView>
        </ImageBackground>
    );
})


