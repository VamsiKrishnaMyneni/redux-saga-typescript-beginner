import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/counter.action.types"

const intialState = {
    count: 0
}

const incrementCouter = (state = intialState, action: any) => {
    return {
        ...state,
        count: state.count
    }
}

const decrementCouter = (state = intialState, action: any) => {
    return {
        ...state,
        count: action.count
    }
}

export default function counterReducer(state = intialState, action: any) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return incrementCouter(state, action);
        case DECREMENT_COUNTER:
            return decrementCouter(state, action);
        default:
            return state;
    }
}