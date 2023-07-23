import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsByType } from "../async/dataFetch";
import ProductItem from "../components/ProductItem";
const ProductCategory = ({genderType, productType}) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.pageProducts)

    useEffect(() => dispatch(setProductsByType(genderType, productType)), [genderType, productType])
    return <>
        <h1>{productType}</h1>
        <div className="list">
            {products.length 
                ? products.map(prod => (
                <ProductItem key={prod.id} props={prod}/>
                ))
                : <h1 style={{textAlign: "center"}}>Products not found</h1>}
        </div>
    </>
}

export default ProductCategory;