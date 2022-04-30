import React from "react";
import {View, Image} from "react-native";
import {HeroStyle} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Hero = () => {



    async function lala() {
        // await AsyncStorage.setItem(
        //     'lalailaKey',
        //     'lalailaValue'
        // );
        const lala = await AsyncStorage.getItem('lalailaKey')
        console.log(lala)
    }
    lala()



    return (
        <View style={HeroStyle.container}>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
}

