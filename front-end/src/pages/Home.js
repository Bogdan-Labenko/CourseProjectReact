import { useEffect, useState } from "react";
import { setAllProducts } from "../async/dataFetch";
import "../styles/main.css"
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList";
import Typography from "@mui/material/Typography";
import {color1} from "../styles/colorScheme";


const Home = () => {
    const products = useSelector(state => state.home.products)
    const isLoading = useSelector(state => state.home.isLoading)
    const dispatch = useDispatch()

    useEffect(() => dispatch(setAllProducts()), [])

    return <>
        <Typography sx={{
            textAlign: 'center',
            fontSize: '30px',
            color: `${color1}`
        }}>Home</Typography>
        {isLoading
        ? <Typography>Is loading...</Typography>
        : <ProductsList products={products}></ProductsList>}
    </>;
  };
export default Home;