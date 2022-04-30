import {INIT_HERO} from "../actionTypes/heroAT";

export const initHeroAC = (payload) => {
    return {
        type: INIT_HERO,
        payload
    }
}