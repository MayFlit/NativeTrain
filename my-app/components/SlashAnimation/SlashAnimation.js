import React, {useEffect} from "react";
import {View, Image} from "react-native";
import {EnemyStyle} from "../Enemy/style";
import slashAnimation from "../../store/slashAnimation";
import {observer} from "mobx-react-lite";



export const SlashAnimation = observer (() => {
    return (
        <View style={EnemyStyle.container}>
            <Image source={slashAnimation.currentImage} style={EnemyStyle.enemy}/>
        </View>
    );
})
