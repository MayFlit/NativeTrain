import React from "react";
import {View} from 'react-native';
import {observer} from "mobx-react-lite";
import {HealthBarStyle} from "./style";


export const HealthBar = observer (() => {
    return (
        <View style={HealthBarStyle.container}>
            <View style={HealthBarStyle.emptyBar} >
                <View style={HealthBarStyle.fullBar}></View>
            </View>
        </View>
    );
})
