import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import {observer} from "mobx-react-lite";
import {ProfileStyle} from "./style";
import hero from '../../store/hero';

export const Profile = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={ProfileStyle.bg}>

            <TouchableOpacity onPress={loadScene}>
             <Image 
               style={ProfileStyle.exit}
               source={require('../../assets/shop/exit.png')}
               />
            </TouchableOpacity>


            <View style={ProfileStyle.container}>
                <View style={ProfileStyle.heroBg}>
                    <Image source={require('../../assets/mage.gif')} style={ProfileStyle.hero}/>
                </View>

                <View style={ProfileStyle.equipContainer}>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                        <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                            <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                </View>

                <View style={ProfileStyle.equipContainer}>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                            <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                            <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                </View>

                <View style={ProfileStyle.equipContainer}>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                            <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={ProfileStyle.iconContainer} >
                            <Image style={ProfileStyle.equipIcon} source={require('../../assets/shop/gun.png')}/>
                        </View>
                    </View>
                </View>

            </View>


            <View style={ProfileStyle.statContainer}>
                <View style={ProfileStyle.statItem}>
                    <Image style={ProfileStyle.statIcon}/>
                    <Text style={ProfileStyle.statText}>Атака: {hero.characteristics.attack + hero.equipment.sword.attack}</Text>
                </View>

                <View style={ProfileStyle.statItem}>
                    <Image style={ProfileStyle.statIcon}/>
                    <Text style={ProfileStyle.statText}>Здоровье: {hero.characteristics.health}</Text>
                </View>
            </View>
      </SafeAreaView>
  );
})
