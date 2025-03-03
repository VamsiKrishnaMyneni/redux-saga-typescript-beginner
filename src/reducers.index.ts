import { combineReducers } from "redux";
import counterReducer from "./Counter/reducers/counter.reducer";
import usersReducer from "./Users/reducers/users.reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})


export default rootReducer;