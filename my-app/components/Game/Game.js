import React from "react";
import {SafeAreaView, ImageBackground, Image, TouchableOpacity, View} from 'react-native';
import {Enemy} from "../Enemy/Enemy";
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {GameStyle} from "./style";
import { Shop } from "../Shop/Shop";
import { Bar } from "../Bar/Bar";
import { Skills } from "../Skills/Skills";
import {Boss} from "../Boss/Boss";


export const Game = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.navigate('Shop');
  }
  const loadScene1 = () => {
    navigation.navigate('Profile');
  }

    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>

            <SafeAreaView style={{flex: 1}}>                
                <Bar />


                <TouchableOpacity onPress={loadScene}>
                <Image source={require('../../assets/shop.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene1}>
                <Image source={require('../../assets/profile.png')} style={GameStyle.shop}/>
                </TouchableOpacity>

                {!hero.bossIndicator && <Enemy/>}
                {hero.bossIndicator && <Boss/>}


                {hero.doubleDamageIndicator ?
                <TouchableOpacity onPress={() => hero.doubleHit()}>
                    <View style={GameStyle.heroContainer}>
                        <Image source={require('../../assets/mage.gif')} style={GameStyle.hero}/>
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => hero.hit()}>
                    <View style={GameStyle.heroContainer}>
                        <Image source={require('../../assets/mage.gif')} style={GameStyle.hero}/>
                    </View>
                </TouchableOpacity>}

                  <Skills />
              
            </SafeAreaView>
        </ImageBackground>
    );
})


