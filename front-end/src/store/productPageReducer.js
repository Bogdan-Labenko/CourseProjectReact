const defaultValue = {
    products: [],
    isLoading: false
}

const SET_PRODUCTS_BY_TYPE = 'SET_PRODUCTS_BY_TYPE'
const SET_IS_LOADING = 'SET_IS_LOADING'

export const productPageReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_PRODUCTS_BY_TYPE:
            return {...state, products: action.payload}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const SetProductsByTypeAction = (payload) => {return {type: SET_PRODUCTS_BY_TYPE, payload: payload}}
export const SetIsLoadingPage = (payload) => {return {type: SET_IS_LOADING, payload: payload}}