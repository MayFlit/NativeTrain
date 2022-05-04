import { INIT_ENEMY } from "../actionTypes/enemyAT";


const initialState = { characteristics: {}}

export const enemyReducer =  (state = initialState, action) => {
    switch (action.type) {
        case INIT_ENEMY:
            return {...state, characteristics: action.payload }


        default:
            return state

    }

}