import { handleActions } from 'redux-actions';
import { USER_FETCH_FAILED, USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from '../actions/users.action.types';

const initialState = {
    users: {
        data: [],
        loading: false,
        error: false
    }
}


const updateUsers = (state = initialState, action: any) => {
    return {
        ...state,
        users: {
            ...state.users,
            loading: false,
            data: action.data
        }
    }
}


const updateUsersLoading = (state = initialState, action: any) => {
    return {
        ...state,
        users: {
            ...state.users,
            loading: true
        }
    }
}


const updateUsersError = (state = initialState, action: any) => {
    return {
        ...state,
        users: {
            ...state.users,
            loading: false,
            error: action.error
        }
    }
}


const usersReducer = handleActions({
    [USER_FETCH_SUCCEEDED]: (...args) => updateUsers(...args),
    [USER_FETCH_REQUESTED]: (...args) => updateUsersLoading(...args),
    [USER_FETCH_FAILED]: (...args) => updateUsersError(...args),
}, initialState);



export default usersReducer;