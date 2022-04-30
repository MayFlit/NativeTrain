import React from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";

export const Enemy = () => {
    return (
        <View style={EnemyStyle.container}>
            <Image source={require('../../assets/enemy-1.jpg')} style={EnemyStyle.enemy}/>
        </View>
    );
}
