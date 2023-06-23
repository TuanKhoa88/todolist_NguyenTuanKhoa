import React from "react";

export default function CartDetail({ a, b}) {
    let detail =
        a === 0 ? (
            <tr>
                <th >Empty product in your cart</th>
            </tr>
        ) : (
            <tr>
                <td >
                    There are <strong>{a}</strong> items in your shopping cart.
                </td>
                    <td  className="total-price text-total">
                    Total: {b} USD
                </td>
            </tr>
        );
    return <tfoot id="my-cart-footer">{detail}</tfoot>;
}
