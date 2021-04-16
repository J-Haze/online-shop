import React, { useEffect } from "react";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `https://justins-online-shop.herokuapp.com/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
            className="cart-image"
            alt="product"
            src={renderCartImage(product.images)}
          />
          <div>{product.title} </div>
        </td>
        <td>
          <div className="flex-down">
            {product.sQuantity > 0 ? (
              <div>{product.sQuantity} Small</div>
            ) : (
              <div></div>
            )}

            {product.mQuantity > 0 ? (
              <div>{product.mQuantity} Medium</div>
            ) : (
              <div></div>
            )}

            {product.lQuantity > 0 ? (
              <div>{product.lQuantity} Large</div>
            ) : (
              <div></div>
            )}

            {product.xlQuantity > 0 ? (
              <div>{product.xlQuantity} X-Large</div>
            ) : (
              <div></div>
            )}
          </div>
        </td>
        <td>$ {product.price} </td>
        <td>
          <button onClick={() => props.removeItem(product._id)}>Remove </button>{" "}
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
