import ProductItem from "./ProductItem";

const ProductsList = ({products}) => {
    return <div className="list">
        {products.map(prod => (
            <ProductItem key={prod.id} props={prod}/>
        ))}
    </div>
}

export default ProductsList;