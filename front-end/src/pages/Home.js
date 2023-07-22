import { useEffect, useState } from "react";
import { login, setAllProducts } from "../async/dataFetch";
import ProductItem from "../components/ProductItem";
import "../styles/main.css"
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    const products = useSelector(state => state.home)
    const dispatch = useDispatch()

    useEffect(() => dispatch(setAllProducts()), [])

    const handleSort = (selectedSort) => {
        let sortedProducts = [...products];
        if (selectedSort === 'title') {
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedSort === 'priceAscending') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else {
            sortedProducts.sort((b, a) => a.price - b.price);
        }
        dispatch(setAllProducts(sortedProducts))
    };

    return <>
        <h1>Home</h1>
        <select defaultValue={"title"} onChange={(e) => {handleSort(e.target.value)}}>
            <option value={"title"}>Sort by title</option>
            <option value={"priceAscending"}>Sort by price ascending</option>
            <option value={"priceReduction"}>Sort by price reduction</option>
        </select>
        <div className="list">
            {products.map(prod => (
                <ProductItem key={prod.id} props={prod}/>
                ))}
        </div>
    </>;
  };
export default Home;