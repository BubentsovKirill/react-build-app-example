const initialStateMath = {
    result : 0,
    lastValue : []
};

export default function mathReducer(state = initialStateMath, action){
    if(action.type === 'ADD'){
        return {
            ...state,
            result: state.result + action.payload,
            lastValue: [...state.lastValue, action.payload]
        }
    }
    else if(action.type === 'SUBTRACT'){
        return {
            ...state,
            result: state.result - action.payload,
            lastValue: [...state.lastValue, action.payload]
        }
    }
    return state
}