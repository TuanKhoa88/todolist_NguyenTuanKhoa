import React from "react";
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import Product from "./Product";

export default function ListProducts() {
    const listProducts = useSelector((state) => state.listProducts);
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Card className="bg-light">
                <Card.Header style={{ backgroundColor: "#3279b7", color: "white" }}>
                    <h1>List Products</h1>
                </Card.Header>
                <Card.Body>
                    {listProducts.map((product) => (
                        <Product key={product.productId} product={product} />
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}
