import { useDispatch } from "react-redux";
import "../styles/ProductItem.css"
import { addProdToCartAction, decreaseProdFromCartAction } from "../store/cartReducer";


const ProductItem = ({props}) => {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseProdFromCartAction(props));
      };

    return <div className="item">
        <p>{props.title}</p>
        <img src={props.image} alt="baner" />
        <h3>{props.price} $</h3>
        <h3>Rating: {props.rating.rate}/5</h3>
        {props.count ? <div className="cartBlock">
                <button style={{display: "inline"}} onClick={() => dispatch(addProdToCartAction({...props}))}>+</button>
                <div style={{display: "inline"}}>{props.count}</div>
                <button style={{ display: "inline" }} onClick={handleDecrease}>-</button>
            </div> : <button onClick={() => dispatch(addProdToCartAction({...props}))}>Buy</button>}
    </div>
}
 
export default ProductItem;