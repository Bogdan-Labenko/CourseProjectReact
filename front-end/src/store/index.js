import { applyMiddleware, combineReducers, createStore} from "redux"
import { cartReducer } from "./cartReducer"
import { homeReducer } from "./homeReducer"
import { productPageReducer } from "./productPageReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    cart: cartReducer,
    home: homeReducer,
    pageProducts: productPageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))