import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import {observer} from "mobx-react-lite";
import {ProfileStyle} from "./style";
import hero from '../../store/hero';
import { Bar } from "../Bar/Bar";

export const Profile = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={ProfileStyle.bg}>

          <View >

            <TouchableOpacity onPress={loadScene}>
             <Image 
               style={ProfileStyle.exit}
               source={require('../../assets/shop/exit.png')}
               />
            </TouchableOpacity>

            {/* Характеристики (хп бар) */}
            <View>
            <Bar />
            </View>

            {/* Характеристики*/}
            <View> 
               <Text>Ваша атака: {hero.characteristics.attack}</Text>
                <Text>Ваше оружие: {hero.equipment.sword.name}</Text>
            </View>

            <View> 
                <Text>Ваша броня: {hero.equipment.armor.name}</Text>
                <Text>Ваш опыт: {hero.experience}</Text>
            </View>
                   
                   {/* Только картинка героя */}
              <View style={ProfileStyle.heroBg}>
              <Image source={require('../../assets/hero.png')}
              style={ProfileStyle.hero}/>
              </View>
       </View>

          {/* Навыки, которые внизу */}
          <View>

          </View>

      </SafeAreaView>
  );
})
