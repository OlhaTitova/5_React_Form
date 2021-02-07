import React from "react";
import PropTypes from 'prop-types';
import { CartList } from "../components/CartList/CartList";
import { FormOrderRedux } from "../components/FormOrder/FormOrder";
import { connect } from "react-redux";
import { getCartList, selectCart } from "../store/cart";


const mapStateToProps = (state) => ({
    cartProducts: selectCart(state),
})

export const CartPage = connect(mapStateToProps, { getCartList })(({ cartProducts, getCartList }) => {


    const onSubmit = (formData) => {
        const orderUser = { ...formData };
        orderUser.products = cartProducts;
        console.log(orderUser);
        localStorage.removeItem('cardList');
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
    product: PropTypes.object,
}
