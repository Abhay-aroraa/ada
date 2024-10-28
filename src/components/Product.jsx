import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./contexts/ShopContext";
import Breadcums from "./Breadcums"

const Product = () => {
    const { data_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = data_product.find((e)=> e.id === Number(productId)
    ); return (
        <div>

            <Breadcums product={product} />
        </div>
    )

}
export default Product;