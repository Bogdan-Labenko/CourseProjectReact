const defaultState = {
    products: [],
    total: 0
}
const ADD_PROD = 'ADD_PROD'
export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_PROD: {
            const prod = state.products.find(pr => pr.id === action.payload.id)
            if(prod) {
                prod.count++
                console.log(state);
                return {... state};
            }
            else {
                return {...state, products: [...state.products, {...action.payload, count: 1}]}
            }
        }
        default: 
            return state;
    }
}

export const addProdToCartAction = (payload) => { return {type: ADD_PROD, payload} }