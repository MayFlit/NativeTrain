import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import hero from './store/hero'
import GameStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MainMenu} from "./components/MainMenu/MainMenu";


export default function App() {
    // AsyncStorage.removeItem('heroCharacteristics')
    // AsyncStorage.removeItem('heroGold')
    // AsyncStorage.removeItem('heroEquipment')
    // AsyncStorage.removeItem('heroExp')
    // AsyncStorage.removeItem('heroLvl')
    // AsyncStorage.removeItem('heroWorld')



    hero.initChar()
    hero.initGold()
    hero.initEquip()
    hero.initExp()
    hero.initWorld()
    hero.initLevel()
    hero.healthRegen()



    return (
      <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
            <MainMenu />
      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
      </ImageBackground>

);
}



