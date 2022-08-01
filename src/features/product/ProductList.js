import ProductCard from "./ProductCard";

const ProductList = (props) => {
    return(
        <div>
            <div>
                <h2>Product</h2>
            </div>
            <div>
                {props.data.map((p)=> <ProductCard key ={p.productId} product={p}/>)}
            </div>
            
        </div>
    )
}

export default ProductList;