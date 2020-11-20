import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems, removeCartItem, onSuccessBuy } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Result, Empty } from "antd";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
        setShowTotal(false);
      } else {
        calculateTotal(response.payload.cartDetail);
      }
    });
  };

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            if (response.payload.length > 0) {
              calculateTotal(response.payload);
            }
          }
        );
      }
    }
  }, [props.user.userData]);

  //PayPal Transaction
      const transactionSuccess = (data) => {
        dispatch(
          onSuccessBuy({
            cartDetail: props.user.cartDetail,
            paymentData: data,
          })
        ).then((response) => {
          if (response.payload.success) {
            setShowSuccess(true);
            setShowTotal(false);
          }
        });
      };

      const transactionError = () => {
        console.log("Paypal error");
      };

      const transactionCanceled = () => {
        console.log("Transaction canceled");
      };

  return (
    <div id="cart-page">
      <h1> My Cart</h1>
      
      <div>
        <UserCardBlock
          products={props.user.cartDetail}
          removeItem={removeFromCart}
        />

        {ShowTotal ? (
          <div id="cart-total">
            <h2>Total amount: ${Total} </h2>
          </div>
        ) : ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <div id="empty-cart-cont">
            <br />
            <Empty description={false} />
            <p>No Items In the Cart</p>
          </div>
        )}
      </div>

      {ShowTotal && (
        <Paypal
          toPay={Total}
          onSuccess={transactionSuccess}
          transactionError={transactionError}
          transactionCanceled={transactionCanceled}
        />
      )}
    </div>
  );
}

export default CartPage;
