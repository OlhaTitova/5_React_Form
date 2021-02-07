import React from "react";
import { ProductList } from "../components/ProductList/ProductList";


export const ShopPage = () => {

    return (
        <div>
            <div className="container">
                <h3 className="heading-page">Shop</h3>
                <ProductList />
            </div>
        </div>
    )
}
