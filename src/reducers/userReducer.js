const initialStateUser = {
    name : 'Kirill',
    age : 28
};

export default function userReducer(state = initialStateUser, action){
    if(action.type === 'SET_NAME_FULFILLED'){
        return {
            ...state, name: action.payload
        }
    }
    else if(action.type === 'SET_AGE'){
        return {
            ...state, age: action.payload
        }
    }
    return state
}