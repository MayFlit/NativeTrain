import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import hero from './store/hero'
import enemy from './store/enemy'
import {Game} from "./components/Game/Game";


export default function App() {
    // hero.initChar()
    // hero.initGold()
    // hero.initEquip()
    // hero.initExp()
    // hero.levelSystemFunk()
    // enemy.init()

    return (
      <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
            <Game/>
      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
      </ImageBackground>

);
}



