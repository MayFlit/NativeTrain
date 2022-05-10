import React from "react";
import {View, Image} from "react-native";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";
import {LightningOrbStyle} from "./style";



export const LightningOrb = observer (() => {
    return (
        <View style={LightningOrbStyle.orb}>
            <Image source={animations.lightningOrbImage}/>
        </View>
    );
})
