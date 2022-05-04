import React, {useEffect} from "react";
import {View, Image, Text} from "react-native";
import {EnemyStyle} from "./style";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initEnemyAC} from "../../redux/actionCreators/enemyAC";

export const Enemy = () => {
    // const dispatch = useDispatch()
    // const { characteristics } = useSelector(state => state.enemy)
    //
    // // async function lalaila() {
    // //     const enemyHealth = await AsyncStorage.getItem('enemyHealth')
    // //     if (!enemyHealth) {
    // //         const health = {health: 0}
    // //         await AsyncStorage.setItem('enemyHealth', JSON.stringify(health))
    // //         dispatch(initEnemyAC(health))                }
    // //     dispatch(initEnemyAC(JSON.parse(enemyHealth)))
    // //
    // // }
    // //
    // // // dispatch(initEnemyAC({health: 0}))
    // //
    // //     useEffect(() => {
    // //         lalaila()
    // //     }, [dispatch])
    //
    //
    // useEffect( () => {
    //     AsyncStorage.getItem('enemyHealth')
    //         .then(async (enemyHealth) => {
    //             if (!enemyHealth) {
    //                 const health = {health: 50}
    //                 await AsyncStorage.setItem('enemyHealth', JSON.stringify(health))
    //                 dispatch(initEnemyAC(health))
    //             }
    //             dispatch(initEnemyAC(JSON.parse(enemyHealth)))
    //         })
    // },[dispatch])


    // console.log(characteristics, 'en1')

    return (
        <View style={EnemyStyle.container}>
            {/*<Text>{characteristics.health}</Text>*/}
            <Image source={require('../../assets/enemy-1.jpg')} style={EnemyStyle.enemy}/>
        </View>
    );
}
