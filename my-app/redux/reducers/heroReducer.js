import { INIT_HERO } from "../actionTypes/heroAT";


const initialState = { characteristics: {}}

export const heroReducer =  (state = initialState, action) => {
    switch (action.type) {
        case INIT_HERO:
            return {...state, characteristics: action.payload }
        default:
            return state

    }

}