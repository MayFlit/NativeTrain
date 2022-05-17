import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
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
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.sword.rare}`}} >
                        <Image style={ProfileStyle.equipIcon} source={hero.equipment.sword.img}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.armor.rare}`}} >
                            <Image style={ProfileStyle.equipIcon} source={hero.equipment.armor.img}/>
                        </View>
                    </View>
                </View>

                <View style={ProfileStyle.equipContainer}>
                    <View style={ProfileStyle.equipItem}>
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.gloves.rare}`,}} >
                            <Image style={ProfileStyle.equipIcon} source={hero.equipment.gloves.img}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.boots.rare}`}} >
                            <Image style={ProfileStyle.equipIcon} source={hero.equipment.boots.img}/>
                        </View>
                    </View>
                </View>

                <View style={ProfileStyle.equipContainer}>
                    <View style={ProfileStyle.equipItem}>
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.ring.rare}`}} >
                            <Image style={ProfileStyle.equipIcon} source={hero.equipment.ring.img}/>
                        </View>
                    </View>
                    <View style={ProfileStyle.equipItem}>
                        <View style={{display: 'flex', height: 70, width: 70, padding: 40, marginBottom: 10, borderWidth: 4, borderColor: 'orange',
                            justifyContent: 'center', alignItems: 'center', backgroundColor: `${hero.equipment.helmet.rare}`}} >
                            <Image style={ProfileStyle.equipIcon} source={hero.equipment.helmet.img}/>
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
                    <Text style={ProfileStyle.statText}>Здоровье: {hero.characteristics.maxHealth}</Text>
                </View>
            </View>
      </SafeAreaView>
  );
})
