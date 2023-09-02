const defaultValue = {
    products: [],
    isLoading: false
}

const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
const SET_IS_LOADING = 'SET_IS_LOADING'

export const homeReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_ALL_PRODUCTS:
            return {...state, products: action.payload}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const SetAllProductsAction = (payload) => {return {type: SET_ALL_PRODUCTS, payload: payload}}
export const SetIsLoadingHome = (payload) => {return {type: SET_IS_LOADING, payload: payload}}