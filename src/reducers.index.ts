import { combineReducers } from "redux";
import counterReducer from "./reducers/counter.reducer";
import herosReducer from "./reducers/heros.reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    heros: herosReducer
})


export default rootReducer;