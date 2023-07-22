import axios from "axios";
import { SetAllProductsAction } from "../store/homeReducer";



export const setAllProducts = () => {
    return dispatch => {
        const url = "http://localhost:5098/products"
        axios.get(url)
            .then(res => dispatch(SetAllProductsAction(res.data)))
    }
}

export const login = (loginRequest)  => {
    const url = "http://localhost:5098/accounts/login"
    return axios.post(url, loginRequest)
    .then(res => console.log(res.data))
}

export const getAllCategories = async (setCategories) => {
    const url = "https://fakestoreapi.com/products/categories"
    return await axios.get(url)
        .then(res => setCategories(res.data) )
}

export const getProductsByCategory = async (category, setProductsInCategory) => {
    const url = `https://fakestoreapi.com/products/category/${category}`

    return await axios.get(url)
        .then(res => setProductsInCategory(res.data))
}

// export const getAllProducts = async (setProducts) => {
//     const url = "https://fakestoreapi.com/products"
    
//     return await axios.get(url)
//         .then(res => setProducts(res.data))
// }