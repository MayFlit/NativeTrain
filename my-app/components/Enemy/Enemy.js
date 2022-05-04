import React, {useEffect} from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initEnemyAC} from "../../redux/actionCreators/enemyAC";

export const Enemy = () => {
    const dispatch = useDispatch()
    const { characteristics } = useSelector(state => state.enemy)


    useEffect( () => {
        AsyncStorage.getItem('enemyHealth')
            .then(async (enemyHealth) => {
                if (!enemyHealth) {
                    const health = {health: 0}
                    await AsyncStorage.setItem('enemyAttack', JSON.stringify(health))
                    dispatch(initEnemyAC(health))
                }
                dispatch(initEnemyAC(JSON.parse(enemyHealth)))
            })
    },[dispatch])


    return (
        <View style={EnemyStyle.container}>
            {/*<Text>{characteristics.health}</Text>*/}
            <Image source={require('../../assets/enemy-1.jpg')} style={EnemyStyle.enemy}/>
        </View>
    );
}
