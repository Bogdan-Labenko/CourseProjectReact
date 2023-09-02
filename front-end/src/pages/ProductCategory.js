import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsByType } from "../async/dataFetch";
import Typography from '@mui/material/Typography';
import { color1, color2, color3, color4, color5} from '../styles/colorScheme'
import ProductsList from "../components/ProductsList";

const ProductCategory = ({genderType, productType}) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.pageProducts.products)
    const isLoading = useSelector(state => state.pageProducts.isLoading)

    useEffect(() => {
            dispatch(setProductsByType(genderType, productType))
        },
        [genderType, productType]
    )
    return <>
        <Typography sx={{
            textAlign: 'center',
            fontSize: '30px',
            color: `${color1}`
        }}>{genderType} {productType}</Typography>
        {isLoading
            ? <Typography>Is loading...</Typography>
            : <ProductsList products={products}></ProductsList>}
    </>
}

export default ProductCategory;