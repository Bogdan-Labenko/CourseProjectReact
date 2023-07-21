import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import "../styles/main.css"

export const Cart = () => {
    const products = useSelector(state => state.cart.products)
    
      return <>
      <h1>Cart</h1>
        <div className='list'>
          {products.map(prod => (
                <ProductItem key={prod.id} props={prod}/>
          ))}
        </div>
      </>
}