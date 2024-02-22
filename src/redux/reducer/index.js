import handleCart from "./handleCart";
import { combineReducers } from "redux";
import favoritesReducer from "./addtofav";

const rootReducers = combineReducers({
    handleCart,favoritesReducer,
})

export default rootReducers;