import React from "react";
import {SafeAreaView, ImageBackground} from 'react-native';
import {Hero} from "../Hero/Hero";
import {Enemy} from "../Enemy/Enemy";

export const Game = () => {
    return (
        <ImageBackground source={require('../../assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <Hero/>
                <Enemy/>
            </SafeAreaView>
        </ImageBackground>

    );
}



