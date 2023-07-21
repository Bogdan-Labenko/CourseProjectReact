import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import "../styles/main.css"

export const Cart = () => {
    const products = useSelector(state => state.cart.products)

    // const increaseQuantity = (itemId) => {
    //     const updatedCartItems = products.map((item) => {
    //       if (item.id === itemId) {
    //         return { ...item, quantity: item.quantity + 1 };
    //       }
    //       return item;
    //     });
    //     setCartItems(updatedCartItems);
    //   };
    
    //   const decreaseQuantity = (itemId) => {
    //     const updatedCartItems = products.map((item) => {
    //       if (item.id === itemId && item.quantity > 1) {
    //         return { ...item, quantity: item.quantity - 1 };
    //       }
    //       return item;
    //     });
    //     setCartItems(updatedCartItems);
    //   };
    
      return <>
      <h1>Cart</h1>
        <div className='list'>
          {products.map(prod => (
                <ProductItem key={prod.id} props={prod}/>
          ))}
          {/* {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )} */}
        </div>
      </>
}