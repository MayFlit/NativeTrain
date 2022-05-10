import React from "react";
import {View, Image} from "react-native";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";
import {PoisonStyle} from "./style";



export const Poison = observer (() => {
    return (
        <View style={PoisonStyle.poison}>
            <Image source={animations.poisonImage}/>
        </View>
    );
})
