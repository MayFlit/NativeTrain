import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import hero from './store/hero'
import MainMenuStack from './components/Navigation/Navigation';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
    const [items, setItems] = useState(false)
    // AsyncStorage.multiRemove(['heroCharacteristics', 'heroGold', 'heroEquipment', 'heroExp', 'heroLvl', 'heroWorld'])





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

    // const backgrounds = {world1: require('./assets/back/background1.png'),
    //     world2: require('./assets/back/background2.png'),
    //     world3: require('./assets/back/background3.png'),
    //     world4: require('./assets/back/background4.png')}
    //
    // const currentBackground = hero.world === 1 ? backgrounds.world1 : hero.world === 2 ? backgrounds.world2 : backgrounds.world3

    if (items) {
        return (
            <ImageBackground source={require('./assets/back/background2.png')} style={{width: '100%', height: '100%'}}>
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



