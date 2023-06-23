import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../ReduxComponents/Action";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function CartItem({ item, index }) {
    const [quantityItem, setQuantityItem] = useState(0);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(item.id));
    };

    const handleUpdate = () => {
        dispatch(updateProduct(item.product.productId, quantityItem));
    };

    useEffect(() => {
        setQuantityItem(item.quantity);
    }, [item.quantity]);

    return (
        <tr>
            <td>{index}</td>
            <td>{item.product.productName}</td>
            <td>{item.product.price} USD</td>
            <td>
                <input
                    type="number"
                    min={1}
                    value={quantityItem}
                    onChange={(e) => setQuantityItem(+e.target.value)}
                />
            </td>
            <td>
                <b>{item.product.price * quantityItem} USD</b>
            </td>
            <td>
                <Button variant="info" onClick={handleUpdate}>
                    Update
                </Button>{" "}
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </td>
        </tr>
    );
}
