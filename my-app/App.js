import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import hero from './store/hero'
import MainMenuStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MainMenu} from "./components/MainMenu/MainMenu";
import {Game} from "./components/Game/Game";


export default function App() {
    // AsyncStorage.removeItem('heroCharacteristics')
    // AsyncStorage.removeItem('heroGold')
    // AsyncStorage.removeItem('heroEquipment')
    // AsyncStorage.removeItem('heroExp')
    // AsyncStorage.removeItem('heroLvl')
    // AsyncStorage.removeItem('heroWorld')

    // AsyncStorage.multiRemove(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])



    hero.initChar()
    hero.initGold()
    hero.initEquip()
    hero.initExp()
    hero.initWorld()
    hero.initLevel()
    
    // hero.healthRegen()



    async function lala() {
        const x = await AsyncStorage.getAllKeys()
        console.log(x)
    }

    lala()



    return (
      <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>

          {(hero.goldAsyncTrigger + hero.worldAsyncTrigger + hero.equipmentAsyncTrigger + hero.characteristicsAsyncTrigger
          + hero.expAsyncTrigger + hero.lvlAsyncTrigger) === 6 ? <Game /> :  <MainMenuStack />}


      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
      </ImageBackground>

);
}



