import { combineReducers } from "redux";
import { heroReducer } from "./heroReducer";
import {enemyReducer} from "./enemyReducer";

export const rootReducer = combineReducers({
    hero: heroReducer,
    enemy: enemyReducer,
})
