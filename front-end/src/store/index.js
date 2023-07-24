import { applyMiddleware, combineReducers, createStore} from "redux"
import { cartReducer } from "./cartReducer"
import { homeReducer } from "./homeReducer"
import { productPageReducer } from "./productPageReducer"
import thunk from "redux-thunk"
import { userReducer } from "./userReducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    home: homeReducer,
    pageProducts: productPageReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))