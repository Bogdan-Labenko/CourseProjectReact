import axios from "axios";

export const  getAllCategories = async (setCategories) => {
    const url = "https://fakestoreapi.com/products/categories"
    return await axios.get(url)
        .then(res => setCategories(res.data) )
}

export const getProductsByCategory = async (category, setProductsInCategory) => {
    const url = `https://fakestoreapi.com/products/category/${category}`

    return await axios.get(url)
        .then(res => setProductsInCategory(res.data))
}

export const getAllProducts = async (setProducts) => {
    const url = "https://fakestoreapi.com/products"
    
    return await axios.get(url)
        .then(res => setProducts(res.data))
}