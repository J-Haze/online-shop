/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import { Menu, Icon, Badge } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  const [cartLength, setCartLength] = useState(0);
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user.userData != undefined && user.userData.cart != undefined) {
      setCartLength(user.userData.cart.length);
    }
  }, [user, props.refresh]);

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Sign in</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Sign up</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item>

      {isAdmin ? 
        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>
      : ""}

        {props.drawer ? <Menu.Item key="cart" id="cart-cont-drawer">
          <Badge count={user.userData && cartLength}>
            <a href="/user/cart" id="cart-badge-drawer">
              <Icon type="shopping-cart" id="cart-icon-drawer" />
            </a>
          </Badge>
        </Menu.Item> : <Menu.Item key="cart" id="cart-cont">
            <Badge count={user.userData && cartLength}>
              <a href="/user/cart" id="cart-badge">
                <Icon type="shopping-cart" id="cart-icon" />
              </a>
            </Badge>
          </Menu.Item>}

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
