import {INIT_ENEMY} from "../actionTypes/enemyAT";

export const initEnemyAC = (payload) => {
    return {
        type: INIT_ENEMY,
        payload
    }
}