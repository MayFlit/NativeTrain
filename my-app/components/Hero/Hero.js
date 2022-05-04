import React, {useEffect} from "react";
import {View, Image, Text} from "react-native";
import {HeroStyle} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {initHeroAC} from "../../redux/actionCreators/heroAC";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Hero = () => {
    const dispatch = useDispatch()
    const { characteristics } = useSelector(state => state.hero)


    useEffect( () => {
        AsyncStorage.getItem('heroAttack')
            .then(async (heroAttack) => {
                if (!heroAttack) {
                    const attack = {attack: 0}
                   await AsyncStorage.setItem('heroAttack', JSON.stringify(attack))
                    dispatch(initHeroAC(attack))
                }
                dispatch(initHeroAC(JSON.parse(heroAttack)))
            })
    },[dispatch])


    return (
        <View style={HeroStyle.container}>
            <Text style={{color: 'red', fontSize: 40}}>attack {characteristics.attack}</Text>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
}
