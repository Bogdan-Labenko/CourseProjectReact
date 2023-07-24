import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import "../styles/main.css"

export const Cart = () => {
  const cart = useSelector(state => state.cart)
  return <>
    <h1>Cart</h1>
    <div className='list'>
      {cart.products.map(prod => (
        <ProductItem key={prod.id} props={prod} />
      ))}
    </div>
    <h1>Total: {cart.total}</h1>
  </>
}