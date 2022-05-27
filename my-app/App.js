import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import hero from './store/hero'
import MainMenuStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';



export default function App() {
    // AsyncStorage.multiRemove(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])

    hero.initGold()
    hero.initEquip()
    hero.initExp()
    hero.initWorld()
    hero.initLevel()
    hero.initChar()
    hero.healthRegen()


    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await AsyncStorage.multiGet(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);


    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <ImageBackground onLayout={onLayoutRootView} source={require('./assets/backgrounds/background2.png')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <MainMenuStack/>
                <StatusBar style="auto" hidden={true}/>
            </SafeAreaView>
        </ImageBackground>
    )

}
