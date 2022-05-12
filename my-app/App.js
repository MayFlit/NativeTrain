import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import hero from './store/hero'
import MainMenuStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App() {
    const [items, setItems] = useState(false)


    hero.initGold()
    hero.initEquip()
    hero.initExp()
    hero.initWorld()
    hero.initLevel()
    hero.initChar()
    hero.healthRegen()



    async function getItems() {
        return await AsyncStorage.multiGet(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])
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
        return <AppLoading startAsync={getItems} onFinish={() => setItems(true)} onError={console.warn} />
    }


}



