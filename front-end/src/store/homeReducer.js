const defaultValue = []

const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"

export const homeReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_ALL_PRODUCTS:
            return[...action.payload]
        default:
            return state
    }
}

export const SetAllProductsAction = (payload) => {return {type: SET_ALL_PRODUCTS, payload: payload}}