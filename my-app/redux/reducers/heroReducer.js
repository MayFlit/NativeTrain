import { INIT_HERO } from "../actionTypes/heroAT";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = { characteristics: {attack: 0} }

export const heroReducer = async (state = initialState, action) => {
    switch (action.type) {
        case INIT_HERO:
            // await AsyncStorage.removeItem('')
            const characteristics = await AsyncStorage.getItem('characteristics')


            if (!characteristics) {
                const characteristics = {attack: 0}
                await AsyncStorage.setItem('characteristics', JSON.stringify(characteristics))

                return {...state, characteristics}
            }
            return {...state, characteristics: JSON.parse(characteristics)}

        default:
            return state


    }

}