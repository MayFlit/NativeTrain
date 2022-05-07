import React from "react";
import {SafeAreaView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import {Enemy2} from "../Enemy2/Enemy2";
import {Enemy3} from "../Enemy3/Enemy3";
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {GameStyle} from "./style";
import { Shop } from "../Shop/Shop";


export const Game = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Shop');
  }

    console.log(hero.world)

    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                {/* <Text>Ваша атака: {hero.characteristics.attack}</Text> */}
                <Text>Ваше здоровье: {hero.characteristics.health}</Text>
                <Text>Ваше золото: {hero.gold}</Text>
                <Text>Ваш игровой мир: {hero.world}</Text>
                {/*<Text>Ваше оружие: {hero.equipment.sword.name}</Text>*/}
                <Text>Ваш уровень: {hero.level}</Text>
                <Text>Ваш опыт: {hero.experience}</Text>
                <Text style={GameStyle.text} onPress={() => {hero.hit()}} >Атаковать</Text>
                <Text style={GameStyle.text2} onPress={() => {hero.worldUp()}} >Повысить</Text>
                <Hero />

                {hero.world === 1 ? <Enemy/> : hero.world === 2 ? <Enemy2/> : <Enemy3 />}
                {/*<Enemy />*/}
              

                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/shop.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

            </SafeAreaView>
        </ImageBackground>
    );
})


