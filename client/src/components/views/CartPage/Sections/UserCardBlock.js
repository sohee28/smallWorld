import React from "react";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td style={{ textAlign: "center" }}>
          <img
            style={{ width: "50px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td style={{ textAlign: "center" }}>{product.quantity} EA</td>
        <td style={{ textAlign: "center" }}>$ {product.price} </td>
        <td style={{ textAlign: "center" }}>
          <button
            className="CartPageBtn"
            onClick={() => props.removeItem(product._id)}
          >
            Remove
          </button>
        </td>
      </tr>
    ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
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
