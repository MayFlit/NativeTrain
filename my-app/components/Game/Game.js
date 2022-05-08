import React from "react";
import {SafeAreaView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {GameStyle} from "./style";
import { Shop } from "../Shop/Shop";
import { Bar } from "../Bar/Bar";


export const Game = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Shop');
  }

    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>

            <SafeAreaView style={{flex: 1}}>                
                <Bar />


                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/shop.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/profile.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

                <Hero />
                <Enemy/>
              
                <Text style={GameStyle.text} onPress={() => {enemy.hit(); enemy.die()}} >Атаковать</Text>
                

            </SafeAreaView>
        </ImageBackground>
    );
})


