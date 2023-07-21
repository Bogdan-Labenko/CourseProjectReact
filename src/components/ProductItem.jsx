import { useDispatch } from "react-redux";
import "../styles/ProductItem.css"
import { addProdToCartAction } from "../store/cartReducer";


const ProductItem = ({props}) => {
    const dispatch = useDispatch();

    

    return <div className="item">
        <h3>{props.title}</h3>
        <img src={props.image} alt="baner" />
        <h3>{props.price} $</h3>
        <h3>Rating: {props.rating.rate}/5</h3>
        {props.count ? <div className="cartBlock">
                <button style={{display: "inline"}} onClick={() => dispatch(addProdToCartAction({...props}))}>+</button>
                <div style={{display: "inline"}}>{props.count}</div>
                <button style={{display: "inline"}}>-</button>
            </div> : <button onClick={() => dispatch(addProdToCartAction({...props}))}>Buy</button>}
    </div>
}
 
export default ProductItem;