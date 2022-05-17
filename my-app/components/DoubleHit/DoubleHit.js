import React from "react";
import {View, Image} from "react-native";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";
import {DoubleHitStyle} from "./style";



export const DoubleHit = observer (() => {
    return (
        <View style={DoubleHitStyle.doubleHit}>
            <Image source={animations.hitImage} style={DoubleHitStyle.doubleHitImg1}/>
            <Image source={animations.hitImage} style={DoubleHitStyle.doubleHitImg2}/>
        </View>
    );
})
