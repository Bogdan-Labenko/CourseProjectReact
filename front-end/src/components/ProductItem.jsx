import { useDispatch } from "react-redux";
import { addProdToCartAction, decreaseProdFromCartAction } from "../store/cartReducer";
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({props}) => {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseProdFromCartAction(props));
    };
    const handleIncrement = () => {
        dispatch(addProdToCartAction(props))
    }

    // return <div className="item">
    //     <img src={props.image} alt="baner" />
    //     <p>{props.name}</p>
    //     <h3>{props.price} $</h3>
    //     <h3>Rating: {props.rating}</h3>
    //     {props.count ? <div className="cartBlock">
    //             <button style={{display: "inline"}} onClick={() => dispatch(addProdToCartAction({...props}))}>+</button>
    //             <div style={{display: "inline"}}>{props.count}</div>
    //             <button style={{ display: "inline" }} onClick={handleDecrease}>-</button>
    //         </div> : <button onClick={() => dispatch(addProdToCartAction({...props}))}>Buy</button>}
    // </div>
    return <div className={styles['product-card']}>
                <img src={props.image} alt={props.name} className={styles['product-image']} />
                <div className={styles['product-title']}>{props.name}</div>
                <div className={styles['product-price']}>{props.price} $</div>
                <div className={styles['product-rating']}>Rating: {props.rating}</div>
                <div className={styles['product-gender']}>{props.genderType.name}</div>
                {!props.count 
                    ? <button className={styles['add-to-cart-button']} onClick={() => dispatch(addProdToCartAction(props))}>Add to cart</button>
                    : <div className={styles['product-counter']}>
                          <button className={styles['counter-button']} onClick={handleIncrement}>+</button>
                          <span className={styles['product-count']}>{props.count}</span>
                          <button className={styles['counter-button']} onClick={handleDecrease}>-</button>
                      </div>
                }
                
            </div>
}
 
export default ProductItem;