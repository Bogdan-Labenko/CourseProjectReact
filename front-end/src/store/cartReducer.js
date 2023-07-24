const defaultState = {
    products: [],
    total: 0
}
const ADD_PROD = 'ADD_PROD'
const DECREASE_PROD = 'DECREASE_PROD'
export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        // case ADD_PROD: {
        //     const prod = state.products.find(pr => pr.id === action.payload.id)
        //     if(prod) {
        //         prod.count++
        //         console.log(state);
        //         return {... state};
        //     }
        //     else {
        //         return {...state, products: [...state.products, {...action.payload, count: 1}]}
        //     }
        // }
        case ADD_PROD: {
            const existingProduct = state.products.find(pr => pr.id === action.payload.id);
            if (existingProduct) {
              return {
                ...state,
                products: state.products.map(prod =>
                  prod.id === action.payload.id ? { ...prod, count: prod.count + 1 } : prod
                ), total: state.total + action.payload.price
              };
            } else {
              return {
                ...state,
                products: [...state.products, { ...action.payload, count: 1 }],
                total: state.total + action.payload.price
              };
            }
        }
        case DECREASE_PROD: {
            const existingProduct = state.products.find(pr => pr.id === action.payload.id);
            if (existingProduct) {
              if (existingProduct.count > 1) {
                return {
                  ...state,
                  products: state.products.map(prod =>
                    prod.id === action.payload.id ? { ...prod, count: prod.count - 1 } : prod
                  ), 
                  total: Number(state.total) - Number(action.payload.price)
                };
              } else {
                return {
                  ...state,
                  products: state.products.filter(prod => prod.id !== action.payload.id),
                  total: Number(state.total) - action.payload.price
                };
              }
            }
        }
        default: 
            return state;
    }
}

export const addProdToCartAction = (payload) => { return {type: ADD_PROD, payload} }
export const decreaseProdFromCartAction = (payload) => { return {type: DECREASE_PROD, payload} }