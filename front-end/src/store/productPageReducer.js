const defaultValue = []

const SET_PRODUCTS_BY_TYPE = "SET_PRODUCTS_BY_TYPE"

export const productPageReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_PRODUCTS_BY_TYPE:
            return[...action.payload]
        default:
            return state
    }
}

export const SetProductsByTypeAction = (payload) => {return {type: SET_PRODUCTS_BY_TYPE, payload: payload}}