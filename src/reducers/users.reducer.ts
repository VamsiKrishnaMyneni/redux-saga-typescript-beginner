

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


export default function usersReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            return updateUsers(state, action)
        case 'USER_FETCH_REQUESTED':
            return updateUsersLoading(state, action)
        case 'USER_FETCH_FAILED':
            return updateUsersError(state, action)
        default:
            return state
    }
}
