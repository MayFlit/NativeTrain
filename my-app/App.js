import { StatusBar } from 'expo-status-bar';
import React from "react";
import {store} from './redux/store'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {SafeAreaView, ImageBackground} from 'react-native';
import {Hero} from "./components/Hero/Hero";
import {Enemy} from "./components/Enemy/Enemy";
import hero from './store/hero'


export default function App() {
    // hero.init()

    return (
      <Provider store={store}>
      <ImageBackground source={require('./assets/background_main.jpg')} style={{width: '100%', height: '100%'}}>

      <SafeAreaView style={{flex: 1}}>
            <Hero/>
          <Enemy/>
      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
      </ImageBackground>
    </Provider>

);
}



