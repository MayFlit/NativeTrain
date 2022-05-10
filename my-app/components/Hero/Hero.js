import React from "react";
import {View, Image} from "react-native";
import {HeroStyle} from "./style";
import {observer} from "mobx-react-lite";


export const Hero = observer(() => {
    return (
        <View style={HeroStyle.container}>
            {/*<Image source={require('../../assets/6DuS.gif')} style={HeroStyle.hero}/>*/}
        </View>
    );
})
