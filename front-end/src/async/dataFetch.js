import axios from "axios";
import { SetAllProductsAction } from "../store/homeReducer";
import { SetProductsByTypeAction } from "../store/productPageReducer";

export const setProductsByType = (genderType, productType) => {
    return dispatch => {
        const url = `http://localhost:5098/products?genderType=${genderType}&productType=${productType}`
        axios.get(url)
            .then(res => dispatch(SetProductsByTypeAction(res.data)))
    }
}

export const setAllProducts = () => {
    return dispatch => {
        const url = "http://localhost:5098/products/all"
        axios.get(url)
            .then(res => dispatch(SetAllProductsAction(res.data)))
    }
}

export const login = (loginRequest)  => {
    const url = "http://localhost:5098/accounts/login"
    return axios.post(url, loginRequest)
    .then(res => console.log(res.data))
}