import { combineReducers } from "redux";
import counterReducer from "./reducers/counter.reducer";
import usersReducer from "./reducers/users.reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})


export default rootReducer;