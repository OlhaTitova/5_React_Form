import React from "react";
import PropTypes from 'prop-types';
import { CartList } from "../components/CartList/CartList";
import { FormOrderRedux } from "../components/FormOrder/FormOrder";
import { connect } from "react-redux";
import { getCartList, removeAllCartProducts, selectCart } from "../store/cart/cart";


const mapStateToProps = (state) => ({
    cartProducts: selectCart(state),
})

export const CartPage = connect(mapStateToProps, { getCartList, removeAllCartProducts })(({ cartProducts, getCartList, removeAllCartProducts }) => {

    const onSubmit = (formData) => {
        const orderUser = { ...formData };
        orderUser.products = cartProducts;
        console.log(orderUser);
        removeAllCartProducts();
        getCartList();
    }

    return (
        <div className="container">
            <h3 className="heading-page">Cart</h3>
            <CartList />
            <hr />
            <br />
            <h4 className="heading-page">Delivery address</h4>
            <FormOrderRedux onSubmit={onSubmit} />
        </div>
    )
})

CartPage.propTypes = {
    getCartList: PropTypes.func,
    cartProducts: PropTypes.object,
    removeAllCartProducts: PropTypes.func
}
