const defaultValue = {
    user: {},
    isUser: false
}

const SET_USER = "SET_USER"
const REMOVE_USER = 'REMOVE_USER'

export const userReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_USER:
            console.log(action.payload);
            return {user: action.payload, isUser: true}
        case REMOVE_USER:
            return {user: {}, isUser: false}
        default:
            return state
    }
}

export const setUser = (payload) => {return {type: SET_USER, payload: payload}}
export const removeUser = (payload) => {return {type: REMOVE_USER, payload: payload}}