import React from "react";
import {View, Image} from "react-native";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";
import {HealStyle} from "./style";



export const Heal = observer (() => {
    return (
        <View style={HealStyle.heal}>
            <Image source={animations.healImage}/>
        </View>
    );
})
