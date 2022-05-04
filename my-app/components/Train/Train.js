import React from "react";
import {View, Image, Text} from "react-native";
import {observer} from "mobx-react-lite";
import train from '../../store/train'



export const Train = observer(() => {


    return (
        <View>
         <Text onPress={train.increment} style={{fontSize: 100}}>Lalaila</Text>
            <Text style={{fontSize: 100}}>{train.count}</Text>
        </View>
    );
})
