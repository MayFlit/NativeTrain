import React from "react";
import {View, Text} from "react-native";
import {observer} from "mobx-react-lite";
import {MainMenuStyle} from "./style";



export const MainMeny = observer (() => {
    return (
        <View style={MainMenuStyle.container}>
            <Text style={MainMenuStyle.text}>Играть</Text>
        </View>
    );
})
