import React from "react";
import {View, Image} from "react-native";
import {EnemyStyle} from "../Enemy/style";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";



export const Heal = observer (() => {
    return (
        <View style={EnemyStyle.container}>
            <Image source={animations.healImage} style={EnemyStyle.enemy}/>
        </View>
    );
})
