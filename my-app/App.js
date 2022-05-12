import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import hero from './store/hero'
import MainMenuStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MainMenu} from "./components/MainMenu/MainMenu";
import {Game} from "./components/Game/Game";


export default function App() {
    const [items, setItems] = useState(false)
    // AsyncStorage.removeItem('heroCharacteristics')
    // AsyncStorage.removeItem('heroGold')
    // AsyncStorage.removeItem('heroEquipment')
    // AsyncStorage.removeItem('heroExp')
    // AsyncStorage.removeItem('heroLvl')
    // AsyncStorage.removeItem('heroWorld')
    // AsyncStorage.multiRemove(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])



    hero.initGold()
    hero.initEquip()
    hero.initExp()
    hero.initWorld()
    hero.initLevel()
    hero.initChar()
    hero.healthRegen()



    async function lala() {
        // return await AsyncStorage.getAllKeys()
        return await AsyncStorage.multiGet(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])
        // const y = await AsyncStorage.getItem('heroCharacteristics')
        // const z = await AsyncStorage.getItem('heroGold')
        // console.log(y)
        // console.log(x)
        // console.log(z)
    }


    if (items) {
        return (
            <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={{flex: 1}}>
                    <MainMenuStack/>
                    <StatusBar style="auto" hidden={true}/>
                </SafeAreaView>
            </ImageBackground>

        );
    } else {
        return <AppLoading startAsync={lala} onFinish={() => setItems(true)} onError={console.warn} />
    }


}



