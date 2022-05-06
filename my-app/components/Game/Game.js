import React from "react";
import {SafeAreaView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import enemy from '../../store/enemy';
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
                {/* <Text>Ваша атака: {hero.characteristics.attack}</Text> */}
                <Text>Ваше здоровье: {hero.characteristics.health}</Text>
                <Text>Ваше золото: {hero.gold}</Text>
                <Text>Ваше оружие: {hero.equipment.sword.name}</Text>
                <Text>Ваш уровень: {hero.level}</Text>
                <Text>Ваш опыт: {hero.experience}</Text>
                <Text style={GameStyle.text} onPress={() => {enemy.hit(); enemy.die()}} >Атаковать</Text>
                <Hero />
                <Enemy/>
              

                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/shop.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

            </SafeAreaView>
        </ImageBackground>
    );
})


