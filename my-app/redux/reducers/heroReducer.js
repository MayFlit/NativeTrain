import { INIT_HERO } from "../actionTypes/heroAT";
import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


const initialState = { characteristics: [0, 0], equipment: {} }

export const heroReducer = async (state = initialState, action) => {
    switch (action.type) {
        case INIT_HERO:
            // const health = await AsyncStorage.getItem('heroHealth')
            const attackPoints = await asyncStorage.getItem('heroAttack')
            // const deffencePoints = await asyncStorage.getItem('heroAttack')
            // return {...state, state.characteristics: {attack: attackPoints}

        default:
            return state


    }

}