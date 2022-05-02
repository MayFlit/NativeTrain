import React, {useEffect} from "react";
import {View, Image} from "react-native";
import {HeroStyle} from "./style";
import {useDispatch} from "react-redux";
import {initHeroAC} from "../../redux/actionCreators/heroAC";


export const Hero = () => {
const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initHeroAC())
    },[dispatch])





    return (
        <View style={HeroStyle.container}>
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
}

