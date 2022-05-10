import React from "react";
import {View, Image} from "react-native";
import {EnemyStyle} from "../Enemy/style";
import animations from "../../store/animations";
import {observer} from "mobx-react-lite";



export const Poison = observer (() => {
    return (
        <View style={EnemyStyle.container}>
            <Image source={animations.poisonImage} style={EnemyStyle.enemy}/>
        </View>
    );
})
