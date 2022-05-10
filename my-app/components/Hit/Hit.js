import React from "react";
import {View, Image} from "react-native";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";
import {HitStyle} from "./style";



export const Hit = observer (() => {
    return (
        <View style={HitStyle.hit}>
            <Image source={animations.hitImage} style={HitStyle.hitImg}/>
        </View>
    );
})
