import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartDetail from "./CartDetail";
import Report from "./Report";
import { Table, Card } from 'react-bootstrap';

export default function YourCarts() {
    const yourCarts = useSelector((state) => state.yourCarts);
    const total = yourCarts.reduce(
        (a, b) => a + b.product.price * b.quantity,
        0
    );

    const cartItems = yourCarts.map((item, index) => (
        <CartItem key={item.id} item={item} index={index + 1} />
    ));

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Card bg="light" border="pink" text="pink" className="custom-card" >
                <Card.Header className="custom-card-header" style={{ backgroundColor: "#f2dedd", color: "#ad4a48"}}>
                    <Card.Title as="h1">Your Cart</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="cartitem">
                            {cartItems}
                        </tbody>
                    </Table>
                    <CartDetail a={yourCarts.length} b={total} />
                </Card.Body>
            </Card>
            <Report />
        </div>
    );
}
