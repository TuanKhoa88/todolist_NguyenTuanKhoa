import React, { useState } from "react";
import { addProduct } from "../ReduxComponents/Action";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleAddProduct = () => {
        dispatch(addProduct(product, quantity));
    };
    const result =
        product.quantity !== 0 ? (
            <div>
                <input
                    style={{ width: "70px" }}
                    min={1}
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                />
                <a style={{ width: "70px" }} data-product={1} className="price" onClick={handleAddProduct}>
                    {product.price} USD
                </a>
            </div>
        ) : (
            <span className="price"> {product.price} USD</span>
        );
    return (
        <div className="d-flex picture purchase">
            <div>
                <a className="btn-bora">
                    <img
                        src={product.image}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="picture-info">
                <h5>{product.productName}</h5>
                <p>{product.title}</p>
                {result}
            </div>
        </div>
    );
}

