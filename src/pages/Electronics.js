import { useEffect, useState } from "react";
import { getProductsByCategory } from "../async/dataFetch";
import ProductItem from "../components/ProductItem";
import "../styles/main.css"

const Electronics = () => {
    const [products, setProducts] = useState([])

    const handleSort = (selectedSort) => {
        let sortedProducts = [...products];
        if (selectedSort === 'title') {
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedSort === 'priceAscending') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else {
            sortedProducts.sort((b, a) => a.price - b.price);
        }
        setProducts(sortedProducts);
    };

    useEffect(() => { 
        getProductsByCategory("electronics", setProducts)
    }, [])

    return <>
        <h1>Electronics</h1>
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
}
 
export default Electronics;