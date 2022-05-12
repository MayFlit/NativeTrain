import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import hero from './store/hero'
import GameStack from './components/Navigation/Navigation';


export default function App() {
    hero.initChar()
    hero.initGold()
    hero.initEquip()
    hero.initExp()
    // hero.initWorld()
    hero.initLevel()
    hero.healthRegen()




    return (
      <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
            <GameStack />
      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
      </ImageBackground>

);
}



