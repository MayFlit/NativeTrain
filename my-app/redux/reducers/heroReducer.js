import { INIT_HERO } from "../actionTypes/heroAT";


const initialState = { characteristics: {}}

export const heroReducer =  (state = initialState, action) => {
    switch (action.type) {
        case INIT_HERO:
            // await AsyncStorage.removeItem('')
            // const characteristics = await AsyncStorage.getItem('characteristics')


            // if (!characteristics) {
            //     const characteristics = {attack: 0}
            //     await AsyncStorage.setItem('characteristics', JSON.stringify(characteristics))

            //     return {...state, characteristics}
            // }
            // return {...state, characteristics: JSON.parse(characteristics)}

            return {...state, characteristics: action.payload }

            default:
            return state

    }

}
