import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  // ADD_SIZE,
  // REDUX_SIZE
} from "./types";
import { USER_SERVER } from "../components/Config.js";

// import React, { useContext } from "react";
// import { SizeConext from "./client/src/components/views/DetailProductPage/DetailProductPage.js"}
// const sizeContext = useContext(SizeContext);
// const { sizeShared } = sizeContext;

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function addToCart(_id, size) {
  // console.log("here", sizeShared);
  const request = axios
    .get(`${USER_SERVER}/addToCart?productId=${_id}`)
    // .then((response) => response.data);

    //   .then(
    // .get(`${USER_SERVER}/addToCart?productId=${_id}/${size}`)
    .then((response) => {
      console.log("rd", response.data);
      console.log("req", request);
      console.log("atcu", ADD_TO_CART_USER);
      // console.log("size:", sizeShared)
    });

  //     .then((response) => {
  //       // (response.data)
  //       response.data
  //       console.log(response)
  // })

  //Need to pass size into "users.js" add to cart function

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}

// export function reduxSize(size) {
//   console.log("inner", size)
//   return {
//       type: 'REDUX_SIZE',
//       size
//     }
//   }

export function addProductSize(_id, size) {
  console.log("innerSize:", size)
  const request = axios
    .get(`${USER_SERVER}/addToCart?productId=${_id}`)
    .then((response) => {
      response.data.size = size;
      console.log("rd2", response.data.size);
      console.log("req2", request);
      console.log("atcu2", ADD_TO_CART_USER);
    });
  
      return {
        type: `ADD_SIZE`,
        payload: size,
        // size
      };
    }

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      //Make CartDetail inside Redux Store
      // We need to add quantity data to Product Information that come from Product Collection.

      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, i) => {
          if (cartItem.id === productDetail._id) {
            response.data[i].quantity = cartItem.quantity;
          }
        });
      });

      return response.data;
    });

  return {
    type: GET_CART_ITEMS_USER,
    payload: request,
  };
}

export function removeCartItem(id) {
  const request = axios
    .get(`/api/users/removeFromCart?_id=${id}`)
    .then((response) => {
      response.data.cart.forEach((item) => {
        response.data.cartDetail.forEach((k, i) => {
          if (item.id === k._id) {
            response.data.cartDetail[i].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: REMOVE_CART_ITEM_USER,
    payload: request,
  };
}
