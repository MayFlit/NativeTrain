import React from "react";
import {View, Image, Text} from "react-native";
import {HeroStyle} from "./style";
import {observer} from "mobx-react-lite";
import hero from "../../store/hero";


export const Hero = observer(() => {
    return (
        <View style={HeroStyle.container}>
            {/*<Text onPress={hero.increment}  style={{color: 'red', fontSize: 40}}>attack {hero.characteristics.attack}</Text>*/}
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
})
