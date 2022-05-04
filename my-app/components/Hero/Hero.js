import React, {useEffect} from "react";
import {View, Image, Text} from "react-native";
import {HeroStyle} from "./style";
// import {useDispatch, useSelector} from "react-redux";
import {observer} from "mobx-react-lite";
// import {initHeroAC} from "../../redux/actionCreators/heroAC";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from "../../store/hero";


export const Hero = observer(() => {

    // const dispatch = useDispatch()
    // const { characteristics } = useSelector(state => state.hero)


    // useEffect( () => {
    //     AsyncStorage.getItem('heroAttack')
    //         .then(async (heroAttack) => {
    //             if (!heroAttack) {
    //                 const attack = {attack: 0}
    //                await AsyncStorage.setItem('heroAttack', JSON.stringify(attack))
    //                 dispatch(initHeroAC(attack))
    //             }
    //             dispatch(initHeroAC(JSON.parse(heroAttack)))
    //         })
    // },[dispatch])


    // console.log(characteristics, 'lalalasd123123asd')

    // console.log('lala')



    return (
        <View style={HeroStyle.container}>
            {hero.characteristics.attack && <Text onPress={hero.increment}  style={{color: 'red', fontSize: 40}}>attack {hero.characteristics.attack}</Text>}
            <Image source={require('../../assets/hero200.png')} style={HeroStyle.hero}/>
        </View>
    );
})
