import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";

function CartPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
          dispatch(getCartItems(cartItems, props.user.userData.cart))
        //       .then(
        //   (response) => {
        //     if (response.payload.length > 0) {
        //       calculateTotal(response.payload);
        //     }
        //   }
        // );
      }
    }
  }, [props.user.userData]);

  return <div>CartPage</div>;
}

export default CartPage;
