import LabelToggle from "../../components/LabelToggle";

const ProductCard = (props) => {
    const {product} = props
    return(
        <div>
            <div>
                <b>ID</b> {product.productId}
            </div>
            <div>
                <b>Name</b> <LabelToggle title={product.productName}/>
            </div>
        </div>
    )
}

export default ProductCard;