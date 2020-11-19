import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage.js";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";

import SizeContext from "./SizeContext";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  // const [cartLength, setCartLength] = useState(0);

  // useEffect(() => {
  //   if (user.userData != undefined && user.userData.cart != undefined) {
  //     setCartLength(user.userData.cart.length);
  //   }
  // }, [user]);

  const [refresh, setRefresh] = React.useState(true);

  const [sizeValue, setSizeValue] = React.useState(1);

  const sizes = [
    { key: 1, value: "S" },
    { key: 2, value: "M" },
    { key: 3, value: "L" },
    { key: 4, value: "XL" },
  ];

  const onSizeChange = (event) => {
    setSizeValue(event.currentTarget.value);
    // dispatch(addProductSize(productId, event.currentTarget.value));
    // reduxSize.bind(null, event.currentTarget.value);
    // dispatch(reduxSize(event.currentTarget.value));
    console.log("test");
    console.log(event.currentTarget.value);
  };

  const value = React.useMemo(
    () => ({
      sizeValue,
      onSizeChange,
      refresh,
      setRefresh,
    }),
    [sizeValue]
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar refresh={refresh} />
      <div
        style={{
          paddingTop: "69px",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <SizeContext.Provider value={value}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/product/upload"
              component={Auth(UploadProductPage, true)}
            />
            <Route
              exact
              path="/product/:productId"
              component={Auth(DetailProductPage, null)}
            />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/history" component={Auth(HistoryPage, true)} />
          </Switch>
        </SizeContext.Provider>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
