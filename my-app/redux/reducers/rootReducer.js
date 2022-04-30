import { combineReducers } from "redux";
import { heroReducer } from "./heroReducer";

export const rootReducer = combineReducers({
    hero: heroReducer,
})
