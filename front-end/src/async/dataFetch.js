import axios from "axios";
import {SetAllProductsAction, SetIsLoadingHome} from "../store/homeReducer";
import {SetIsLoadingPage, SetProductsByTypeAction} from "../store/productPageReducer";

export const setProductsByType = (genderType, productType) => {
    return dispatch => {
        dispatch(SetIsLoadingPage(true))
        const url = `http://localhost:5098/products?genderType=${genderType}&productType=${productType}`
        axios.get(url)
            .then(res => dispatch(SetProductsByTypeAction(res.data)))
            .catch(errors => console.log(errors))
            .finally(() => dispatch(SetIsLoadingPage(false)))
    }
}

export const setAllProducts = () => {
    return dispatch => {
        dispatch(SetIsLoadingHome(true))
        const url = "http://localhost:5098/products/all"
        axios.get(url)
            .then(res => dispatch(SetAllProductsAction(res.data)))
            .catch(errors => console.log(errors))
            .finally(() => dispatch(SetIsLoadingHome(false)))
    }
}

